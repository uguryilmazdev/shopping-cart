import React, { useState, useEffect } from 'react';

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
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
}
