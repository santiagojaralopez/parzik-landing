import React, { useState } from 'react';
import { Clock, Rocket, Laptop } from 'lucide-react';
import { ContactModal } from './ContactModal';

const plans = [
  {
    icon: Laptop,
    name: 'Lite',
    timeframe: '4 a 6 semanas',
    description: 'Ideal para emprendedores que necesitan validar ideas, automatizar tareas específicas o construir un producto mínimo viable (MVP)',
  },
  {
    icon: Rocket,
    name: 'Pro',
    timeframe: '6 a 10 semanas',
    description: 'Ideal para negocios que buscan un software robusto con lógica interna, mayor funcionalidad y espacio para crecer',
    popular: true,
  },
  {
    icon: Clock,
    name: 'Scale Up',
    timeframe: '10 a 16 semanas',
    description: 'Ideal para empresas que necesitan escalar digitalmente con una solución completa, segura y 100% personalizada',
  },
];

export function CustomSoftwarePricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleQuoteRequest = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
      <section id="software-pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Soluciones de Software a tu Medida
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
              <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 ${
                      plan.popular
                          ? 'bg-gray-800/50 border-2 border-[#cbe850]'
                          : 'bg-gray-800/50 border border-gray-700/50'
                  }`}
              >
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-[#cbe850] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </span>
                    </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <plan.icon className="h-12 w-12 text-[#cbe850] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mt-4 text-sm text-gray-300">
                    📦 Proyecto a medida – Desarrollo en {plan.timeframe}
                  </div>
                  <div className="mt-6 text-gray-300">
                    🟢 {plan.description}
                  </div>
                  <button
                      className="mt-8 w-full bg-[#cbe850] text-black px-8 py-3 rounded-lg hover:bg-[#b5d046] transition-colors font-semibold"
                      onClick={() => handleQuoteRequest(plan.name)}
                  >
                    Solicitar Cotización
                  </button>
                </div>
              </div>
          ))}
        </div>

        <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            defaultTitle={`Cotización Software a la medida - Plan ${selectedPlan}`}
        />
      </section>
  );
}