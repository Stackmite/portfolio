
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Comprehensive Tech Solutions</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            We don't just build software; we build foundations for growth. Explore our core specialized services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 relative z-10 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
