
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignUpForm from '@/components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Sign Up for LaborAid</h1>
            <SignUpForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;
