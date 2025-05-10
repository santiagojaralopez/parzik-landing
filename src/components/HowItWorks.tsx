import React from 'react';

const steps = [
  {
    number: '1️⃣',
    title: 'Reunión de contexto',
    subtitle: 'Exploramos tu idea, necesidades y visión.',
    description: 'Agendamos una sesión contigo para entender tu proyecto, tus metas y los retos que quieres resolver. Esta etapa nos permite definir el enfoque más eficaz y la solución adecuada.'
  },
  {
    number: '2️⃣',
    title: 'Planificación y propuesta técnica',
    subtitle: 'Convertimos tus objetivos en un plan de desarrollo.',
    description: 'Creamos una hoja de ruta detallada con tiempos, funcionalidades clave, stack tecnológico y fases del proyecto. Recibes una propuesta clara y personalizada.'
  },
  {
    number: '3️⃣',
    title: 'Desarrollo ágil y validaciones',
    subtitle: 'Construimos contigo, paso a paso.',
    description: 'Desarrollamos en ciclos cortos, mostrando avances frecuentes para validar el rumbo y hacer los ajustes necesarios a tiempo. Tú participas activamente sin complicarte.'
  },
  {
    number: '4️⃣',
    title: 'Entrega, soporte y evolución',
    subtitle: 'Te entregamos una solución lista para crecer.',
    description: 'Finalizamos el proyecto, lo ponemos en marcha y te brindamos acompañamiento para escalar, mantener y mejorar con el tiempo.'
  }
];

export function HowItWorks() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Cómo funciona Parzik?
        </h2>
        <h3 className="text-xl text-gray-300">
          Así convertimos tu idea en una solución real. Desde el primer contacto hasta la entrega final, trabajamos contigo de forma clara, ágil y estructurada
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-[#cbe850] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{step.number}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#cbe850] font-semibold mb-3">
                  {step.subtitle}
                </p>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}