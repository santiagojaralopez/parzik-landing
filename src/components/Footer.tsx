import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A]">
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
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="https://www.instagram.com/parzik_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/parzik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Parzik. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}