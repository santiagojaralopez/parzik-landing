import React from 'react';

export function Growth() {
  const metrics = [
    { value: '+97%', label: 'de satisfacción de nuestros clientes' },
    { value: '+58%', label: 'de optimización del tiempo de desarrollo' },
    { value: '+42%', label: 'de ahorro en inversión de tecnología' },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ⚡ Potencia tu crecimiento con tecnología hecha a tu medida
        </h2>
        <h3 className="text-xl text-gray-300">
          En Parzik ayudamos a emprendedores y empresas a digitalizar sus ideas, optimizar procesos y escalar con soluciones innovadoras, funcionales y diseñadas para generar impacto real
        </h3>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center w-48 h-48 rounded-full border-4 border-[#cbe850] bg-gray-800/50 p-6"
          >
            <div className="text-3xl font-bold text-[#cbe850] mb-2">
              {metric.value}
            </div>
            <div className="text-sm text-center text-gray-300">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => window.location.href = '#contact'}
          className="bg-[#cbe850] text-black px-8 py-3 rounded-lg hover:bg-[#b5d046] transition-colors font-semibold"
        >
          Contactar Ahora
        </button>
      </div>
    </section>
  );
}