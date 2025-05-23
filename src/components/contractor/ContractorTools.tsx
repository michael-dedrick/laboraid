import React from 'react';
import { Check } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
const ContractorTools = () => {
  return <div className="w-full py-16 md:py-24 bg-white">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Tools for Contractors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to save you time and prevent costly errors.
          </p>
        </div>
        
        {/* Feature Grid Layout - Similar to main page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Smart Payroll Upload interface" className="max-w-full max-h-full object-contain" src="/lovable-uploads/60bea6a3-7e25-4b7d-87bc-37517e3cb55d.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Upload Payroll in Seconds</h3>
            <p className="text-gray-600 mb-5">No templates, no formatting stress. Upload your payroll file and we'll automatically map the columns, validate the data, and flag anything that needs attention.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Upload payroll files in seconds</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Automatic data mapping and validation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Flag issues before submission</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Rate calculator interface showing journeyman rates" className="max-w-full max-h-full object-contain" src="/lovable-uploads/88348b39-597b-4227-9703-42083c782df0.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Get the Right Rates Instantly</h3>
            <p className="text-gray-600 mb-5">Our system uses built-in CBA tables to apply the correct rates based on job class and union rules. It's accuracy you can trust without the extra math.</p>
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
          
          {/* Feature 3 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Fund adjustment interface for making corrections" className="max-w-full max-h-full object-contain" src="/lovable-uploads/52a79f6d-3e44-4c5f-804d-02dd62a4bb5a.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Fix Errors Before You Submit</h3>
            <p className="text-gray-600 mb-5">Catch mistakes before they cost you. Make in-line edits, apply corrections, and watch totals update instantly.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Instantly apply corrections to the right remittance</span>
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
          
          {/* Feature 4 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Remittance Summary report with export options" className="max-w-full max-h-full object-contain" src="/lovable-uploads/ba392abe-9785-4fdb-83cf-81b61f6da69c.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Export Audit-Ready Reports</h3>
            <p className="text-gray-600 mb-5">Whether you're reporting internally or responding to a union request, you'll be ready in seconds. Export clean, formatted reports by date, union, or job class with just a few clicks.</p>
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
export default ContractorTools;