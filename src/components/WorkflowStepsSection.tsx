import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
type StepCardProps = {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
};
const StepCard = ({
  number,
  title,
  description,
  isLast = false
}: StepCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="flex flex-col relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card className={cn("flex-grow transition-colors duration-200 h-full", "border-none shadow-none", isHovered ? "bg-[#e6f0ff]" : "bg-transparent")}>
        <CardContent className="p-6 text-center flex flex-col items-center">
          <div className="mb-4">
            <div className={cn("h-8 px-4 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-200", isHovered ? "bg-[#0f52ba] text-white" : "bg-transparent text-black border border-gray-300")}>
              Step {number}
            </div>
          </div>
          <h3 className="font-semibold text-2xl text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </div>;
};
const WorkflowStepsSection = () => {
  const steps = [{
    number: "1",
    title: "Upload Your Payroll",
    description: "Connect your payroll system or upload a file to get started."
  }, {
    number: "2",
    title: "Review & Approve",
    description: "Verify the data and make any necessary adjustments."
  }, {
    number: "3",
    title: "Submit Payment",
    description: "Pay all benefit funds at once with a single transaction."
  }, {
    number: "4",
    title: "Generate Reports",
    description: "Access audit-ready reports for your records."
  }];
  return;
};
export default WorkflowStepsSection;