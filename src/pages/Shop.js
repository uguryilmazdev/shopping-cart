import React, { useState, useEffect } from 'react';
import Category from '../components/Category';
import ShopItem from '../components/ShopItem';
import '../styles/Shop.css';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    category === 'all' ? fetchItems('') : fetchItems(`category/${category}`);
  }, [category]);

  // fetch data from fakestoreapi.com
  const fetchItems = async (prop) => {
    const data = await fetch(`https://fakestoreapi.com/products/${prop}`);
    const items = await data.json();
    setItems(items);
    console.log(items);
  };

  return (
    <div className="Main">
      <div className="Shop">
        <Category setCategory={setCategory} />
        <ShopItem items={items} />
      </div>
    </div>
  );
}
