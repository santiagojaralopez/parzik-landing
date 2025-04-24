import React from 'react';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transformando la Salud a través de la Tecnología
          </h1>
          <p className="text-xl text-gray-300">
            Desde apoyo en urgencias hasta gestión de consultas, nuestras soluciones tecnológicas están revolucionando la forma en que los profesionales de la salud atienden a sus pacientes
          </p>
        </div>
        <div className="hidden md:block md:w-1/2 md:pl-8">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80"
            alt="Tecnología Moderna en Salud"
            className="rounded-lg shadow-2xl w-11/12 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}