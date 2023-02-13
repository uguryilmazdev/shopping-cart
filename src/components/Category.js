import React from 'react';

export default function Category(props) {
  return (
    <div className="category-container">
      <div>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            props.setCategory('all');
          }}
        >
          All items
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            props.setCategory(`men's clothing`);
          }}
        >
          Men's Clothing
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            props.setCategory(`women's clothing`);
          }}
        >
          Women's Clothing
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            props.setCategory(`jewelery`);
          }}
        >
          Jewelery
        </button>
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            props.setCategory(`electronics`);
          }}
        >
          Electronics
        </button>
      </div>
    </div>
  );
}
