import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = props => {
  const logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      props.setUser(null);
    });
  };

  if (props.user) {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link onClick={logout} to="/">
          Logout
        </Link>
      </nav>
    );
  }

  return (
    <nav>
      <header className="header">
        <Link to="/" className="logo">
          Woofi
        </Link>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/products">SHOP</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/shoppingcart">CART</Link>
          </li>
          <li>
            <Link to="/signup">LOGIN</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
