import React from 'react';

const AdvantageBanner = () => {
  return (
    <section className="bg-beige pt-10 pb-20">
      <div className="container-large">
        <div className="bg-pink border border-black shadow-[6px_9px_0_0_#0d0d0d] grid grid-cols-1 md:grid-cols-[1.125fr,0.875fr] relative overflow-hidden">
          {/* Decorative Corner SVG Grid Simulation */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full"><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/></pattern><rect width="100" height="100" fill="url(#grid)"/></svg>
          </div>

          <div className="p-12 md:p-16 flex flex-col items-start gap-6 relative z-10">
            <h2 className="text-[2.5rem] md:text-[3.5rem] italic leading-[1.05]">
              Innovation Shouldn't <br />
              Come with Compromise.
            </h2>
            <p className="text-lg opacity-80 max-w-md">
              Secure your foundation models, guard your applications, and monitor your AI agents with the world's most trusted adversary intelligence.
            </p>
            <button className="btn-primary !bg-black !text-white shadow-[3px_3px_0_0_#b6276b]">
              Get Started Now
            </button>
          </div>

          <div className="bg-[#1e1e1e] flex items-center justify-center p-8 min-h-[300px]">
             {/* Complex illustration or image placeholder */}
             <div className="text-white font-romie italic text-3xl opacity-50 text-center px-10">
                Building the future <br /> 
                <span className="text-pink">with Alice.</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageBanner;
