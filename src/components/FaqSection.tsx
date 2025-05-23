
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems = [
    {
      id: "item-1",
      question: "Does LaborAid handle multiple trades?",
      answer: "Yes. LaborAid supports projects with multiple trades, unions, and benefit funds. We automatically apply the correct wage and benefit rates based on each worker's trade and job class, so you don't need to manage separate remittance processes."
    },
    {
      id: "item-2",
      question: "What if I remit for multiple unions?",
      answer: "Each remittance is priced independently. You'll only be charged based on the number of laborers in each remittance, regardless of union."
    },
    {
      id: "item-3",
      question: "Is there a monthly or setup fee?",
      answer: "No. There's no subscription or setup cost. You only pay when you remit."
    },
    {
      id: "item-4",
      question: "Do I need to pick a plan?",
      answer: "No. There are no plans to choose. Just submit remittances when needed and the fee will apply per submission."
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

export default FaqSection;
