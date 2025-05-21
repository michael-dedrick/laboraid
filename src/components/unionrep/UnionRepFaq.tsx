
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const UnionRepFaq = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems = [
    {
      id: "item-1",
      question: "Do unions or trustees pay to use LaborAid?",
      answer: "No. LaborAid is completely free for union representatives and trustees."
    },
    {
      id: "item-2",
      question: "What can we access?",
      answer: "You can view all contractor submissions tied to your union or fund, including hours worked, fund contributions, job class, and compliance status."
    },
    {
      id: "item-3",
      question: "How do we know if submissions are accurate?",
      answer: "LaborAid checks for missing hours, late submissions, and underpayments. You'll be able to spot issues as soon as a contractor submits."
    },
    {
      id: "item-4",
      question: "Can we download reports or export data?",
      answer: "Yes. You can download a copy of each submitted remittance, including all associated data. Trustees can also export files in CSV format for easy upload into their fund system."
    },
    {
      id: "item-5",
      question: "Do we need to onboard or set anything up?",
      answer: "No setup is required. You'll automatically receive access as soon as your contractors begin using LaborAid."
    },
    {
      id: "item-6",
      question: "How do we receive payments?",
      answer: "Set up your ACH details to receive payments by direct deposit. It's 2× faster than waiting for a mailed check."
    }
  ];

  const handleExpandAll = () => {
    setOpenItems(faqItems.map(item => item.id));
  };

  const handleCollapseAll = () => {
    setOpenItems([]);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button 
              variant="outline" 
              onClick={handleExpandAll}
              className="text-sm border-gray-300 hover:bg-gray-50"
            >
              Expand all
            </Button>
            <Button 
              variant="outline" 
              onClick={handleCollapseAll}
              className="text-sm border-gray-300 hover:bg-gray-50"
            >
              Collapse all
            </Button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="multiple" 
            value={openItems} 
            onValueChange={setOpenItems}
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className={item.id === "item-1" ? "border-t" : ""}>
                <AccordionTrigger className="text-lg font-medium text-gray-900 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default UnionRepFaq;
