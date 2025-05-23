
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrusteeHero from '@/components/trustee/TrusteeHero';
import TrusteeTools from '@/components/trustee/TrusteeTools';
import TrusteeBenefitsBar from '@/components/trustee/TrusteeBenefitsBar';
import SecuritySection from '@/components/SecuritySection';
import TrusteeCta from '@/components/trustee/TrusteeCta';
import TrusteePricing from '@/components/trustee/TrusteePricing';
import TrusteeFaq from '@/components/trustee/TrusteeFaq';

const TrusteePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <TrusteeHero />
        <TrusteeBenefitsBar />
        <TrusteeTools />
        <TrusteePricing />
        <TrusteeFaq />
        <SecuritySection />
        <TrusteeCta />
      </main>
      <Footer />
    </div>
  );
};

export default TrusteePage;
