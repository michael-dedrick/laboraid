
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const UnionRepCta = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  return <section className="w-full py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Member Activity in Real Time
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Discover how LaborAid gives you visibility across every contractor.
          </p>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-white font-semibold px-8">
              Try It Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>;
};
export default UnionRepCta;
