import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { WebDevelopment } from '../components/WebDevelopment';
import { CustomSoftware } from '../components/CustomSoftware';
import { SmartBusinessCard } from '../components/SmartBusinessCard';
import { Pricing } from '../components/Pricing';
import { CustomSoftwarePricing } from '../components/CustomSoftwarePricing';
import { SmartBusinessCardPricing } from '../components/SmartBusinessCardPricing';
import { Growth } from '../components/Growth';
import { WhyUs } from '../components/WhyUs';
import { TechStack } from '../components/TechStack';
import { HowItWorks } from '../components/HowItWorks';
import { LetsTalk } from '../components/LetsTalk';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Growth />
      <WhyUs />
      <TechStack />
      <HowItWorks />
      <WebDevelopment />
      <Pricing />
      <CustomSoftware />
      <CustomSoftwarePricing />
      <SmartBusinessCard />
      <SmartBusinessCardPricing />
      <LetsTalk />
      <Footer />
    </>
  );
}

export default HomePage;

export { HomePage };