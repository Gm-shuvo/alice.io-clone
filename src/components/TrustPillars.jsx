import React from 'react';

const TrustPillars = () => {
  const pillars = [
    {
      title: "Trusted",
      body: "The backbone of the internet's most popular platforms, proven at scale across 100+ languages and billions of cross-platform interactions."
    },
    {
      title: "Safe",
      body: "Powered by the industry's richest real-world intelligence dataset, ensuring your models and agents stay aligned with human values."
    },
    {
      title: "Secured",
      body: "Protecting and fortifying GenAI applications, agents, and models against evolving exploit techniques and jailbreak attempts."
    }
  ];

  return (
    <section className="bg-beige pt-20 pb-20">
      <div className="container-large">
        <h2 className="text-[2.5rem] md:text-[3rem] text-center mb-16">Proven peace of mind</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-medium-grey">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-10 border-r last:border-r-0 border-medium-grey group hover:bg-white transition-all">
              <h4 className="text-xl font-bold mb-6">{p.title}</h4>
              <p className="text-dark-grey leading-relaxed opacity-80">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Certifications and ISO labels */}
        <div className="mt-20 flex flex-col items-center">
          <div className="flex gap-16 items-center mb-6">
            <img 
              src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98b04bec8784dd14987_soc2.svg" 
              alt="SOC 2" 
              className="w-16 h-16 grayscale opacity-60"
            />
            <img 
              src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98bca642f01e8b7e47b_iso.svg" 
              alt="ISO 27001" 
              className="w-16 h-16 grayscale opacity-60"
            />
          </div>
          <div className="font-mono text-[0.75rem] uppercase tracking-[0.6em] opacity-40">
            Certified & Compliant
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPillars;
