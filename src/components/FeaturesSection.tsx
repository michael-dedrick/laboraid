import React from 'react';
import { Check, ArrowUp, ArrowDown } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
const FeaturesSection = () => {
  return <div className="w-full py-16 md:py-24 bg-white">
      <section className="container mx-auto px-4 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for the Way You Work.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools for every step of the remittance process.
          </p>
        </div>
        
        {/* Feature Grid Layout - Inspired by Dropbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Feature 1 - Keep Smart Payroll Upload image */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Smart Payroll Upload" className="max-w-full max-h-full object-contain" src="/lovable-uploads/a0171c88-bd90-4bb8-85d9-422348641690.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Payroll Upload</h3>
            <p className="text-gray-600 mb-5">Upload your payroll in seconds or connect via API (beta). We handle the formatting, mapping, and checks for you.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Skip the manual formatting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Catch issues before you submit</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Try early API access for automation</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 - Auto-Apply Rates image */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Auto-Apply Wage & Benefit Rates" className="max-w-full max-h-full object-contain" src="/lovable-uploads/f37c10f9-f95c-4c15-a9e9-6099efe6f178.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Auto-Apply Wage &amp; Benefit Rates</h3>
            <p className="text-gray-600 mb-5">Correct rates are applied automatically by job class and union.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Calculate accurate wage and benefit rates instantly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Built-in support for multi-union, multi-job class projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Adjust contributions in real time</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 - Make Adjustments with Confidence image */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Make Adjustments with Confidence" className="max-w-full max-h-full object-contain" src="/lovable-uploads/4a1f61e0-843c-42ae-9e0b-0d0e1351d338.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Make Adjustments with Confidence</h3>
            <p className="text-gray-600 mb-5">Handle travelers, retro changes, or corrections without hassle.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Instantly apply travelers to the right remittance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Handle mid week or retroactive rate changes with ease</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Make one time corrections or adjustments to past payments</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 4 - Replace skeleton with Remittance Summary image */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Export Clean, Audit-Ready Reports" className="max-w-full max-h-full object-contain" src="/lovable-uploads/bb3b0bae-a4c8-4521-a397-219b2bb476ae.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Export Clean, Audit-Ready Reports</h3>
            <p className="text-gray-600 mb-5">One-click exports formatted for trustees, unions, and compliance teams.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">One-click export for trustees, unions, and contractors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Filter by date, union, or job class</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Format ready for audits and compliance reviews</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>;
};
export default FeaturesSection;