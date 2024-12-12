import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Motivational from './components/Motivational';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans bg-orange-300">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/motivational" element={<Motivational />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


