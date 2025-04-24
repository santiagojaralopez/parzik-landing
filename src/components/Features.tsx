import React from 'react';
import { Stethoscope, Cpu, Rocket } from 'lucide-react';

export function Features() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <Stethoscope className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Soluciones Médicas</h3>
          <p className="text-gray-300">
            Software especializado para profesionales de la salud. Optimice la atención al paciente con herramientas diseñadas específicamente para el sector médico.
          </p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <Cpu className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Herramientas Empresariales</h3>
          <p className="text-gray-300">
            Soluciones de software asequibles que optimizan sus operaciones diarias y aumentan la productividad.
          </p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <Rocket className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Soporte de Crecimiento</h3>
          <p className="text-gray-300">
            Soluciones escalables que crecen con su negocio, sin el costo de nivel empresarial.
          </p>
        </div>
      </div>
    </section>
  );
}