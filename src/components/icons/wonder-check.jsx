import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const WonderCheck = (props) => (
  <DotLottieReact
    src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695bbdda8f56e61075595ee5_35a0169550eb55eac675e1b7db8bea4d_magnify2k.json"
    autoplay={!props.stop}
    loop={!props.stop}
    style={{ width: "2rem", height: "2rem" }}
  />
);
