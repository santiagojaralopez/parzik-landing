import React from 'react';
import { MessageSquare } from 'lucide-react';

export function LetsTalk() {
  const whatsappNumber = '+573052255招'; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría conocer más sobre sus servicios.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          🤝 Hablemos de tu proyecto
        </h2>
        <div className="space-y-6 mb-12">
          <h3 className="text-xl text-gray-300">
            ¿Tienes una idea? ¿Necesitas una solución digital o quieres cotizar alguno de nuestros servicios?
            En Parzik estamos listos para escucharte y ayudarte a construir lo que tu negocio necesita.
          </h3>
          <p className="text-xl text-[#cbe850]">
            📩 Escríbenos, agenda una llamada o envíanos un mensaje por WhatsApp.
            Te responderemos en menos de 24 horas.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg hover:bg-[#1ea952] transition-colors font-semibold"
        >
          <MessageSquare className="h-5 w-5" />
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}