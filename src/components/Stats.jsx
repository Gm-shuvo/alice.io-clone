import React from 'react';

const Stats = () => {
  const stats = [
    { number: '3B+', label: 'Users' },
    { number: '120+', label: 'Languages' },
    { number: '1B+', label: 'Daily AI-Human interactions' },
  ];

  return (
    <section className="bg-beige padding-section-medium">
      <div className="container-large">
        <h2 className="text-[2.5rem] md:text-[3rem] text-center italic mb-16 px-4">
          Safeguarding more than 50% of the world's online experiences
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#9fd2da] border-[0.03125rem] border-black shadow-[6px_6px_0_0_#0d0d0d] p-12 flex flex-col items-center justify-center text-center gap-4 hover:bg-[#8ad6cb] hover:shadow-[2px_2px_0_0_#0d0d0d] transition-all duration-300"
            >
              <div className="text-[4rem] font-romie italic font-normal tracking-tight">
                {stat.number}
              </div>
              <div className="font-mono text-[0.875rem] font-bold uppercase tracking-[0.2em] opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
