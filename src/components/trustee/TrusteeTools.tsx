import React from 'react';
import { Check } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
const TrusteeTools = () => {
  return <div className="w-full py-16 md:py-24 bg-white">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Tools for Trustees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to provide full visibility and control.
          </p>
        </div>
        
        {/* Feature Grid Layout - Similar to main page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Remittance dashboard showing fund breakdown and contractor details" src="/lovable-uploads/1102f1ef-1cc3-480b-a669-08f14c09adb9.png" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Uniform Reporting Across Contractors</h3>
            <p className="text-gray-600 mb-5">Standardized formatting no matter which contractor submits.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Get remittance data in a consistent structure across all submissions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Eliminate manual cleanup caused by formatting differences</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Spend less time reformatting and more time reviewing what matters</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Remittance summary dashboard showing union fund details" className="w-full h-full object-contain" src="/lovable-uploads/abafe7ed-b70b-4435-aa55-41faa834f4cc.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Automated Compliance Checks</h3>
            <p className="text-gray-600 mb-5">Our system flags missing data, late payments, and underpayments automatically.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Get alerts for missing or incorrect information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Automatically identify late or under payments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Proactive oversight with built-in escalation tools</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Remittance summary dashboard for March 2025 showing fund details" className="w-full h-full object-contain" src="/lovable-uploads/a4c97c3c-cb3b-41c9-bafc-4fed9b256a71.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Instant Report Generation</h3>
            <p className="text-gray-600 mb-5">Export fully formatted reports by date, job class, or contractor with no extra work.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Generate reports for union inquiries or audits instantly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Filter by date, job class, or contractor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Focus on analysis instead of data compilation</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Fund allocation chart showing pension, health and training percentages" src="/lovable-uploads/35f94cbe-e18a-438b-81e7-a869c3be774a.png" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Fund Visibility by Union and Month</h3>
            <p className="text-gray-600 mb-5">Clear, consistent charts that show exactly where each fund stands.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Break down contributions by union and month in one view</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Spot trends, dips, or delays across all participating contractors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Visualize fund health without digging through raw data or spreadsheets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>;
};
export default TrusteeTools;