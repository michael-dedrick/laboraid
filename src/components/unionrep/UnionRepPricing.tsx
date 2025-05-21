import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Tag } from "lucide-react";
const UnionRepPricing = () => {
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  return <section className="w-full py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full oversight, zero cost.</h2>
          
        </div>
        
        {/* Google-style banner */}
        <div className="flex items-center bg-[#e8f5e9] rounded-lg p-4 mb-8 max-w-5xl mx-auto">
          <Tag className="h-5 w-5 mr-3 flex-shrink-0 text-[#1e8e3e]" />
          <span className="text-sm md:text-base font-normal text-black">LaborAid is always free for Trustees and Unions. No charges. No limits. Just full platform access at no cost.</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Small Crews Plan */}
          <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
            <CardHeader className="pt-8 pb-4 px-8 border-b border-gray-100 text-center">
              <h3 className="text-xl font-medium text-gray-900">Small Crews</h3>
              <p className="text-gray-500 mt-2 text-base">For 1–19 laborers</p>
            </CardHeader>
            <CardContent className="px-8 py-6 flex-grow">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-medium text-gray-900">$250</span>
                <span className="text-base text-gray-500">per remittance</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Supports all trades, unions, and funds</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Scales across job classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Custom reports included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Email support for submissions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Advanced compliance analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tailored system integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Dedicated account support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8 pt-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardFooter>
          </Card>
          
          {/* Large Crews Plan */}
          <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
            <CardHeader className="pt-8 pb-4 px-8 border-b border-gray-100 text-center">
              <h3 className="text-xl font-medium text-gray-900">Large Crews</h3>
              <p className="text-gray-500 mt-2 text-base">For 20–199 laborers</p>
            </CardHeader>
            <CardContent className="px-8 py-6 flex-grow">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-medium text-gray-900">$500</span>
                <span className="text-base text-gray-500">per remittance</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Supports all trades, unions, and funds</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Scales across job classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Custom reports included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Email support for submissions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Advanced compliance analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tailored system integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Dedicated account support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8 pt-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardFooter>
          </Card>
          
          {/* Enterprise Jobs Plan */}
          <Card className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-lg flex flex-col h-full">
            <CardHeader className="pt-8 pb-4 px-8 border-b border-gray-100 text-center">
              <h3 className="text-xl font-medium text-gray-900">Enterprise Jobs</h3>
              <p className="text-gray-500 mt-2 text-base">200+ laborers</p>
            </CardHeader>
            <CardContent className="px-8 py-6 flex-grow">
              <div className="flex flex-col items-center mb-6">
                <span className="text-5xl font-medium text-gray-900">$750</span>
                <span className="text-base text-gray-500">per remittance</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Supports all trades, unions, and funds</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Scales across job classes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Custom reports included</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Email support for submissions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Advanced compliance analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tailored system integrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Dedicated account support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="px-8 pb-8 pt-4">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12 text-gray-600 max-w-2xl mx-auto">
          <p>Contact us to learn how LaborAid can fit into your existing process. <a href={calendlyUrl} className="text-blue-600 hover:underline">Book a call</a></p>
        </div>
      </div>
    </section>;
};
export default UnionRepPricing;