import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check for authentication token on component mount
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/signup"); // Redirect to Signup page
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1>
        <span>SMT</span>
        <span>Kart</span>
      </h1>
      <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" onClick={toggleMobileMenu}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" onClick={toggleMobileMenu}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" onClick={toggleMobileMenu}>
              Kids
            </Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link to="/signup" onClick={toggleMobileMenu}>
                Signup
              </Link>
            </li>
          ) : null}
          {isLoggedIn ? (
            <li>
              <Link to='/signup' onClick={toggleMobileMenu}>
              <button className="logout-btn" onClick={handleLogout}>
                LogOut
              </button>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={toggleMobileMenu}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
