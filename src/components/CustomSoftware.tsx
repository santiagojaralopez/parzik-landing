import React from 'react';
import { Check } from 'lucide-react';

export function CustomSoftware() {
  return (
    <section id="custom-software" className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Creamos e implementamos software web a la medida de tu negocio
          </h2>
          
          <h3 className="text-xl text-gray-300 mb-8">
            En Parzik desarrollamos herramientas digitales personalizadas que optimizan tus procesos, escalan con tu empresa y mejoran la experiencia de tus usuarios. Diseñamos y construimos desde cero, usando tecnologías modernas, metodologías ágiles y visión de largo plazo
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Herramientas empresariales personalizadas
                </h3>
                <p className="text-gray-300">
                  Sistemas de gestión interna como CRMs, ERPs, paneles administrativos, automatización de procesos y soluciones internas que se adaptan exactamente a tu flujo de trabajo
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Aplicaciones web funcionales para tu modelo de negocio
                </h3>
                <p className="text-gray-300">
                  Creamos plataformas como sistemas educativos (e-learning), servicios de domicilios, agendamiento de citas, marketplaces, directorios, apps de reservas, suscripciones o membresías, entre muchas otras
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-[#cbe850]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Implementación y escalabilidad asegurada
                </h3>
                <p className="text-gray-300">
                  Nos encargamos del desarrollo, la puesta en marcha, el soporte y la preparación de tu software para escalar: desde MVPs hasta soluciones empresariales completas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Desarrollo de Software"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
        
      </div>
    </section>
  );
}