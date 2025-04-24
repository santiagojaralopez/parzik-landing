import React from 'react';

const clients = [
  {
    name: 'DreamFit',
    logo: 'https://parzik.s3.sa-east-1.amazonaws.com/client-logos/dreamfitNombreTransparente.png'
  },
  {
    name: 'UniHumboldt',
    logo: 'https://parzik.s3.sa-east-1.amazonaws.com/client-logos/unihumboldtWhite.png'
  }
];

export function TrustedBy() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
        Ellos Confían en Nosotros
      </h2>
      <div className="grid grid-cols-2 gap-8 items-center max-w-2xl mx-auto">
        {clients.map((client, index) => (
          <div 
            key={index}
            className="flex items-center justify-center p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}