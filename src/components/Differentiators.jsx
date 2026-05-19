import React from 'react';

const Differentiators = () => {
  const items = [
    {
      title: "Epic, Real-World Adversarial Intelligence",
      body: "Our solutions outperform industry benchmarks because they're powered by data drawn from a decade of real-world adversarial research, enabling you to act before abuse becomes news."
    },
    {
      title: "The Rabbit Hole Data Moat",
      body: "With billions of continually updated toxic examples, we train sharper classifiers and fuel stronger red-teaming, giving you unmatched accuracy and coverage."
    },
    {
      title: "Adaptive, Customizable Policy Alignment",
      body: "Keep your policies front and center, tuning coverage to your regulatory needs and risk tolerance — across every modality, so each interaction stays trusted and aligned."
    }
  ];

  return (
    <section className="bg-beige pt-20 pb-10">
      <div className="container-large">
        <p className="text-center text-3xl font-romie italic max-w-4xl mx-auto mb-16 opacity-90 leading-tight">
          "From UGC to GenAI and humanoid robots, Alice allows you and your users to advance unafraid."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="p-10 border-t border-l md:border-l-0 border-dark-grey md:border-l last:border-r border-dark-grey group hover:bg-white hover:shadow-[6px_9px_0_0_#0d0d0d] transition-all duration-300 relative"
            >
              <h4 className="text-xl font-bold mb-6 min-h-[3rem]">{item.title}</h4>
              <p className="text-dark-grey leading-relaxed">{item.body}</p>
              
              {/* Thinner top/side, thicker bottom border simulation as per spec */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-dark-grey" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
