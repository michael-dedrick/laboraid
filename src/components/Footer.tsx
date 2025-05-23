
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';

const Footer = () => {
  // Function to scroll to top when navigating to a new page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  return <footer className="w-full py-12 border-t bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-start mb-8">
          <img src="/lovable-uploads/efd29e3d-4087-42b3-8c0a-46cee9493dfd.png" alt="LaborAid Logo" className="h-8" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white mb-4 md:mb-0">©2025 LaborAid Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link 
              to="/terms-conditions" 
              className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors duration-200"
              onClick={scrollToTop}
            >
              Terms
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors duration-200"
              onClick={scrollToTop}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
