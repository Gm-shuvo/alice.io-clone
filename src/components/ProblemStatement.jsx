import React from 'react';

const ProblemStatement = () => {
  const problems = [
    {
      title: "Unintended GenAI Behavior",
      body: "GenAI can produce harmful or misleading content at a scale traditional security and safety controls can't reliably manage."
    },
    {
      title: "Application-Level Exploitation",
      body: "Prompt injection, jailbreaks, and model exploits expose applications, agents, and integrations to data leakage or abuse."
    },
    {
      title: "Governance and Compliance Gaps",
      body: "Abusive, harmful, or non-compliant interactions undermine security and safety policy enforcement and responsible AI governance."
    },
    {
      title: "Reputational and Trust Exposure",
      body: "A single failure can trigger legal liability, regulatory scrutiny, stalled innovation momentum, and lasting damage to brand trust."
    }
  ];

  return (
    <section className="bg-blue-black text-white pt-32 pb-20 relative overflow-hidden">
      {/* Decorative Wavy Line from spec */}
      <div className="absolute top-0 left-0 w-full h-28 -mt-14 opacity-50 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full preserve-aspect-none fill-none stroke-medium-grey stroke-[0.5px]">
          <path d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160" />
        </svg>
      </div>

      <div className="container-large relative z-10">
        <div className="text-center mb-16">
          <div className="font-mono text-[0.875rem] text-dark-grey uppercase tracking-widest mb-4">
            The internet is a wonderful place. Mostly.
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] max-w-4xl mx-auto">
            Wherever people and technology meet, powerful tools can be manipulated to do harmful things. <span className="italic opacity-80">And you're held accountable.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-medium-grey/30">
          {problems.map((p, idx) => (
            <div key={idx} className="p-10 border-r border-b lg:border-b-0 border-medium-grey/30 last:border-r-0 hover:bg-white/5 transition-colors group">
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-4">{p.title}</h4>
              <p className="text-white/60 text-[0.9375rem] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-flex items-center gap-3 text-white text-xl hover:gap-5 transition-all">
            Step into GenAI Wonderland <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
