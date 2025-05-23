
import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Clock, Radar } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
const SecuritySection = () => {
  const location = useLocation();

  // Define custom headers based on the current route
  let securityHeader = "Built to safeguard your business";
  if (location.pathname === '/contractor') {
    securityHeader = "Secure remittance, simplified";
  } else if (location.pathname === '/trustee') {
    securityHeader = "Audit-ready and protected";
  } else if (location.pathname === '/union-rep') {
    securityHeader = "Confidential by default";
  }
  return <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16 bg-sky-50">
          <div className="md:w-5/12 relative">
            <div className="relative rounded-xl overflow-hidden">
              <img alt="Union worker with safety equipment grinding metal" className="w-full h-auto" src="/lovable-uploads/82e128a3-a1b0-438b-a128-3ce6a513ba55.jpg" />
            </div>
          </div>
          
          <div className="md:w-7/12 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{securityHeader}</h2>
            
            <p className="text-lg text-gray-600">We use industry-leading security measures to protect your data and transactions, including SOC 2–certified infrastructure, multi-factor authentication, 24/7 monitoring, and cutting-edge DDoS protection. Payments are securely processed through PCI-compliant providers.
          </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm font-medium">SOC 2</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm font-medium">Multi-Factor Login</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm font-medium">24/7 Monitoring</span>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Radar className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-sm font-medium">DDoS Defense</span>
              </div>
            </div>
            
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SecuritySection;
