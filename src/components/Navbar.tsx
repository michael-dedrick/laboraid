
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const calendlyUrl = "https://calendly.com/laboraid/30min?back=1&month=2025-05";
  const loginUrl = "https://laboraid.com/users/login";

  // Function to scroll to top when navigating to a new page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Function to check if the current page matches the link
  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full py-3 px-4 md:px-6 bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center mr-8" onClick={scrollToTop}>
            <img 
              src="/lovable-uploads/0ea6c305-f003-45a9-82e7-596ec26ce92e.png" 
              alt="LaborAid Logo" 
              className="h-14" 
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/contractor" 
              className={`font-medium text-slate-800 hover:text-blue-700 transition-colors relative group py-2 px-3 ${
                isCurrentPage('/contractor') ? 'text-blue-700' : ''
              }`}
              onClick={scrollToTop}
            >
              Contractors
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform transition-transform duration-200 origin-left ${
                isCurrentPage('/contractor') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/trustee" 
              className={`font-medium text-slate-800 hover:text-blue-700 transition-colors relative group py-2 px-3 ${
                isCurrentPage('/trustee') ? 'text-blue-700' : ''
              }`}
              onClick={scrollToTop}
            >
              Trustees
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform transition-transform duration-200 origin-left ${
                isCurrentPage('/trustee') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/union-rep" 
              className={`font-medium text-slate-800 hover:text-blue-700 transition-colors relative group py-2 px-3 ${
                isCurrentPage('/union-rep') ? 'text-blue-700' : ''
              }`}
              onClick={scrollToTop}
            >
              Unions
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform transition-transform duration-200 origin-left ${
                isCurrentPage('/union-rep') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          <a href={loginUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="font-medium text-slate-800 hover:text-blue-700 hover:bg-transparent relative group">
              Log In
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </Button>
          </a>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-medium">Get Started</Button>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 border-b border-slate-200">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/contractor" 
                className={`py-2 text-slate-800 font-medium border-b border-slate-100 hover:text-blue-700 transition-colors ${
                  isCurrentPage('/contractor') ? 'text-blue-700' : ''
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Contractors
              </Link>
              <Link 
                to="/trustee" 
                className={`py-2 text-slate-800 font-medium border-b border-slate-100 hover:text-blue-700 transition-colors ${
                  isCurrentPage('/trustee') ? 'text-blue-700' : ''
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Trustees
              </Link>
              <Link 
                to="/union-rep" 
                className={`py-2 text-slate-800 font-medium border-b border-slate-100 hover:text-blue-700 transition-colors ${
                  isCurrentPage('/union-rep') ? 'text-blue-700' : ''
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Unions
              </Link>
              
              <a href={loginUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="ghost" className="justify-start font-medium text-slate-800 hover:text-blue-700 hover:bg-transparent w-full">Log In</Button>
              </a>
              
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-medium w-full">Get Started</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
