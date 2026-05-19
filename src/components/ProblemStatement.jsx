import React from "react";
import { EyesOne } from "./icons/eyes-one";
import { BoatAnimation } from "./icons/boat-animation";

const ProblemStatement = () => {
  const problems = [
    {
      title: "Unintended GenAI Behavior",
      body: "GenAI can produce harmful or misleading content at a scale traditional security and safety controls can't reliably manage.",
    },
    {
      title: "Application-Level Exploitation",
      body: "Prompt injection, jailbreaks, and model exploits expose applications, agents, and integrations to data leakage or abuse.",
    },
    {
      title: "Governance and Compliance Gaps",
      body: "Abusive, harmful, or non-compliant interactions undermine security and safety policy enforcement and responsible AI governance.",
    },
    {
      title: "Reputational and Trust Exposure",
      body: "A single failure can trigger legal liability, regulatory scrutiny, stalled innovation momentum, and lasting damage to brand trust.",
    },
  ];

  return (
    <section className="bg-blue-black text-white pt-32 relative overflow-hidden">
      <div className="container-large relative z-10">
        {/* Top Eyes + Quote */}
        <div className="flex justify-between items-start mb-12">
          {/* Left Eye */}
          <div className="pt-8 flex items-center justify-center w-embed">
            <EyesOne />
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="font-mono text-sm uppercase tracking-[3px] text-gray-400 mb-6">
              THE INTERNET IS A WONDERFUL PLACE. MOSTLY.
            </div>

            <h2 className="text-[2.75rem] md:text-[3.25rem] leading-[1.15] font-light">
              Wherever people and technology meet, powerful tools can be
              manipulated to do harmful things.{" "}
              <span className="italic">And you’re held accountable.</span>
            </h2>
          </div>

          {/* Right Eye */}
          <div className="pt-8 flex items-center justify-center w-embed">
            <EyesOne />
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="p-10 border-r border-b lg:border-b-0 border-white/10 hover:bg-white/5 transition-colors group"
            >
              <div className="text-sm font-mono tracking-widest text-white/50 mb-3">
                0{idx + 1}
              </div>
              <h4 className="text-2xl font-medium mb-6 leading-tight">
                {p.title}
              </h4>
              <p className="text-white/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-pink-600 hover:bg-pink-500 transition-colors rounded-full text-white font-medium text-lg">
            Step into GenAI Wonderland
          </button>
        </div>
      </div>

      <div className="">
        <BoatAnimation />
      </div>
    </section>
  );
};

export default ProblemStatement;
