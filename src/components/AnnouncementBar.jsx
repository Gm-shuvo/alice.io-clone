import React from 'react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[#362c2c] text-beige py-2 flex justify-center items-center font-mono text-[0.875rem] tracking-[0.045em] z-[1002] relative">
      <div className="bg-medium-pink border-[0.03125rem] border-black shadow-[3px_3px_0_0_#0d0d0d] rounded-[0.1875rem] px-1.5 py-0.5 text-white uppercase text-[0.75rem] font-bold mr-2">
        ActiveFence is now Alice
      </div>
      <span className="opacity-90">Explore our new identity</span>
    </div>
  );
};

export default AnnouncementBar;
