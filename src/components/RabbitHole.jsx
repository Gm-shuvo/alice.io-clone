import React from 'react';

const RabbitHole = () => {
  return (
    <section className="bg-blue-black text-white py-32 overflow-hidden">
      <div className="container-large">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="font-mono text-[0.875rem] text-dark-grey uppercase tracking-widest mb-4">
              PROTECTING 3B+ PEOPLE ONLINE
            </div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] mb-8">
              Powered by the world's most comprehensive adversarial intelligence engine — <span className="italic text-pink">Rabbit Hole</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-10">
              <p>
                Our proprietary intelligence engine identifies emerging threats across 100+ languages and modalities, fueling our detection capabilities with real-world adversarial data.
              </p>
              <p>
                By connecting the dots between millions of toxic examples and malicious signals, Rabbit Hole allows enterprises to innovate without the fear of unforeseen safety failures.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button className="btn-primary">
                Navigate GenAI Wonderland
              </button>
              <a href="#" className="text-[#108496] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Abstract visual: glowing rabbit hole / spiral */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full border border-pink/20 animate-spin-slow" />
              <div className="absolute inset-10 rounded-full border border-teal/20 animate-spin-reverse" />
              <div className="absolute inset-20 rounded-full border border-yellow/20 animate-spin-slow" />
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-pink/40 to-teal/40 blur-3xl opacity-50 animate-pulse" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-45" />
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-[135deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 10s linear infinite; }
      `}} />
    </section>
  );
};

export default RabbitHole;
