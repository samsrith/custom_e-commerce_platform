import React from "react";
import "../styles/Women.css"; // Import the custom CSS for styling

const Women = () => {
  return (
    <div className="women-page">
      {/* Hero Section */}
      <section className="hero2">
        <div className="hero2-content">
          <h1>Shop the Latest Women's Fashion</h1>
          <p>Fresh styles, perfect for every occasion</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={require('../img/dresses.jpg')} alt="Dresses" />
            <h3>Dresses</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/tops.jpg')} alt="Tops" />
            <h3>Tops</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/skirts.jpg')} alt="Skirts" />
            <h3>Skirts</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/jewelry.jpg')} alt="Jewelry" />
            <h3>Jewelry</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={require('../img/long-dress.jpg')} alt="Long Dress" />
            <h3>Long Evening Dress</h3>
            <p>$79.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/blouse.jpg')} alt="Blouse" />
            <h3>Stylish Blouse</h3>
            <p>$34.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/ankle-boots.jpg')} alt="Ankle Boots" />
            <h3>Chic Ankle Boots</h3>
            <p>$59.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/handbag.jpg')} alt="Handbag" />
            <h3>Leather Handbag</h3>
            <p>$99.99</p>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotion">
        <h2>Seasonal Sale</h2>
        <p>Up to 40% off on Women's Fashion</p>
        <button className="explore-deals">Explore Deals</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"I love the dresses! They're beautiful and high quality."</p>
            <h4>- Sarah T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The accessories are perfect for every outfit! Totally recommend."</p>
            <h4>- Emily L.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;
