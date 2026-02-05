
import React from 'react';
import { TRUST_LOGOS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">As Seen On & Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          {TRUST_LOGOS.map((logo) => (
            <span key={logo} className="text-2xl font-black text-slate-900 tracking-tighter cursor-default">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
