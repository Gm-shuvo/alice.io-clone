import { DotLottiePlayer } from "@dotlottie/react-player";

export const WonderBuilder = (props) => (
  <DotLottiePlayer
    src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695a5c48f0fa7619c8ccee0b_887069796c974a61836b319d58ccb92c_Screw.lottie"
    autoplay
    stop={props.stop}
    loop
    style={{ width: "2rem", height: "2rem" }}
  />
);

