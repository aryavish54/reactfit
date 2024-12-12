import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-6">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">
          <h1>FITNESS TRACKER</h1>
        </div>
        <ul className="flex space-x-10">
          <li><Link to="/" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/features" className="hover:text-green-400">Features</Link></li>
          <li><Link to="/motivational" className="hover:text-green-400">Motivation</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
