import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Lite',
    price: '1.000.000',
    delivery: '5 días hábiles',
    description: 'Ideal para emprendedores o negocios que necesitan una landing page, clara y profesional',
    color: 'blue',
  },
  {
    name: 'Pro',
    price: '1.500.000',
    delivery: '7 días hábiles',
    description: 'Ideal para empresas o negocios que buscan iniciar con una presencia web clara y profesional',
    color: 'green',
    popular: true,
  },
  {
    name: 'Pro Plus',
    price: '2.500.000',
    delivery: '15 días hábiles',
    description: 'Ideal para compañías o empresas que necesitan una presencia web sólida, organizada y con mayor profundidad de contenido',
    color: 'purple',
  },
];

const features = [
  {
    category: 'Características Principales',
    items: [
      { name: 'Dominio .COM por 1 año', lite: true, pro: true, proPlus: true },
      { name: 'Hosting web profesional por 1 año', lite: true, pro: true, proPlus: true },
      { name: 'Certificado SSL de seguridad por 1 año', lite: true, pro: true, proPlus: true },
      { name: 'Diseño adaptado para dispositivos', lite: true, pro: true, proPlus: true },
      { name: 'Landing page', lite: true, pro: true, proPlus: true },
      { name: 'Sitio web de 5 secciones independientes', lite: false, pro: true, proPlus: true },
    ]
  },
  {
    category: 'Contacto y Comunicación',
    items: [
      { name: 'Datos de contacto visibles', lite: true, pro: true, proPlus: true },
      { name: 'Botón flotante de WhatsApp', lite: true, pro: true, proPlus: true },
      { name: 'Enlaces a redes sociales', lite: true, pro: true, proPlus: true },
      { name: 'Formulario de contacto', lite: false, pro: true, proPlus: true },
      { name: 'Correo corporativo con dominio propio', lite: false, pro: true, proPlus: true },
      { name: 'Mapa de Google Maps', lite: false, pro: true, proPlus: true },
    ]
  },
  {
    category: 'Diseño y Contenido',
    items: [
      { name: 'Cambios ilimitados, que se ven reflejados máximo en:', lite: '5 días calendario', pro: '7 días calendario', proPlus: '7 días calendario' },
      { name: 'Diseño de piezas gráficas web', lite: false, pro: '6 piezas', proPlus: '12 piezas' },
      { name: 'Tarjetas personalizadas e inteligentes', lite: false, pro: false, proPlus: '3 tarjetas' },
      { name: 'Diseño de logo profesional', lite: false, pro: false, proPlus: true },
    ]
  },
  {
    category: 'Gestión y Seguridad',
    items: [
      { name: 'Políticas de privacidad y cookies', lite: false, pro: true, proPlus: true },
      { name: 'Blog autogestionable', lite: false, pro: false, proPlus: true },
      { name: 'Sistema web auto-administrable', lite: false, pro: false, proPlus: true },
    ]
  },
  {
    category: 'Renovación Anual',
    items: [
      { name: 'Hosting, dominio y SSL', lite: '$ 390.000 COP', pro: '$ 490.000 COP', proPlus: '$ 590.000 COP' },
    ]
  }
];

export function Pricing() {
  return (
      <section id="web-pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Elige el plan que se ajuste a tus necesidades y presupuesto
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-7xl mx-auto">
            <thead>
            <tr>
              <th className="p-6 text-left w-1/4"></th>
              {plans.map((plan) => (
                  <th key={plan.name} className="p-6 w-1/4">
                    <div className={`relative ${plan.popular ? 'pb-8' : ''}`}>
                      {plan.popular && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-[#cbe850] text-black px-4 py-1 rounded-full text-sm font-semibold">
                          Más Popular
                        </span>
                          </div>
                      )}
                      <div className={`text-center p-6 rounded-lg ${plan.popular ? 'bg-gray-800/50 border-2 border-[#cbe850]' : 'bg-gray-800/50 border border-gray-700/50'}`}>
                        <div className={`inline-block p-3 bg-${plan.color}-500/10 rounded-xl mb-4`}>
                          <h3 className={`text-2xl font-bold text-${plan.color}-400`}>{plan.name}</h3>
                        </div>
                        <div className="text-4xl font-bold text-white mb-2">${plan.price}</div>
                        <p className="text-gray-400">COP</p>
                        <div className="mt-4 text-sm text-gray-300">
                          Pago único – Entrega en {plan.delivery}
                        </div>
                        <p className="mt-4 text-gray-300 text-sm">
                          {plan.description}
                        </p>
                      </div>
                    </div>
                  </th>
              ))}
            </tr>
            </thead>
            <tbody>
            {features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr>
                    <td colSpan={4} className="py-6">
                      <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                    </td>
                  </tr>
                  {category.items.map((item, index) => (
                      <tr key={index} className="border-t border-gray-700">
                        <td className="py-4 pl-6 text-gray-300">{item.name}</td>
                        <td className="py-4 text-center">
                          {typeof item.lite === 'boolean' ? (
                              item.lite ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-500">-</span>
                          ) : (
                              <span className="text-gray-300">{item.lite}</span>
                          )}
                        </td>
                        <td className="py-4 text-center">
                          {typeof item.pro === 'boolean' ? (
                              item.pro ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-500">-</span>
                          ) : (
                              <span className="text-gray-300">{item.pro}</span>
                          )}
                        </td>
                        <td className="py-4 text-center">
                          {typeof item.proPlus === 'boolean' ? (
                              item.proPlus ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-500">-</span>
                          ) : (
                              <span className="text-gray-300">{item.proPlus}</span>
                          )}
                        </td>
                      </tr>
                  ))}
                </React.Fragment>
            ))}
            </tbody>
          </table>
        </div>
      </section>
  );
}