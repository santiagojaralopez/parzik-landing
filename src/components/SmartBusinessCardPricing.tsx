import React from 'react';
import { CreditCard, Briefcase, Rocket } from 'lucide-react';

const commonFeatures = [
  'Tu logo, colores y diseño personalizado',
  'Tecnología NFC integrada + Código QR visible',
  'Conexión gratuita de la tarjeta a plataformas tipo Linktree, Taplink, Tap.bio',
  'Configuración inicial de tu perfil digital tipo biografía',
  'Sin necesidad de que otros descarguen ninguna app',
  'Activación completa',
];

const plans = [
  {
    icon: CreditCard,
    name: 'Lite',
    price: '150.000',
    cards: '1 tarjeta',
    description: 'Ideal para emprendedores y profesionales independientes que quieren presentarse con estilo, sin complicaciones',
  },
  {
    icon: Briefcase,
    name: 'Pro',
    price: '500.000',
    cards: '5 tarjetas',
    description: 'Ideal para negocios con equipos comerciales, vendedores, ferias o marcas que quieren estandarizar su presencia',
    popular: true,
  },
  {
    icon: Rocket,
    name: 'Scale Up',
    price: '800.000',
    cards: '10 tarjetas',
    description: 'Ideal para empresas que quieren una solución profesional para todo su equipo comercial o de atención',
  },
];

export function SmartBusinessCardPricing() {
  return (
      <section id="cards-pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Tarjetas Inteligentes para Cada Necesidad
          </h2>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Todas nuestras tarjetas incluyen:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-[#cbe850] font-bold">✓</span>
                    {feature}
                  </li>
              ))}
            </ul>
          </div>
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
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-white">
                      ${plan.price}
                    </div>
                    <div className="text-gray-400 mt-1">COP</div>
                  </div>
                  <div className="mt-4 text-sm text-gray-300">
                    📦 {plan.cards} – Envío gratis a todo Colombia
                  </div>
                  <div className="mt-6 text-gray-300">
                    🟢 {plan.description}
                  </div>

                  <button className="mt-8 w-full bg-[#cbe850] text-black px-8 py-3 rounded-lg hover:bg-[#b5d046] transition-colors font-semibold">
                    Solicitar Ahora
                  </button>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
}