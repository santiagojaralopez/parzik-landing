import React from 'react';

const clients = [
  {
    name: 'UniHumboldt',
    logo: 'https://parzik.s3.sa-east-1.amazonaws.com/client-logos/unihumboldtWhite.png'
  },
  {
    name: 'DreamFit',
    logo: 'https://parzik.s3.sa-east-1.amazonaws.com/client-logos/dreamfitNombreTransparente.png'
  }
];

export function TrustedBy() {
  return (
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-xl md:text-2xl text-gray-300 mb-12">
            En Parzik creemos que la tecnología no debe ser lenta ni costosa. Por eso, creamos soluciones digitales innovadoras para negocios que quieren crecer sin límites
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ellos comprenden que nuestra tecnología es una inversión inteligente
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
              <div
                  key={index}
                  className="w-[calc(50%-16px)] sm:w-auto flex items-center justify-center"
              >
                <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain"
                />
              </div>
          ))}
        </div>
      </section>
  );
}