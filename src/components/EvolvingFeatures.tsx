
import React from 'react';
import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type FeatureCardProps = {
  title: string;
  description: string;
  isNew?: boolean;
};

const FeatureCard = ({ title, description, isNew = false }: FeatureCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-200 border border-gray-100 shadow-sm">
      <CardHeader className="pb-3">
        {isNew && (
          <div className="flex items-center mb-2">
            <Sparkles className="h-4 w-4 text-primary mr-1.5" />
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Featured</span>
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardContent>
      <div className="px-6 pb-6 mt-auto">
        <a href="#" className="text-primary font-medium flex items-center hover:underline">
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </Card>
  );
};

const EvolvingFeatures = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your payment experience, always evolving.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            isNew
            title="Auto bill capture"
            description="Scan bills, import invoices from your Gmail account, or send invoices directly to your Bills tab at once to save time on manual work."
          />
          
          <FeatureCard
            isNew
            title="W-9 collection"
            description="Collect W-9 forms from contractors directly from LaborAid. Make sure you're ready for tax season."
          />
          
          <FeatureCard
            isNew
            title="Auto 1099 sync"
            description="Easily file 1099 by syncing to tax1099.com, reducing manual data entry errors and the risk of discrepancies."
          />
          
          <FeatureCard
            title="Pay by card"
            description="Use your card to pay vendors—even where cards aren't accepted. Get vendors paid on time and hold on to cash for longer."
          />
        </div>
      </div>
    </section>
  );
};

export default EvolvingFeatures;
