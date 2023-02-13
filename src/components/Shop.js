import React, { useState, useEffect } from 'react';
import Category from './Category';
import '../styles/Shop.css';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    category === 'all' ? fetchItems('') : fetchItems(`category/${category}`);
  }, [category]);

  const fetchItems = async (prop) => {
    const data = await fetch(`https://fakestoreapi.com/products/${prop}`);
    const items = await data.json();
    setItems(items);
    console.log(items);
  };

  return (
    <div className="Main">
      <div className="Shop">
        <Category category={category} setCategory={setCategory} />
        <div className="product-container">
          {items.map((item) => (
            <div className="shop-item" key={item.id}>
              <div className="item-img-container">
                <img src={item.image} alt="product" className="shop-item-img" />
              </div>
              <div className="item-detail-container">
                <div className="shop-item-title">{item.title}</div>
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
