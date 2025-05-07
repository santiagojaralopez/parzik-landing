import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

const features = [
  'Diseño Personalizado',
  'Optimización para Móviles',
  'Hosting Incluido',
  'Dominio Personalizado',
  'Certificado SSL',
  'Soporte Técnico',
  'Actualizaciones Mensuales',
  'Analytics e Informes'
];

export function Pricing() {
  useEffect(() => {
    const loadMercadoPago = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://secure.mlstatic.com/mptools/render.js';
      document.body.appendChild(script);
      window.$MPC_loaded = true;
    };

    if (!window.$MPC_loaded) {
      loadMercadoPago();
    }
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Landing Page Profesional
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Impulsa tu presencia en línea con una landing page moderna y efectiva
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-white mb-2">
            $39.900 <span className="text-lg text-gray-400">/mes</span>
          </div>
          <p className="text-gray-300">Todo incluido, sin costos ocultos</p>
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <a
          href="https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380849672de3a01967ac0e6ac034d"
          className="block w-full bg-[#3483FA] hover:bg-[#2a68c8] text-white text-center py-3 px-6 rounded-lg transition duration-300 font-medium"
          data-mp-button
        >
          Suscribirme Ahora
        </a>
      </div>
    </section>
  );
}