const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect('mongodb+srv://venubalne2002:venu2002@digiwallet.fsm62.mongodb.net/fashion') // Replace with your actual MongoDB connection string
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
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
app.use("/images", express.static("upload/images"));

// Middleware to fetch user from token
const fetchuser = async (req, res, next) => {
    const token = req.header("auth-token"); // Adjust header name if necessary
    if (!token) {
        return res.status(401).send({ errors: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, 'your_secret_key'); // Replace 'your_secret_key' with your actual secret key
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ errors: "Invalid token" });
    }
};

// Schema for creating user model
const Users = mongoose.model("Users", {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    date: { type: Date, default: Date.now() },
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
    let success = false;
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, 'your_secret_key');
            res.json({ success: true, authToken: authToken });
        } else {
            res.status(400).json({ errors: "Invalid Credentials" });
        }
    } else {
        res.status(400).json({ errors: "Invalid Credentials" });
    }
});

// Endpoint for user signup
app.post("/signup", async (req, res) => {
    console.log("Sign Up");
    let success = false;
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({
            success: success,
            errors: "existing user found with this email",
        });
    }
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        await user.save();
        success = true;
        const data = {
            user: {
                id: user.id,
            },
        };
        const authToken = jwt.sign(data, 'your_secret_key');
        res.json({ success: success, authToken: authToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint for saving the product in cart
app.post("/addtocart", fetchuser, async (req, res) => {
    console.log("Add Cart");
    let userData = await Users.findOne({ id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData },
        { new: true }
    );
    res.json({ message: "Product added to cart!" });
});

// Endpoint for getting cart data of user
app.post("/getcart", fetchuser, async (req, res) => {
    console.log("Get Cart");
    let userData = await Users.findOne({ id: req.user.id });
    res.json(userData.cartData);
});

// Endpoint for adding products using admin panel
app.post("/addproduct", async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const newProduct = new Product({
        id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    try {
        await newProduct.save();
        console.log("Saved");
        res.json({ success: true, name: req.body.name });
    } catch (error) {
        console.log(error);
        res.json({ message: "Something went wrong" });
    }
});

// Endpoint for removing products using admin panel
app.post("/removeproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true });
});

// Endpoint for getting popular women's products
app.get("/popularinwomen", async (req, res) => {
    let products = await Product.find({ category: "Women" });
    let arr = products.slice(0, 4);
    res.send(arr);
});

// Endpoint for getting related products
app.get("/relatedproducts", async (req, res) => {
    const { category } = req.body;
    const products = await Product.find({ category });
    const arr = products.slice(0, 4);
    res.send(arr);
});

// Endpoint for getting new collections
app.get("/newcollections", async (req, res) => {
    // Implement logic to get new collections here
    res.send(arr); // Replace with actual data
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});