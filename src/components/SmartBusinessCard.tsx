import React from 'react';
import { Check } from 'lucide-react';

export function SmartBusinessCard() {
  return (
    <section id="smart-cards" className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80"
            alt="Tarjetas Inteligentes"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Redefinimos la forma en que te presentas con tarjetas inteligentes
          </h2>
          
          <h3 className="text-xl text-gray-300 mb-8">
            En Parzik desarrollamos tarjetas de presentación digitales que combinan diseño, tecnología y funcionalidad para que conectes con impacto desde el primer momento.
            Comparte tu información de contacto, redes sociales, portafolio o enlaces estratégicos con solo acercar tu tarjeta a un celular. Sin apps, sin papel, sin límites
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Diseñamos y producimos tu tarjeta inteligente personalizada
                </h3>
                <p className="text-gray-300">
                  Creamos una tarjeta física única, con tu estilo, logo y colores de marca. Minimalista, duradera y siempre profesional
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Compatible con todos los smartphones
                </h3>
                <p className="text-gray-300">
                  Funciona con tecnología NFC para dispositivos modernos, y además incluye un código QR visible para asegurar compatibilidad universal
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Conecta con impacto, no solo con datos
                </h3>
                <p className="text-gray-300">
                  Transforma un simple saludo en una experiencia memorable y profesional. Ideal para ferias, networking y equipos comerciales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}