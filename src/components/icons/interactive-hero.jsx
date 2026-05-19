
import { DotLottiePlayer } from "@dotlottie/react-player";

const InteractiveHero = () => {
  return (
    <div className="relative w-full pt-28">
      {/* Lottie Animation */}
      <div className="mb-13">

      <DotLottiePlayer
        src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f42c2b37d7d8a59c5d709_interactive-home.json"
        autoplay
        loop
        mode="normal"
        background="transparent"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "370px",
        }}
      />
      </div>

      {/* Decorative Background Line */}
      <div className="flex justify-center pt-10 relative z-10">
        <img
          src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f43cae38bdbbb595b81bf_046dafd558a2582a42a7c0d3cda1dff8_acountable_bg-line.svg"
          alt=""
          className="absolute top-0 bottom-0 w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default InteractiveHero;
