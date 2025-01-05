import React from "react";
import "../styles/Home.css";

// Import images
import electronicImage from "../img/electronic.jpg";
import fashionImage from "../img/fashion.jpg";
import homeImage from "../img/home.jpg";
import beautyImage from "../img/beauty.jpg";
import mobileImage from "../img/mobile.jpg";
import headphoneImage from "../img/headphone.jpg";
import dressImage from "../img/dress.jpg";
import gamingChairImage from "../img/gaming chair.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style</h1>
          <p>Explore the latest trends at unbeatable prices!</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={electronicImage} alt="Electronics" />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img src={fashionImage} alt="Fashion" />
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <img src={homeImage} alt="Home & Living" />
            <h3>Home & Living</h3>
          </div>
          <div className="category-card">
            <img src={beautyImage} alt="Beauty Products" />
            <h3>Beauty</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={mobileImage} alt="Product 1" />
            <h3>Smartphone</h3>
            <p>$499.00</p>
          </div>
          <div className="product-card">
            <img src={headphoneImage} alt="Product 2" />
            <h3>Headphones</h3>
            <p>$99.00</p>
          </div>
          <div className="product-card">
            <img src={dressImage} alt="Product 3" />
            <h3>Designer Dress</h3>
            <p>$89.00</p>
          </div>
          <div className="product-card">
            <img src={gamingChairImage} alt="Product 4" />
            <h3>Gaming Chair</h3>
            <p>$199.00</p>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotion">
        <h2>Special Offer</h2>
        <p>Up to 50% off on select items!</p>
        <button className="explore-deals">Explore Deals</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Amazing shopping experience! Highly recommend."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"Quality products at great prices. Love it!"</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
