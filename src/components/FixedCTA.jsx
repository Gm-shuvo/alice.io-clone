import React from 'react';

const FixedCTA = () => {
  return (
    <button 
      className="fixed bottom-10 right-10 z-[1000] w-32 h-32 md:w-44 md:h-44 bg-beige border border-black rounded-full shadow-[6px_6px_0_0_#0d0d0d] flex flex-col items-center justify-center p-4 hover:shadow-[1px_1px_0_0_#0d0d0d] transition-all duration-300 rotate-12 hover:rotate-0"
    >
      <div className="w-full h-full border border-black rounded-full flex flex-col items-center justify-center shadow-[inset_4px_4px_0_0_#0d0d0d]">
        <span className="font-romie italic text-lg md:text-2xl leading-none">Get a</span>
        <span className="font-romie italic text-lg md:text-2xl leading-none">Demo</span>
        
        {/* Simple arrow icon */}
        <svg className="w-6 h-6 mt-2 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 7l-10 10M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </button>
  );
};

export default FixedCTA;
