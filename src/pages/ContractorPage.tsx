
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContractorHero from '@/components/contractor/ContractorHero';
import ContractorBenefitsBar from '@/components/contractor/ContractorBenefitsBar';
import ContractorTools from '@/components/contractor/ContractorTools';
import ContractorPricing from '@/components/contractor/ContractorPricing';
import ContractorFaq from '@/components/contractor/ContractorFaq';
import SecuritySection from '@/components/SecuritySection';
import ContractorCta from '@/components/contractor/ContractorCta';

const ContractorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContractorHero />
        <ContractorBenefitsBar />
        <ContractorTools />
        <ContractorPricing />
        <ContractorFaq />
        <SecuritySection />
        <ContractorCta />
      </main>
      <Footer />
    </div>
  );
};

export default ContractorPage;
