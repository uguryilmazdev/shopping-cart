import React from 'react';

export default function Header() {
  return (
    <div className="Header">
      <h1 className="header-title">Title</h1>
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">Shop</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact</a>
          </li>
          <li className="navbar-item">
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
