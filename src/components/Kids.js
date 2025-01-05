import React from "react";
import "../styles/Kids.css"; // Import custom CSS for styling

const Kids = () => {
  return (
    <div className="kids-page">
      {/* Hero Section */}
      <section className="hero3">
        <div className="hero3-content">
          <h1>Shop the Latest Kids' Fashion</h1>
          <p>Bright and fun styles for your little ones!</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src={require('../img/kids-dresses.jpg')} alt="Kids Dresses" />
            <h3>Dresses</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/kids-tshirts.jpg')} alt="Kids T-Shirts" />
            <h3>T-Shirts</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/kids-shorts.jpg')} alt="Kids Shorts" />
            <h3>Shorts</h3>
          </div>
          <div className="category-card">
            <img src={require('../img/kids-shoes.jpg')} alt="Kids Shoes" />
            <h3>Shoes</h3>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={require('../img/children-dress.jpg')} alt="Product 1" />
            <h3>Floral Dress</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/t-shirts-kids.jpg')} alt="Product 2" />
            <h3>Graphic T-Shirt</h3>
            <p>$14.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/kids-shorts.jpg')} alt="Product 3" />
            <h3>Comfortable Shorts</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img src={require('../img/kids-sneakers.jpg')} alt="Product 4" />
            <h3>Stylish Sneakers</h3>
            <p>$34.99</p>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotion">
        <h2>Big Sale on Kids' Clothing!</h2>
        <p>Up to 50% off on select items. Hurry, limited time only!</p>
        <button className="explore-deals">Explore Deals</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Parents Are Saying</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Great quality clothes for kids. They love them!"</p>
            <h4>- Olivia H.</h4>
          </div>
          <div className="testimonial-card">
            <p>"My daughter looks adorable in the dresses. Perfect fit!"</p>
            <h4>- Emma P.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kids;
