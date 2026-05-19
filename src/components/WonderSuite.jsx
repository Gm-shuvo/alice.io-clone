import React, { useState, useEffect } from 'react';

const WonderSuite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const tabs = [
    {
      title: 'WonderBuild',
      tag: 'Pre-Launch Stress-Testing',
      description: 'Prepare your AI models, apps, and agents for responsible, resilient, confident deployment',
      image: 'https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fea74eadfbe5277d319_WB.jpg'
    },
    {
      title: 'WonderFence',
      tag: 'Dynamic Runtime Guardrails',
      description: 'Keep live apps and agents safe, secure, and aligned with your policies and brand',
      image: 'https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb92b707dbee5a94e0b14f_WFINAL.jpg'
    },
    {
      title: 'WonderCheck',
      tag: 'Ongoing Automated Red-Teaming',
      description: 'Evaluation for production AI systems to detect drift, surface emerging risks, and prioritize remediation',
      image: 'https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fa225b537b4e5eb703e_WC_10.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((cur) => (cur + 1) % tabs.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeTab, tabs.length]);

  return (
    <section className="bg-beige pt-20 pb-32">
      <div className="container-large">
        {/* Top Eyebrow Section */}
        <div className="w-full border-t border-medium-grey pt-12 pb-24 text-center">
          <div className="font-mono text-[0.875rem] tracking-[0.9em] uppercase font-medium text-dark-grey mb-24">
            Introducing
          </div>
          
          <div className="space-y-12 border-b border-medium-grey pb-32">
            <h2 className="font-romie text-[5rem] md:text-[6rem] leading-[0.9] text-style-italic overflow-visible">
              <span className="font-feature-ss09">W</span>onderSuite
            </h2>
            
            <h2 className="font-romie text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-normal max-w-[70rem] mx-auto italic">
              Security Platform for Enterprise AI – <br className="hidden md:block" /> 
              Test, Protect, and Monitor AI Apps & Agents
            </h2>
            
            <div className="pt-4">
              <button className="btn-primary stroke-shadow bg-bright-grey hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                Platform Overview
              </button>
            </div>
          </div>
        </div>

        {/* Product Showcase Grid */}
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left: Tab Menu */}
          <div className="lg:w-[40%] flex flex-col">
            {tabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => { setActiveTab(idx); setProgress(0); }}
                className={`group relative py-10 pr-12 text-left border-b border-medium-grey transition-all duration-500 cursor-pointer ${
                  activeTab === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className="flex items-center gap-4 font-mono text-[1rem] font-bold uppercase tracking-[0.2em] mb-6">
                  {tab.title}
                </div>
                <h3 className="text-[1.75rem] leading-[1.2] mb-4 font-romie italic font-medium">{tab.tag}</h3>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeTab === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[1.125rem] leading-relaxed text-dark-grey font-haas">
                    {tab.description}
                  </p>
                </div>
                
                {/* Active Underline Progress */}
                <div className="absolute bottom-[-1px] left-0 h-[2px] bg-black transition-all duration-300" 
                  style={{ width: activeTab === idx ? `${progress}%` : '0%' }} 
                />
              </button>
            ))}
          </div>

          {/* Right: Tab Image Display */}
          <div className="lg:w-[60%] relative flex items-center">
            <div className="w-full aspect-[4/3] relative border border-medium-grey bg-white shadow-sm overflow-hidden p-8">
              {tabs.map((tab, idx) => (
                <img
                  key={tab.title}
                  src={tab.image}
                  alt={tab.title}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto object-contain transition-all duration-700 ease-in-out ${
                    activeTab === idx ? 'opacity-100 scale-100 translate-y-[-50%] z-10' : 'opacity-0 scale-95 translate-y-[-45%] z-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Subtle decorative background glow for the active image */}
            <div className="absolute -inset-10 bg-radial from-medium-green/5 to-transparent blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonderSuite;
