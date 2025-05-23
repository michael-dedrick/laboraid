
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import SecuritySection from '@/components/SecuritySection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ModernizeRemittanceProcess from '@/components/ModernizeRemittanceProcess';

// Import WorkflowStepsSection but don't render it for now since there's an error
// This is a temporary fix until the WorkflowStepsSection component is fixed
// import WorkflowStepsSection from '@/components/WorkflowStepsSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ModernizeRemittanceProcess />
        <BenefitsSection />
        <FeaturesSection />
        {/* Temporarily removed due to type error */}
        {/* <WorkflowStepsSection /> */}
        <SecuritySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
