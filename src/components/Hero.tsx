import React, { useState } from 'react';
import { TypedText } from './TypedText';
import { ContactModal } from './ContactModal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 flex flex-col gap-4 max-w-full overflow-hidden">
            <div className="break-words px-2">Desarrollamos tus aplicaciones Web</div>
            <div className="flex items-center justify-center min-h-[40px]">
              <TypedText />
            </div>
            <div className="break-words px-2">para que tu negocio crezca sin limites</div>
          </h1>

          <br/>

          <h3 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Creada para empresas, instituciones, emprendedores y PYMEs que buscan soluciones tecnológicas eficientes, escalables y sostenibles
          </h3>

          <br/>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
                className="px-8 py-3 bg-[#cbe850] text-black font-semibold rounded-lg hover:bg-[#b5d046] transition-colors"
                onClick={() => window.location.href = '#pricing'}
            >
              Solicitar presupuesto
            </button>
            <button
                className="px-8 py-3 border-2 border-[#cbe850] text-[#cbe850] font-semibold rounded-lg hover:bg-[#cbe850] hover:text-black transition-colors"
                onClick={() => setIsModalOpen(true)}
            >
              Contáctanos
            </button>
          </div>

          <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Tecnología Moderna"
              className="rounded-lg shadow-2xl w-full max-w-2xl mx-auto"
          />

          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </section>
  );
}