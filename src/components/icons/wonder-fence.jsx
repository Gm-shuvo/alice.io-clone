import { DotLottiePlayer } from "@dotlottie/react-player";

export const WonderFence = (props) => (
  <DotLottiePlayer
  src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695bbddc61db3898e0c95413_3dbd1ce0b4e0ab31ec61dabf5ed8ce7d_Shield2.lottie"
  autoplay
  stop={props.stop}
  loop
  style={{ width: "2rem", height: "2rem" }}
/>
);
