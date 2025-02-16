import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navbar />
      <Hero />
      <TechStack />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;