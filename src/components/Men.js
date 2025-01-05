import React from "react";
import "../styles/Men.css"; // Import the custom CSS for styling

const Men = () => {
  return (
    <div className="men-page">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero1-content">
          <h1>Shop the Latest Men's Fashion</h1>
          <p>Discover premium styles that suit your taste</p>
          <button className="shop-noww">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={require('../img/shirt.jpg')} alt="Shirts" />
            <h3>Shirts</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/jeans.jpg')} alt="Jeans" />
            <h3>Jeans</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/jacket.jpg')} alt="Jackets" />
            <h3>Jackets</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/shoes.jpg')} alt="Shoes" />
            <h3>Shoes</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={require('../img/t-shirt.jpg')} alt="Product 1" />
            <h3>Men's T-Shirt</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/skinny.jpg')} alt="Product 2" />
            <h3>Skinny Jeans</h3>
            <p>$49.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/leather jk.jpg')} alt="Product 3" />
            <h3>Leather Jacket</h3>
            <p>$79.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/sneakers.jpg')} alt="Product 4" />
            <h3>Stylish Sneakers</h3>
            <p>$59.99</p>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotion">
        <h2>Special Offer</h2>
        <p>Exclusive 30% OFF on Selected Men's Clothing</p>
        <button className="explore-deals">Explore Deals</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Great quality and fast delivery! Totally worth it!"</p>
            <h4>- Mark L.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Love the men's collection. Trendy and affordable."</p>
            <h4>- James P.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Men;
