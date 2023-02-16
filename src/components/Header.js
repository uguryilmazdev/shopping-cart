import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import CartLogo from '../img/shopping-cart.svg';

export default function Header() {
  return (
    <div className="Header">
      <h1 className="header-title">Super Tech Items</h1>
      <nav className="navbar">
        <ul>
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/shop">
            <li className="navbar-item">Shop</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-item">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="navbar-item">
              <img src={CartLogo} alt="Cart Logo" className="cart-logo" />
              <div className="cart-item-number">0</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
