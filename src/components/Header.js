import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Cart from './Cart';
import CartLogo from '../img/shopping-cart.svg';
import { calculateTotalQuantity } from '../utilities/addToLocalStorage';

function Header() {
  const [totalItem, setTotalItem] = useState(calculateTotalQuantity);
  const [openCart, setOpenCart] = useState(false);

  // catch quantity changes in local storage
  useEffect(() => {
    window.addEventListener('storage', () => {
      const totalQuantity = calculateTotalQuantity();
      setTotalItem(totalQuantity);
    });
    return () => {
      window.removeEventListener('storage', calculateTotalQuantity);
    };
  }, []);

  return (
    <div className="Header">
      <h1 className="header-title">Super Store</h1>
      <nav className="navbar">
        <ul>
          <Link to="/">
            <li className="navbar-item">Home</li>
          </Link>
          <Link to="/store">
            <li className="navbar-item">Store</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-item">Contact</li>
          </Link>
          <li className="navbar-item">
            <button
              type="button"
              className="cart-btn"
              onClick={() => setOpenCart(true)}
            >
              <img src={CartLogo} alt="Cart Logo" className="cart-logo" />
            </button>

            <div className="cart-item-number">{totalItem}</div>
          </li>
        </ul>
      </nav>
      {openCart && <Cart setOpenCart={setOpenCart} />}
    </div>
  );
}

export default Header;
