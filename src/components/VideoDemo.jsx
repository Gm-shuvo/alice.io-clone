import React, { useState } from 'react';

const VideoDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-beige pt-20 pb-10">
      <div className="container-large">
        {/* Video Thumbnail Container */}
        <div 
          className="relative aspect-[16/9] w-full max-w-[1200px] mx-auto rounded overflow-hidden cursor-pointer group shadow-2xl"
          onClick={() => setIsOpen(true)}
        >
          <img 
            src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/696672852c03c4c72a9bcbf6_Demo%20Video%20Thumbnail.avif" 
            alt="Demo Video Thumbnail"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-beige border border-black rounded-full shadow-[3px_3px_0_0_#0d0d0d] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[1px_1px_0_0_#0d0d0d] transition-all duration-300">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center shadow-[inset_3px_3px_0_0_#0d0d0d]">
                <svg className="w-6 h-6 text-pink ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[2.25rem] md:text-[2.8125rem] font-romie italic max-w-4xl mx-auto leading-tight opacity-90">
            "If you've talked online with a friend, colleague, or chatbot in the last hour, Alice likely protected you."
          </p>
        </div>
      </div>

      {/* Modal / Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1e1e1e]/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-[900px] bg-beige border border-black shadow-[10px_10px_0_0_#0d0d0d] p-8 md:p-12 animate-zoom-in">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-[-40px] right-0 w-10 h-10 bg-medium-pink border border-black shadow-[3px_3px_0_0_#0d0d0d] text-white flex items-center justify-center hover:shadow-[1px_1px_0_0_#0d0d0d] transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="aspect-video w-full">
              <iframe 
                src="https://player.vimeo.com/video/1153867982?autoplay=1" 
                className="w-full h-full"
                allow="autoplay; fullscreen" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in { animation: zoomIn 0.3s ease-out; }
      `}} />
    </section>
  );
};

export default VideoDemo;
