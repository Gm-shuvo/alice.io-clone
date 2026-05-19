import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';

const Differentiators = () => {
  const items = [
    {
      title: "Epic, Real-World Adversarial Intelligence",
      body: "Our solutions outperform industry benchmarks because they're powered by data drawn from a decade of real-world adversarial research, enabling you to act before abuse becomes news.",
      lottie: "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c4729166e3fc1083b7a_3544bf8016c478364747bde5ab4b7bff_card.lottie"
    },
    {
      title: "The Rabbit Hole Data Moat",
      body: "With billions of continually updated toxic examples, we train sharper classifiers and fuel stronger red-teaming, giving you unmatched accuracy and coverage.",
      lottie: "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c47b48a893c5b9e1edc_49a41b2a29e4882a55a00d0f75bd8c67_door.lottie"
    },
    {
      title: "Adaptive, Customizable Policy Alignment",
      body: "Keep your policies front and center, tuning coverage to your regulatory needs and risk tolerance — across every modality, so each interaction stays trusted and aligned.",
      lottie: "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c471a2c4314249d723f_582ff493e6e7f37f0fc4aede46c11fdd_key.lottie"
    }
  ];

  return (
    <section className="bg-beige pt-32 pb-20 overflow-hidden">
      <div className="container-large">
        <div className="section_heading mb-20">
          <h2 className="text-[3.5rem] leading-[1.1] md:text-[4rem] text-center max-w-[65rem] mx-auto font-romie font-normal">
            From UGC to GenAI and humanoid robots, Alice allows you and your users to <span className="text-style-italic inline-block">advance unafraid.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className={`card_item stroke-shadow group hover:z-10 transition-all duration-300 ${
                idx === 0 ? "md:border-r-0" : idx === 1 ? "md:border-r-0" : ""
              }`}
            >
              <div className="card_top flex flex-col h-full">
                <div className="card_icon mb-8">
                  <DotLottiePlayer
                    src={item.lottie}
                    autoplay
                    loop
                  />
                </div>
                <h4 className="text-[1.75rem] leading-[1.2] font-semibold mb-6 pr-4">{item.title}</h4>
                <div className="w-full h-px bg-dark-grey/30 mb-8" />
                <p className="text-[1rem] leading-[1.6] text-dark-grey font-haas mt-auto">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
