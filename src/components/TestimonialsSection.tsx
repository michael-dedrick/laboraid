
import React from 'react';
import { useLocation } from 'react-router-dom';

const TestimonialsSection = () => {
  const location = useLocation();
  
  // Define specific testimonials for union rep page
  const unionRepTestimonials = [
    {
      text: "Before LaborAid, we spent hours tracking down missing forms and cross-checking reports. Now everything's right there in one place, accurate, up-to-date, and easy to access. It's completely changed how we stay on top of laborer contributions.",
      author: "Carlos R.",
      company: "Union Secretary Treasurer",
      title: "No more chasing paperwork."
    },
    {
      text: "I used to field calls daily from laborers asking if their benefits had been reported correctly. With LaborAid, I can show them real-time records. Laborers feel confident, and so do we.",
      author: "Tamika L.",
      company: "Union Rep",
      title: "Finally, transparency we can trust."
    },
    {
      text: "LaborAid gets it. The platform is simple, but powerful. We can pull reports fast, flag issues before they snowball, and focus on protecting our laborers, not fixing admin mistakes.",
      author: "Mike G.",
      company: "Benefit Coordinator",
      title: "It's built for how we actually work."
    }
  ];
  
  // Define specific testimonials for trustee page
  const trusteeTestimonials = [
    {
      text: "We'd dig through emails, cross-check spreadsheets, and hope nothing slipped through. LaborAid organizes it all. Now we can pull audit-ready reports in seconds.",
      author: "Erica M.",
      company: "Fund Administrator",
      title: "Audit prep used to be a scramble"
    },
    {
      text: "With LaborAid, we don't have to piece together contributions from multiple contractors. It's centralized, real-time, and finally easy to track what's missing or late.",
      author: "Joseph T.",
      company: "Trustee",
      title: "Everything's in one place"
    },
    {
      text: "LaborAid helps us catch issues before they become problems. We can actually spend our time improving oversight instead of chasing down documents.",
      author: "Linda B.",
      company: "Board Trustee",
      title: "It's made our job 10x easier"
    }
  ];
  
  // Define specific testimonials for contractor page
  const contractorTestimonials = [
    {
      text: "Before LaborAid, we were constantly second-guessing contribution rates. Now everything updates automatically based on the job site and trade. It's saved us hours every week.",
      author: "Marcus D.",
      company: "Payroll Manager",
      title: "No more rate confusion"
    },
    {
      text: "LaborAid flags issues before we hit submit. That's been a game-changer. We're not worried about getting calls from trustees or unions about errors anymore.",
      author: "Trina S.",
      company: "Office Admin",
      title: "We finally feel confident submitting"
    },
    {
      text: "LaborAid has cut down our admin time and helped us stay compliant without the back-and-forth. It's built for how construction companies actually operate.",
      author: "Rafael M.",
      company: "Project Coordinator",
      title: "It's taken the stress out of remittance"
    }
  ];
  
  // Default testimonials for other pages
  const defaultTestimonials = [
    {
      text: "LaborAid has cut down our admin time and helped us stay compliant without the back-and-forth. It's built for how trade contractors actually operate.",
      author: "Rafael M.",
      company: "Project Coordinator",
      title: "It's taken the stress out of remittance"
    },
    {
      text: "We'd dig through emails, cross-check spreadsheets, and hope nothing slipped through. LaborAid organizes it all. Now we can pull audit-ready reports in seconds.",
      author: "Erica M.",
      company: "Fund Administrator",
      title: "Audit prep used to be a scramble"
    },
    {
      text: "I used to field calls daily from laborers asking if their benefits had been reported correctly. With LaborAid, I can show them real-time records. Laborers feel confident, and so do we.",
      author: "Tamika L.",
      company: "Union Rep",
      title: "Finally, transparency we can trust"
    }
  ];
  
  // Choose which testimonials to display based on the current route
  let testimonials;
  if (location.pathname === '/union-rep') {
    testimonials = unionRepTestimonials;
  } else if (location.pathname === '/trustee') {
    testimonials = trusteeTestimonials;
  } else if (location.pathname === '/contractor') {
    testimonials = contractorTestimonials;
  } else {
    testimonials = defaultTestimonials;
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Trusted by People Like You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card p-8 h-full flex flex-col">
              <div className="testimonial-stars mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              {/* Only render the title if it exists */}
              {'title' in testimonial && (
                <p className="text-lg font-bold text-primary mb-3">{testimonial.title}</p>
              )}
              <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
