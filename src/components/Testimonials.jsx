import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate move offset (subtle)
      const x = (clientX - innerWidth / 2) / 50;
      const y = (clientY - innerHeight / 2) / 50;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const bgStyle = (factor) => ({
    willChange: 'transform',
    transform: `translate3d(${mousePos.x * factor}px, ${mousePos.y * factor}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: 'preserve-3d',
    zIndex: 1,
    width: '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    position: 'absolute',
    inset: '0%',
  });

  return (
    <section className="bg-beige pt-40 pb-40 overflow-hidden relative min-h-[700px] max-w-[85.5rem] mx-auto w-full px-[2.5rem] flex items-center">
      {/* Testimonials Background Images with Parallax */}
      <img 
        src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff45bee8a26c6bd6d3d_e1166c82f455d41a0e2aec102825fbd1_rare.svg" 
        alt="" 
        className="teastimonials_bg-image is-rare pointer-events-none opacity-80"
        style={{ ...bgStyle(0.5), maxWidth: '80rem' }}
      />
      <img 
        src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4328dc47fb8108837_82cf7d7d0d47934de81015a25868dd9b_middle.svg" 
        alt="" 
        className="teastimonials_bg-image pointer-events-none"
        style={bgStyle(1)}
      />
      <img 
        src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4334c013e46320b38_09fe41fa7b20fe7ce83ba0879367c84c_front.svg" 
        alt="" 
        className="teastimonials_bg-image pointer-events-none"
        style={bgStyle(1.5)}
      />

      <div className="container-large relative z-10 w-full">
        <div className="max-w-[1000px] mx-auto text-center border-y border-medium-grey py-24 px-8 relative">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center items-center py-20 px-8 ${idx === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
            >
              <blockquote className="text-[1.875rem] md:text-[2.25rem] font-romie italic leading-[1.2] mb-10 opacity-90 px-4 md:px-12">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[1.125rem] mb-1">{t.author}</span>
                <span className="text-[0.875rem] opacity-60 uppercase tracking-widest">{t.title}</span>
              </div>
            </div>
          ))}
          
          {/* Reserve space because of absolute positioning */}
          <div className="invisible py-24 px-8 opacity-0">
            <blockquote className="text-[2.25rem] font-romie italic leading-tight mb-10 px-12">
              "{testimonials[0].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="font-bold text-[1.125rem] mb-1">X</span>
              <span className="text-[0.875rem] uppercase tracking-widest">Y</span>
            </div>
          </div>
        </div>

        {/* Carousel Controls - Updated to match screenshot */}
        <div className="flex justify-center items-center gap-6 mt-16 font-haas text-[0.875rem]">
          <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} 
            className="opacity-40 hover:opacity-100 transition-opacity text-xl font-bold"
          >
            ←
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-dark-grey' : 'bg-medium-grey opacity-50'}`}
              />
            ))}
          </div>

          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)} 
            className="opacity-40 hover:opacity-100 transition-opacity text-xl font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
