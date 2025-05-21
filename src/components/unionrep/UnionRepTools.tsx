import React from 'react';
import { Check } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
const UnionRepTools = () => {
  return <div className="w-full py-16 md:py-24 bg-transparent">
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Tools for Union Representatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to give you complete visibility across all contractors.
          </p>
        </div>
        
        {/* Feature Grid Layout - Similar to main page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Features 1-3 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Complete laborer history dashboard showing remittance details" className="max-w-full max-h-full object-contain" src="/lovable-uploads/bd4b7a52-c99f-44aa-9692-6f1604fae210.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Complete Laborer History</h3>
            <p className="text-gray-600 mb-5">Instantly view your laborer's full contribution history across all contractors in one place.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Search and access laborer records instantly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">View complete contribution history across contractors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Access data quickly for inquiries or board meetings</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Employee database interface showing contractor activity" className="w-full h-full object-contain" src="/lovable-uploads/7811125a-7f6b-45cf-ade9-dc69d4cf100c.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Contractor Activity at a Glance</h3>
            <p className="text-gray-600 mb-5">See which contractors are employing your laborers, on what job sites, and for how long.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Get clear visibility into contractor workforces</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Track job sites and employment duration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Plan and advocate with better workforce visibility</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Package update interface showing laborer history and status" className="w-full h-full object-contain" src="/lovable-uploads/7c827516-423d-44c7-a91d-d16da3a76baf.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Update Laborer Packages with Confidence</h3>
            <p className="text-gray-600 mb-5">Add new packages, set effective dates, and upload documentation directly.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Control benefit changes without contractor delays</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Easily set effective dates and upload documentation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Ensure laborers receive correct benefits reliably</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 p-6 flex items-center justify-center h-80 bg-transparent">
              <img alt="Compliance warnings dashboard showing late and partial contractor submissions" className="w-full h-full object-contain" src="/lovable-uploads/44b1ae48-215b-4326-8f15-33ca6536decd.png" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Early Warnings for Compliance Gaps</h3>
            <p className="text-gray-600 mb-5">Our trend analysis and alert system helps you detect missing hours or irregular payments.</p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Identify issues before they become problems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Detect missing hours and irregular payment patterns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <Check size={12} />
                </span>
                <span className="text-base text-gray-600">Stay ahead of compliance issues with proactive alerts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>;
};
export default UnionRepTools;