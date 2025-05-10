import React from 'react';
import { Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://i.postimg.cc/HLHgyCSj/parzik-White-Background.png" 
                alt="Parzik Logo" 
                className="h-6 w-auto"
              />
              <span className="text-xl font-bold text-white">Parzik</span>
            </div>
            <p className="text-gray-400">
              Soluciones digitales innovadoras para negocios que quieren crecer sin límites
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+57 (606) 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@parzik.com" className="hover:text-white transition">
                  info@parzik.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Armenia, Quindío, Colombia</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
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
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-[#2A2A2A]">
          © 2025 Parzik. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}