import React from 'react';
import { Code2, Stethoscope } from 'lucide-react';

export function Features() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-[#1A1A1A] p-8 rounded-xl backdrop-blur-sm border border-[#2A2A2A]">
          <Code2 className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Parzik Solutions</h3>
          <p className="text-gray-300">
            Desarrollo de software empresarial a medida. Desde aplicaciones web hasta sistemas completos de gestión, creamos soluciones que impulsan la eficiencia y el crecimiento de tu negocio.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-8 rounded-xl backdrop-blur-sm border border-[#2A2A2A]">
          <Stethoscope className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Medigramas by Parzik</h3>
          <p className="text-gray-300">
            Software especializado para el sector salud. Desarrollamos herramientas innovadoras que optimizan la gestión médica y mejoran la experiencia del paciente.
          </p>
        </div>
      </div>
    </section>
  );
}