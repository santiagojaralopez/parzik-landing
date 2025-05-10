import React from 'react';
import { Check } from 'lucide-react';

export function WebDevelopment() {
  return (
    <section id="web-development" className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            alt="Desarrollo Web"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Desarrollamos tu página web al instante
          </h2>
          
          <h3 className="text-xl text-gray-300 mb-8">
            Deja de perder tiempo con procesos lentos y técnicos. En Parzik convertimos tu idea en una página web moderna, profesional y lista para crecer desde el primer clic. Nos encargamos del diseño, la estructura, la seguridad y la experiencia del usuario, para que tú te enfoques en lo más importante: tu negocio
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Diseño web adaptable y profesional
                </h3>
                <p className="text-gray-300">
                  Tu página se verá perfecta en computador, tablet o celular, siempre rápida y elegante
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Alojamiento web, dominio y certificado SSL incluidos
                </h3>
                <p className="text-gray-300">
                  Nos encargamos del servidor, la seguridad y la configuración técnica desde el día uno
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Panel de contenido autogestionable
                </h3>
                <p className="text-gray-300">
                  Edita fácilmente textos, imágenes y secciones sin depender de nadie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}