import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import InteractiveHero from "./icons/interactive-hero";

const Differentiators = () => {
  const items = [
    {
      title: "Epic, Real-World Adversarial Intelligence",
      body: "Our solutions outperform industry benchmarks because they're powered by data drawn from a decade of real-world adversarial research, enabling you to act before abuse becomes news.",
      lottie:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c4729166e3fc1083b7a_3544bf8016c478364747bde5ab4b7bff_card.lottie",
    },
    {
      title: "The Rabbit Hole Data Moat",
      body: "With billions of continually updated toxic examples, we train sharper classifiers and fuel stronger red-teaming, giving you unmatched accuracy and coverage.",
      lottie:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c47b48a893c5b9e1edc_49a41b2a29e4882a55a00d0f75bd8c67_door.lottie",
    },
    {
      title: "Adaptive, Customizable Policy Alignment",
      body: "Keep your policies front and center, tuning coverage to your regulatory needs and risk tolerance — across every modality, so each interaction stays trusted and aligned.",
      lottie:
        "https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c471a2c4314249d723f_582ff493e6e7f37f0fc4aede46c11fdd_key.lottie",
    },
  ];

  return (
    <section className="acountable_bg-image is-top w-embed sm:pb-20">

      <InteractiveHero />
    </section>
  );
};

export default Differentiators;
