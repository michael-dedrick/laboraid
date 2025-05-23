
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ContractorBuiltFor = () => {
  const benefits = [
    "Payroll departments handling multiple unions",
    "Construction firms with multi-state operations",
    "Small contractors with limited admin resources",
    "Companies with varying collective bargaining agreements",
    "Businesses looking to reduce remittance errors"
  ];
  
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Union Contractors</h2>
          <p className="text-xl text-gray-600">
            Perfect for organizations that need to streamline their union contribution process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2 mt-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorBuiltFor;
