import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Cart from './Cart';
import CartLogo from '../img/shopping-cart.svg';
import { calculateTotalQuantity } from '../utilities/addToLocalStorage';

function Header() {
  const [cartItemNum, setCartItemNum] = useState(calculateTotalQuantity);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    window.addEventListener('storage', () => {
      const totalQuantity = calculateTotalQuantity();
      setCartItemNum(totalQuantity);
    });
    return () => {
      window.removeEventListener('storage', calculateTotalQuantity);
    };
  }, []);

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
          <li className="navbar-item">
            <button
              type="button"
              className="cart-btn"
              onClick={() => setShowCart(true)}
            >
              <img src={CartLogo} alt="Cart Logo" className="cart-logo" />
            </button>

            <div className="cart-item-number">{cartItemNum}</div>
          </li>
        </ul>
      </nav>
      {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
}

export default Header;
