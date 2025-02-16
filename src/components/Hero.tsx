import React from 'react';

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Making Your Business Life Simple
          </h1>
          <p className="text-xl text-gray-300">
            Affordable technology solutions designed for small businesses. No expensive memberships, just straightforward services that work for you.
          </p>
        </div>
        <div className="hidden md:block md:w-1/2 md:pl-8">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
            alt="Software Development"
            className="rounded-lg shadow-2xl w-11/12 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}