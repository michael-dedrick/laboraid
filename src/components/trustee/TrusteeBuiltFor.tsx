
import React from 'react';
import { Check } from 'lucide-react';

const TrusteeBuiltFor = () => {
  const benefits = [
    "Automatic discrepancy detection", 
    "Real-time payment verification", 
    "Digital audit trail for all transactions", 
    "Custom reporting for compliance", 
    "Secure access management", 
    "Automated notifications for issues"
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/402af7cc-a54a-49ba-af5a-e977a575c398.png" 
              alt="Trustee tools" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Trust Fund Management</h2>
            <p className="text-lg text-gray-600 mb-6">Our platform is specifically designed for the unique needs of labor trust fund administration.</p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-600 h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrusteeBuiltFor;
