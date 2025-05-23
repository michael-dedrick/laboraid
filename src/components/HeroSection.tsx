
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  return <section className="w-full bg-[#f7f5f2] overflow-hidden h-screen relative" id="top">
      {/* Full width video */}
      <div className="absolute inset-0 w-full h-full">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://laboraid.com/files/banner-video.mp4?1746246959" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Centered content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          {/* Single star */}
          <div className="flex justify-center mb-4">
            <img src="/lovable-uploads/4abaf02d-b2dc-4851-8695-51146f120a56.png" alt="Star" className="h-10" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-8">
            Union contractors'<br />
            all-in-one platform<br />
            <span className="whitespace-nowrap text-[48px] text-white">for benefit fund remittance</span>
          </h1>
          <div className="flex justify-center">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-6 text-lg">
                Sign Up <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
