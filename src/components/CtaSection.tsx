import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const CtaSection = () => {
  return <section className="w-full py-24 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to see your union on LaborAid?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a quick call to learn more about LaborAid and how we can help bring your local on board.
          </p>
          <Button size="lg" className="bg-primary text-white font-semibold px-8">
            Book a Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default CtaSection;