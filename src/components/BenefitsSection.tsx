
import React from 'react';
import { Clock, Network, DollarSign } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem = ({
  icon,
  title,
  description
}: BenefitProps) => (
  <div className="flex flex-col">
    <div className="mb-3 text-white">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white/90 text-sm">{description}</p>
  </div>
);

const BenefitsSection = () => {
  const benefits: BenefitProps[] = [{
    icon: <Clock className="h-7 w-7" />,
    title: "Save 90% of Submission Time",
    description: "Remittance goes from days to minutes. No spreadsheets or mail-ins required.",
  }, {
    icon: <Network className="h-7 w-7" />,
    title: "Built for Multi-Union Projects",
    description: "Supports any trade, any fund, across multiple locals and job classes.",
  }, {
    icon: <DollarSign className="h-7 w-7" />,
    title: "Control Payment Timing",
    description: "Choose when remittances are sent. Keep your cash flow predictable.",
  }];
  return <section className="w-full py-10 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => <BenefitItem key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />)}
        </div>
      </div>
    </section>;
};

export default BenefitsSection;
