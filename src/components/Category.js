import React from 'react';

export default function Category({ setCategory }) {
  return (
    <div className="category-container">
      <div>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            setCategory('all');
          }}
        >
          All Products
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            setCategory(`men's clothing`);
          }}
        >
          Men's Clothing
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            setCategory(`women's clothing`);
          }}
        >
          Women's Clothing
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            setCategory(`jewelery`);
          }}
        >
          Jewelery
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            setCategory(`electronics`);
          }}
        >
          Electronics
        </button>
      </div>
    </div>
  );
}
