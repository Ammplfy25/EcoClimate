import React from 'react';
import { IconCheck } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1920" 
          alt="HVAC Technician working on a unit" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available 24/7 for Emergencies
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Perfect Climate, <br />
            <span className="text-blue-400">Perfect Comfort.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Premium HVAC installation, repair, and maintenance. We ensure your home stays cool in the summer and cozy in the winter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              Get a Free Quote
            </a>
            <a 
              href="#ai-helper" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              Diagnose Issue with AI
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-gray-300 text-sm font-medium">
            <div className="flex items-center gap-2">
              <IconCheck className="text-blue-400 w-5 h-5" /> Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="text-blue-400 w-5 h-5" /> 5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <IconCheck className="text-blue-400 w-5 h-5" /> Same-Day Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;