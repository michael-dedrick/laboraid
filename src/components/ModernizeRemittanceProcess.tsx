
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ModernizeRemittanceProcess = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  return <section className="w-full bg-[#f7f5f2] overflow-hidden relative py-16">
      <div className="container mx-auto max-w-7xl relative">
        <div className="flex">
          <div className="w-full md:w-1/2 space-y-6 px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black leading-tight md:text-5xl">
              It's time to <span className="text-[#BD2026]">modernize your remittance process</span>
            </h2>
            <p className="text-lg text-black/80">
              Prepare and submit your remittances in minutes — not hours or days.
              All your trades. All your unions. Every fund. No more headaches.
            </p>
            <div className="pt-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side: Image - With fade effect added */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 h-full overflow-hidden">
        <img 
          alt="Modernized remittance process" 
          className="w-full h-full object-cover object-top" 
          src="/lovable-uploads/1627cb49-daf8-4a85-b116-856a9d5bb27d.png" 
        />
        {/* Added gradient fade for smoother edge transition */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f7f5f2]/10 to-[#f7f5f2]/60"></div>
      </div>
    </section>;
};
export default ModernizeRemittanceProcess;
