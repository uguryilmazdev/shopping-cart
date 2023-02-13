import React, { useState, useEffect } from 'react';
import Category from './Category';
import '../styles/Shop.css';

export default function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const items = await data.json();
    setItems(items);
    console.log(items);
  };

  return (
    <div className="Main">
      <div className="Shop">
        <Category />
        <div className="product-container">
          {items.map((item) => (
            <div className="shop-item">
              <div className="item-img-container">
                <img src={item.image} alt="product" className="shop-item-img" />
              </div>
              <div className="item-detail-container">
                <div key={item.id} className="shop-item-title">
                  {item.title}
                </div>
                <div>
                  <div className="shop-item-price">${item.price}</div>
                  <button type="button" className="add-btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
