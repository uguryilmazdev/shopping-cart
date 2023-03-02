import React from 'react';
import { addToLocalStorage } from '../utilities/addToLocalStorage';

export default function StoreItem({ items }) {
  return (
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
              <button
                type="button"
                className="add-btn"
                onClick={() => {
                  addToLocalStorage(
                    item.id,
                    item.image,
                    item.title,
                    item.price
                  );
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
