import React from 'react';

export default function Category() {
  return (
    <div className="category-container">
      <div>
        <button type="button" className="category-btn">
          All items
        </button>
        <button type="button" className="category-btn">
          Men's Clothing
        </button>
        <button type="button" className="category-btn">
          Women's Clothing
        </button>
        <button type="button" className="category-btn">
          Jewelery
        </button>
        <button type="button" className="category-btn">
          Electronics
        </button>
      </div>
    </div>
  );
}
