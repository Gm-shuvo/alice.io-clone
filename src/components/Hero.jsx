import React from 'react';

const Hero = () => {
  return (
    <section className="bg-beige pt-20 pb-10 overflow-hidden text-center relative">
      <div className="container-large relative z-10">
        <div className="mb-6 font-mono text-[0.875rem] tracking-[0.045em] font-medium uppercase opacity-80 animate-fade-in-up">
          Innovate Unafraid
        </div>
        
        <h1 className="text-[3rem] md:text-[4.5rem] leading-[1.1] mb-8 animate-fade-in-up [animation-delay:200ms]">
          Security, Safety, and Trust<br />
          <span className="italic">for the AI Era</span>
        </h1>
        
        <div className="flex justify-center mb-16 animate-fade-in-up [animation-delay:400ms]">
          <button className="btn-primary">
            Get a Demo
          </button>
        </div>
      </div>

      {/* Hero Illustration / River */}
      <div className="relative w-full mt-[-4rem] mb-[-2rem] z-0 px-4">
        <img 
          src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69dcf9a5a1cf6d78c7a68fb8_alice-hero-first-frame.avif" 
          alt="Hero Illustration" 
          className="w-full max-w-[1440px] mx-auto object-cover aspect-[2880/820]"
        />
        {/* If we had lottie set up, it would go here */}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default Hero;
