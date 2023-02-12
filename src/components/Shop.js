import React, { useState, useEffect } from 'react';
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
    <div>
      {items.map((item) => (
        <div className="shop-item">
          <img src={item.image} alt="product" className="shop-item-img" />
          <h2 key={item.id} className="shop-item-title">
            {item.title}
          </h2>
          <h3 className="shop-item-price">{item.price}</h3>
        </div>
      ))}
    </div>
  );
}
