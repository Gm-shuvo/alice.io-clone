import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const WonderFence = (props) => (
  <DotLottieReact
    src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695bbddc61db3898e0c95413_3dbd1ce0b4e0ab31ec61dabf5ed8ce7d_Shield2.lottie"
    autoplay={!props.stop}
    loop={!props.stop}
    style={{ width: "2rem", height: "2rem" }}
  />
);
