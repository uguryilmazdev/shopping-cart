import React, { useState, useEffect } from 'react';
import Category from '../components/Category';
import StoreItem from '../components/StoreItem';
import '../styles/Shop.css';

export default function Store() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // activate loading screen
    setLoading(true);

    // fetch selected category
    category === 'all' ? fetchItems('') : fetchItems(`category/${category}`);
  }, [category]);

  // fetch data from fakestoreapi.com
  const fetchItems = async (prop) => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products/${prop}`);
      const items = await data.json();

      setItems(items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert(`We'll be right back!`);
    }
  };

  // display loading screen if any delay
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
        <StoreItem items={items} />
      </div>
    </div>
  );
}
