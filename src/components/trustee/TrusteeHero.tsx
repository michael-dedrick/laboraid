
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const TrusteeHero = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  return <section className="w-full bg-[#f7f5f2] overflow-hidden relative">
      <div className="container mx-auto max-w-7xl relative flex">
        {/* Left side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center">
          <div className="max-w-lg">
            <Badge variant="outline" className="border-black/40 text-black mb-6 py-1.5 px-4 text-sm font-medium">
              For Trustees
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6">Track Fund Contributions in Real Time</h1>
            <p className="text-xl text-black/90 mb-8">
              Catch errors before they escalate. Get full visibility into every contractor's remittance activity.
            </p>
            <div className="flex flex-wrap">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8">
                  Try It Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <p className="text-sm text-black/80 mt-3">Free for all Trustee Partners</p>
          </div>
        </div>
      </div>
      
      {/* Right side: Image - With enhanced fade effect */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 min-h-[500px] overflow-hidden">
        <img src="/lovable-uploads/9ba12a8f-f9e3-4650-88c4-47cee06a2fe7.png" alt="Professional trustee in a suit working on laptop" className="w-full h-full object-cover" />
        {/* Enhanced gradient fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f2] via-[#f7f5f2]/50 to-transparent"></div>
      </div>
    </section>;
};
export default TrusteeHero;
