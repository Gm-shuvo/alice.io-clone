import React, { useState, useEffect } from "react";
import { WonderBuilder } from "./icons/wonder-build";
import { WonderFence } from "./icons/wonder-fence";
import { WonderCheck } from "./icons/wonder-check";

const WonderSuite = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const tabs = [
    {
      icon: WonderBuilder,
      title: "WonderBuild",
      tag: "Pre-Launch Stress-Testing",
      description:
        "Prepare your AI models, apps, and agents for responsible, resilient, confident deployment",
      image:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fea74eadfbe5277d319_WB.jpg",
    },
    {
      icon: WonderFence,
      title: "WonderFence",
      tag: "Dynamic Runtime Guardrails",
      description:
        "Keep live apps and agents safe, secure, and aligned with your policies and brand",
      image:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb92b707dbee5a94e0b14f_WFINAL.jpg",
    },
    {
      icon: WonderCheck,
      title: "WonderCheck",
      tag: "Ongoing Automated Red-Teaming",
      description:
        "Evaluation for production AI systems to detect drift, surface emerging risks, and prioritize remediation",
      image:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fa225b537b4e5eb703e_WC_10.jpg",
    },
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

            <h2 className="font-romie text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-normal max-w-280 mx-auto italic">
              Security Platform for Enterprise AI –{" "}
              <br className="hidden md:block" />
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Sidebar - Tabs */}
            <div className="lg:w-[380px] shrink-0 space-y-8">
              {tabs.map((tab, idx) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTab(idx);
                      setProgress(0);
                    }}
                    className={`w-full text-left group transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    {/* Icon + Title Row */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-11 h-11 flex items-center justify-center shrink-0">
                        <IconComponent className="w-10 h-10" stop={!isActive} />
                      </div>
                      <div className="font-mono uppercase tracking-[2px] text-sm font-semibold text-gray-900">
                        {tab.title}
                      </div>
                    </div>

                    {/* Tag */}
                    <h3 className="text-[1.75rem] leading-[1.1] font-medium font-romie italic mb-3">
                      {tab.tag}
                    </h3>

                    {/* Description - Only visible when active */}
                    <p
                      className={`text-[1.1rem] leading-relaxed text-gray-600 transition-all duration-500 ${
                        isActive
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      {tab.description}
                    </p>

                    {/* Active Underline */}
                    {isActive && (
                      <div className="h-[2px] bg-gray-300 mt-6 w-[443px] relative overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-black transition-[width] duration-75 linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Side - Image / Dashboard Preview */}
            <div className="flex-1 relative">
              <div className="relative border border-medium-grey bg-background shadow-sm h-[320px] md:h-[500px] w-full overflow-hidden aspect-square md:aspect-video">
                {tabs.map((tab, idx) => (
                  <img
                    key={idx}
                    src={tab.image}
                    alt={tab.title}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 py-2 ${
                      activeTab === idx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WonderSuite;
