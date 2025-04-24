import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="https://i.postimg.cc/HLHgyCSj/parzik-White-Background.png" 
              alt="Parzik Logo" 
              className="h-6 w-auto"
            />
            <span className="text-xl font-bold text-white">Parzik</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Parzik. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}