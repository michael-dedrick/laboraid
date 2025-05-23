
import React from 'react';
import { Zap, Clock, FileCheck, Shield } from 'lucide-react';

const ContractorBenefitsBar = () => {
  const benefits = [
    {
      icon: <Zap />,
      text: "Prepare and submit in minutes",
    },
    {
      icon: <Clock />,
      text: "Save 5+ hours monthly",
    },
    {
      icon: <FileCheck />,
      text: "Accurate and audit-compliant",
    },
    {
      icon: <Shield />,
      text: "Banking-level Security",
    },
  ];

  return (
    <div className="w-full bg-slate-900 py-5 shadow-sm border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="text-white mr-2">
                {benefit.icon}
              </div>
              <span className="text-sm font-medium text-white">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorBenefitsBar;
