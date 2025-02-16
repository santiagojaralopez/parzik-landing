import React from 'react';
import { Globe, Cpu, Rocket } from 'lucide-react';

export function Features() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <Globe className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Simple Websites</h3>
          <p className="text-gray-300">
            Professional websites that won't break the bank. Perfect for small businesses looking to establish their online presence.
          </p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <Cpu className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Business Tools</h3>
          <p className="text-gray-300">
            Affordable software solutions that streamline your daily operations and boost productivity.
          </p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
          <Rocket className="h-12 w-12 text-white mb-6" />
          <h3 className="text-xl font-bold text-white mb-4">Growth Support</h3>
          <p className="text-gray-300">
            Scalable solutions that grow with your business, without the enterprise-level price tag.
          </p>
        </div>
      </div>
    </section>
  );
}