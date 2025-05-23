
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TrusteeModernize = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  
  return <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <div className="flex">
          <div className="w-full md:w-1/2 space-y-6 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              It's time to <span className="text-[#BD2026]">modernize your remittance process</span>
            </h2>
            <p className="text-lg text-slate-600">
              Prepare and submit your remittances in minutes — not hours or days. All your unions. Every fund. No more headaches.
            </p>
            <div className="pt-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold">
                  Get started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side: Image - With fade effect added */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
        <img src="/lovable-uploads/9dbecf41-13a1-455e-8d91-d181f2112c51.png" alt="Modernized remittance process" className="w-full h-full object-cover" />
        {/* Added gradient fade for smoother edge transition */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-white/60"></div>
      </div>
    </section>;
};

export default TrusteeModernize;
