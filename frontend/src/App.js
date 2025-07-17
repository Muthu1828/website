import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import { Components } from './components';

const {
  Navigation,
  Hero,
  FoodGallery,
  History,
  Testimonials,
  Contact,
  Footer,
  MenuPage,
  HistoryPage,
  ContactPage,
  ShopPage
} = Components;

const HomePage = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      <Hero />
      <FoodGallery />
      <History />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;