
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const UnionRepHero = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  return <section className="w-full bg-[#f7f5f2] overflow-hidden relative">
      <div className="container mx-auto max-w-7xl relative flex">
        {/* Left side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center">
          <div className="max-w-lg">
            <Badge variant="outline" className="border-black/40 text-black mb-6 py-1.5 px-4 text-sm font-medium">
              For Unions
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
              See Your Laborers' Contributions Across All Contractors
            </h1>
            <p className="text-xl text-black/90 mb-8">
              Cut through paperwork. Ensure your laborers are getting what they've earned with centralized insights.
            </p>
            <div className="flex flex-wrap">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8">
                  Try It Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <p className="text-sm text-black/80 mt-3">Free for all Unions</p>
          </div>
        </div>
      </div>
      
      {/* Right side: Image - With enhanced fade effect */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 min-h-[500px] overflow-hidden">
        <img 
          alt="Group of diverse construction workers with safety helmets and high-visibility vests" 
          src="/lovable-uploads/12efabc7-29c4-4db5-a1e9-a5af84cfe33c.png" 
          className="w-full h-full object-cover" 
        />
        {/* Enhanced gradient fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f2] via-[#f7f5f2]/50 to-transparent"></div>
      </div>
    </section>;
};
export default UnionRepHero;
