import React from "react";

const TrustLogos = () => {
  const logos = [
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d3915a8fee2297cb1f0_tiktok.svg", alt: "TikTok" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d313bad9acfe2dff740_lovable.svg", alt: "Lovable" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d29171f608da106750d_aws.svg", alt: "AWS" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d210bb376e0e03c7ab0_deliveroo.svg", alt: "Deliveroo" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d1abc4d38f815b901f1_nvidia.svg", alt: "NVIDIA" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d10149f8ffd1cbb1ca0_niantic.svg", alt: "Niantic" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d09a62c04a206d2f41b_cohere.svg", alt: "Cohere" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d000389257618444175_amazon.svg", alt: "Amazon" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cfbbdf5facd56e556ae_black-forest-labs.svg", alt: "Black Forest Labs" },
    { src: "https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cece69d55e0d39c5a77_udemy.svg", alt: "Udemy" },
  ];

  return (
    <div className="logos-strip">
      <div className="logos_heading">
        <div className="heading-eyebrow">
          Trusted by the world’s biggest enterprises &amp; foundation model labs
        </div>
      </div>

      <div className="logos_marquee">
        {/* First wrapper */}
        <div className="logos_wrapper">
          <div className="logos_collection w-dyn-list">
            <div role="list" className="logos_collection-list w-dyn-items">
              {logos.map((logo, index) => (
                <div key={index} role="listitem" className="logos_collection-item w-dyn-item">
                  <img
                    src={logo.src}
                    loading="eager"
                    width="120"
                    height="46"
                    alt={logo.alt}
                    className="logos_logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second wrapper (for seamless infinite loop) */}
        <div className="logos_wrapper">
          <div className="logos_collection w-dyn-list">
            <div role="list" className="logos_collection-list w-dyn-items">
              {logos.map((logo, index) => (
                <div key={`second-${index}`} role="listitem" className="logos_collection-item w-dyn-item">
                  <img
                    src={logo.src}
                    loading="eager"
                    width="120"
                    height="46"
                    alt={logo.alt}
                    className="logos_logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for marquee animation */}
      <style jsx>{`
        .logos_wrapper {
          animation: logoloop 30s linear infinite;
        }

        @media (max-width: 767px) {
          .logos_wrapper {
            animation-duration: 15s;
          }
        }

        @keyframes logoloop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default TrustLogos;
