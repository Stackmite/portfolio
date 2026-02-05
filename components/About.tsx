
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 flex flex-col">
            {/* <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our DNA</h2> */}
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
              We Don't Code <br /> We Architect Growth
            </h3>
            <p className="text-slate-600 text-xl leading-relaxed mb-8">
              Stackmite was founded on the belief that software should be an asset, not a burden. We operate as an elite strike team for startups that need to move fast without breaking things.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-slate-800 font-bold text-lg">Direct access to lead engineers (no account managers)</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-slate-800 font-bold text-lg">Full-cycle ownership from Figma to Cloud deployment</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-slate-800 font-bold text-lg">Scalable architecture designed for 10M+ users</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <div>
                <h4 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">5+</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Global Brands</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">14</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Day MVP Cycles</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[4rem] transform rotate-3"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Stackmite Office" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Culture</div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 leading-tight">Engineering is an Art Form</h4>
                <p className="text-slate-300 text-sm">We foster a culture of curiosity and perfectionism.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
