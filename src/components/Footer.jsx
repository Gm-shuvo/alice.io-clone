import React from 'react';

const Footer = () => {
  const columns = [
    {
      title: 'Products',
      links: ['Platform Overview', 'WonderBuild', 'WonderFence', 'WonderCheck', 'Intelligence']
    },
    {
      title: 'Solutions',
      links: ['Foundation Model', 'Gen AI Apps & Agents', 'ActiveFence - UGC']
    },
    {
      title: 'Where We Operate',
      links: ['Customers', 'Ecosystem']
    },
    {
      title: 'Resources',
      links: ['Perspectives Blog', 'Engineering Blog', 'Intelligence Blog', 'Learning', 'Technical Docs', 'Glossary', 'AI Skills Scanner', 'Podcast']
    },
    {
      title: 'Company',
      links: ['About', 'Newsroom', 'Ecosystem', 'Careers']
    }
  ];

  return (
    <footer className="bg-beige pt-40 pb-10 border-t border-medium-grey overflow-hidden">
      {/* Footer Lottie Animation Placeholder (Decorative Wave) */}
      <div className="w-full h-20 -mt-52 mb-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 100" className="w-full h-full preserve-aspect-none fill-none stroke-black stroke-[0.5px]">
          <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50" />
        </svg>
      </div>

      <div className="container-large">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr,1fr,1fr] gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/6935051c71a7628e57908360_fixed-icon.svg" 
                alt="Alice Logo" 
                className="w-40"
              />
            </div>
            
            <div className="pt-6 border-t border-medium-grey flex flex-col gap-6">
               <div className="flex gap-3">
                 {['L', 'X', 'Y', 'M', 'S'].map((icon, i) => (
                   <div key={i} className="w-8 h-8 border border-medium-grey bg-light-grey flex items-center justify-center cursor-pointer hover:bg-bg-black hover:text-white transition-all duration-300">
                     {icon}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* nav columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6 border-t lg:border-t-0 pt-8 lg:pt-0 border-medium-grey">
              <h5 className="font-mono text-[0.875rem] font-bold uppercase tracking-wider">{col.title}</h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="font-haas text-[0.875rem] text-dark-grey hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-medium-grey flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[0.875rem] text-dark-grey">©2026 ActiveFence</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.875rem] text-dark-grey">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Accessibility Statement</a>
            <a href="#" className="hover:text-black">CPRA</a>
            <a href="#" className="hover:text-black">Terms of Use</a>
            <a href="#" className="hover:text-black">Cookie Policy</a>
            <a href="#" className="hover:text-black">LLM Reference</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
