import React from 'react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="https://i.postimg.cc/HLHgyCSj/parzik-White-Background.png" 
            alt="Parzik Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-white">Parzik</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
        </div>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}