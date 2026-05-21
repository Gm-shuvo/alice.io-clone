import { DotLottiePlayer } from "@dotlottie/react-player";
import React from "react";

const AliceDataAdvantage = () => {
  return (
    <div className="no-mobile">
      <section
        className="section-advantage"
      >
        <div className="padding-global padding-section-medium">
          <div className="container-large">
            <div className="advantage_component">
              <div>
                <DotLottiePlayer
                  src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f3e910e92ff5b35ff898c_advantage-show.lottie"
                  autoplay
                  loop
                />
              </div>

              <div
                className="advantage_text"
              >
                <div className="advantage_heading">
                  <h2 className="text-weight-medium text-style-italic">
                    <span className="a-swoosh">A</span>lice Data Advantage
                  </h2>
                  <p className="paragraph-21">
                    Alice is the world’s largest collector and manager of
                    adversarial intelligence data. Our data is the cornerstone
                    for protecting platform, tech, and users online.
                  </p>
                  <a
                    href="/intelligence"
                    className="button w-button"
                    data-wf--get-a-demo-button--variant="green"
                  >
                    &nbsp;Learn More &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AliceDataAdvantage;
