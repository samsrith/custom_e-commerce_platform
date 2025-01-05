const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Ensure upload directory exists
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Database Connection With MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Image Storage Engine
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: "/images/" + req.file.filename,
    });
});

// Route for Images folder
app.use("/images", express.static(uploadDir));

// Middleware to fetch user from token
const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Invalid token" });
    }
};

// Schema for creating user model
const Users = mongoose.model("Users", {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object, default: {} },
    date: { type: Date, default: Date.now },
});

// Schema for creating Product model
const Product = mongoose.model("Product", {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number },
    old_price: { type: Number },
});

// ROOT API Route For Testing
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Endpoint for user login
app.post("/login", async (req, res) => {
    console.log("Login");
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }
    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }
    const data = { user: { id: user.id } };
    const authToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, authToken });
});

// Endpoint for user signup
app.post("/signup", async (req, res) => {
    console.log("Sign Up");
    const { name, email, password } = req.body;

    let user = await Users.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User with this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new Users({ name, email, password: hashedPassword });
    try {
        await user.save();
        const data = { user: { id: user.id } };
        const authToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint for saving the product in cart
app.post("/addtocart", fetchuser, async (req, res) => {
    console.log("Add Cart");
    const user = await Users.findById(req.user.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const { itemId } = req.body;
    user.cartData[itemId] = (user.cartData[itemId] || 0) + 1;
    await user.save();
    res.json({ message: "Product added to cart!" });
});

// Endpoint for getting cart data of user
app.post("/getcart", fetchuser, async (req, res) => {
    console.log("Get Cart");
    const user = await Users.findById(req.user.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user.cartData);
});

// Endpoint for adding products using admin panel
app.post("/addproduct", async (req, res) => {
    const products = await Product.find({});
    const id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;
    const { name, description, image, category, new_price, old_price } = req.body;
    const newProduct = new Product({ id, name, description, image, category, new_price, old_price });

    try {
        await newProduct.save();
        res.json({ success: true, name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

// Endpoint for removing products using admin panel
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true });
});

// Endpoint for getting popular women's products
app.get("/popularinwomen", async (req, res) => {
    const { page = 1, limit = 4 } = req.query;
    const products = await Product.find({ category: "Women" })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    res.json(products);
});

// Endpoint for getting related products
app.get("/relatedproducts", async (req, res) => {
    const { category } = req.query;
    const products = await Product.find({ category });
    res.json(products.slice(0, 4));
});

// Endpoint for getting new collections
app.get("/newcollections", async (req, res) => {
    const newCollections = await Product.find().sort({ date: -1 }).limit(10);
    res.json(newCollections);
});

// Logout Endpoint
app.post("/logout", (req, res) => {
    // Token invalidation can be handled here (e.g., blacklisting)
    res.json({ success: true, message: "Logged out successfully" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
