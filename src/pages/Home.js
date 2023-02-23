import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <div className="home-text-container">
        <div className="home-title">BEST ONLINE STORE EVER!</div>
        <Link to="/shop">
          <button type="button">Shop now</button>
        </Link>
      </div>
    </div>
  );
}
