import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/shopping-cart/" exact element={<Home />} />
        <Route path="/shopping-cart/store" element={<Store />} />
        <Route path="/shopping-cart/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
