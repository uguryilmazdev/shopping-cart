import React, { useState, useEffect } from 'react';
import Category from '../components/Category';
import ShopItem from '../components/ShopItem';
import '../styles/Shop.css';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // activate loading screen
    setLoading(true);

    // catch selected category
    category === 'all' ? fetchItems('') : fetchItems(`category/${category}`);
  }, [category]);

  // fetch data from fakestoreapi.com
  const fetchItems = async (prop) => {
    const data = await fetch(`https://fakestoreapi.com/products/${prop}`);
    const items = await data.json();

    setItems(items);
    setLoading(false);
  };

  // display loading screen if necessary
  if (loading) {
    return (
      <div className="darkBG">
        <div className="loading-screen">Loading...</div>
      </div>
    );
  }

  return (
    <div className="Main">
      <div className="Shop">
        <Category setCategory={setCategory} />
        <ShopItem items={items} />
      </div>
    </div>
  );
}
