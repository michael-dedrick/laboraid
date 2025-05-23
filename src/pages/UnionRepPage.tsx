
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnionRepHero from '@/components/unionrep/UnionRepHero';
import UnionRepBenefitsBar from '@/components/unionrep/UnionRepBenefitsBar';
import UnionRepTools from '@/components/unionrep/UnionRepTools';
import SecuritySection from '@/components/SecuritySection';
import UnionRepCta from '@/components/unionrep/UnionRepCta';
import UnionRepPricing from '@/components/unionrep/UnionRepPricing';
import UnionRepFaq from '@/components/unionrep/UnionRepFaq';

const UnionRepPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <UnionRepHero />
        <UnionRepBenefitsBar />
        <UnionRepTools />
        <UnionRepPricing />
        <UnionRepFaq />
        <SecuritySection />
        <UnionRepCta />
      </main>
      <Footer />
    </div>
  );
};

export default UnionRepPage;
