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
    }, 50); // 100 * 50ms = 5000ms

    return () => clearInterval(interval);
  }, [activeTab, tabs.length]);

  return (
    <section className="bg-beige padding-section-medium">
      <div className="container-large">
        <div className="mb-12">
          <div className="font-mono text-[0.875rem] tracking-wider uppercase opacity-60 mb-2">Introducing</div>
          <h2 className="text-[2.8125rem] mb-4">WonderSuite</h2>
          <p className="text-xl max-w-2xl opacity-80 mb-6">
            Security Platform for Enterprise AI — Test, Protect, and Monitor AI Apps & Agents
          </p>
          <a href="#" className="text-medium-green font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Platform Overview <span className="text-xl">→</span>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          {/* Tabs Menu */}
          <div className="lg:w-1/3 flex flex-col">
            {tabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => { setActiveTab(idx); setProgress(0); }}
                className={`relative py-6 pr-8 text-left border-b border-medium-grey transition-all duration-500 ${activeTab === idx ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
              >
                <div className="flex items-center gap-3 font-mono text-[0.875rem] font-bold uppercase tracking-widest mb-4">
                  {tab.title}
                </div>
                <h3 className="text-2xl mb-2 italic">{tab.tag}</h3>
                {activeTab === idx && (
                  <p className="text-[1rem] leading-relaxed opacity-80 animate-fade-in">
                    {tab.description}
                  </p>
                )}
                
                {/* Progress bar */}
                {activeTab === idx && (
                  <div className="absolute bottom-[-1px] left-0 h-[2px] bg-black" style={{ width: `${progress}%` }} />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content (Image) */}
          <div className="lg:w-2/3">
            <div className="relative aspect-[16/9] border border-medium-grey overflow-hidden bg-white shadow-sm">
              {tabs.map((tab, idx) => (
                <img
                  key={tab.title}
                  src={tab.image}
                  alt={tab.title}
                  className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-500 ${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonderSuite;
