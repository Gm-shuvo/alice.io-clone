import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Alice has significantly impacted our iteration speed and confidence in our evaluations and mitigations. It has enabled us to develop a faster evaluation suite, allowing us to release models more quickly and safely.",
      author: "Seraphina Goldfarb-Tarrant",
      title: "Head of AI Safety | Cohere"
    },
    {
      quote: "Alice has been a great partner to work with & I look forward to delivering next editions of Nova models. Their expertise in safety and alignment has been invaluable.",
      author: "Rahul Gupta",
      title: "Senior Manager, Responsible AI | Amazon AGI"
    },
    {
      quote: "Alice is the only vendor I've seen that does this type of extremely high quality safety work. They truly understand the depth of adversarial research.",
      author: "Head of Safety",
      title: "Leading LLM"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-beige pt-20 pb-40 overflow-hidden relative min-h-[600px] flex items-center">
      {/* Background Floating Icons Simulation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-[10%] animate-float-slow">🌸</div>
        <div className="absolute top-40 right-[15%] animate-float">🗝️</div>
        <div className="absolute bottom-20 left-[20%] animate-float-fast">🐝</div>
        <div className="absolute bottom-40 right-[10%] animate-float-slow">🎩</div>
        <div className="absolute top-[50%] left-[5%] animate-float">🃏</div>
        <div className="absolute top-[30%] right-[5%] animate-float-fast">🍄</div>
      </div>

      <div className="container-large relative z-10">
        <div className="max-w-[800px] mx-auto text-center border-y border-medium-grey py-20 px-8 relative">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center items-center py-20 px-8 ${idx === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
            >
              <blockquote className="text-[1.5rem] md:text-[2.25rem] font-romie italic leading-tight mb-10 opacity-90">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[1.125rem] mb-1">{t.author}</span>
                <span className="text-[0.875rem] opacity-60 uppercase tracking-widest">{t.title}</span>
              </div>
            </div>
          ))}
          
          {/* Reserve space because of absolute positioning */}
          <div className="invisible py-20 px-8 opacity-0">
            <blockquote className="text-[2.25rem] font-romie italic leading-tight mb-10">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="font-bold text-[1.125rem] mb-1">X</span>
              <span className="text-[0.875rem] uppercase tracking-widest">Y</span>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="opacity-40 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-black w-6' : 'bg-medium-grey'}`}
              />
            ))}
          </div>

          <button onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)} className="opacity-40 hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-float-fast { animation: float 3s ease-in-out infinite; }
      `}} />
    </section>
  );
};

export default Testimonials;
