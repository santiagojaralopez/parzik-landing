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
      </div>
    </nav>
  );
}