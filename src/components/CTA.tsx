import React from 'react';
import { MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Technology Shouldn't Break Your Budget
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help your small business thrive with affordable tech solutions.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition flex items-center mx-auto">
          <MessageSquare className="mr-2 h-5 w-5" />
          Get Your Free Consultation
        </button>
      </div>
    </section>
  );
}