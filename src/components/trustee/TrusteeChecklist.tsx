
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type ChecklistItemProps = {
  text: string;
  className?: string;
};

const ChecklistItem = ({
  text,
  className
}: ChecklistItemProps) => {
  return <div className={cn("flex items-center gap-2", className)}>
      <Check className="text-green-600 h-6 w-6" />
      <span className="text-gray-700 font-medium text-base">{text}</span>
    </div>;
};

const TrusteeChecklist = () => {
  const checklistItems = ["Automatic contributions tracking", "Detect payment errors in real-time", "Streamlined dispute resolution", "Digital audit trails", "Compliance reporting", "Secure document storage"];
  
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/fa35c6fc-dc82-4fe1-aeee-aab2e8f8d6a7.png" 
              alt="Trustee platform features" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Trustee Features</h2>
              <p className="text-lg text-gray-600 mb-6">Everything you need to streamline remittance management and ensure compliance.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklistItems.map((item, index) => (
                <ChecklistItem key={index} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrusteeChecklist;
