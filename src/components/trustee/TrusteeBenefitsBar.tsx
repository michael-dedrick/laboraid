
import React from 'react';
import { Shield, Check, Clock, FileSpreadsheet } from 'lucide-react';

const TrusteeBenefitsBar = () => {
  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Secure data storage",
    },
    {
      icon: <Check className="h-5 w-5" />,
      text: "Error-free reporting",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: "Save 10+ hours monthly",
    },
    {
      icon: <FileSpreadsheet className="h-5 w-5" />,
      text: "Easy CSV Export",
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

export default TrusteeBenefitsBar;
