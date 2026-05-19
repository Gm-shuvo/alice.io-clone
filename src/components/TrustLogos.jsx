import React from 'react';

const TrustLogos = () => {
  const logos = [
    { name: 'TikTok', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d3915a8fee2297cb1f0_tiktok.svg' },
    { name: 'Lovable', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d313bad9acfe2dff740_lovable.svg' },
    { name: 'AWS', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d29171f608da106750d_aws.svg' },
    { name: 'Deliveroo', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d210bb376e0e03c7ab0_deliveroo.svg' },
    { name: 'NVIDIA', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d1abc4d38f815b901f1_nvidia.svg' },
    { name: 'Niantic', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d10149f8ffd1cbb1ca0_niantic.svg' },
    { name: 'Cohere', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d09a62c04a206d2f41b_cohere.svg' },
    { name: 'Amazon', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d000389257618444175_amazon.svg' },
    { name: 'Black Forest Labs', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cfbbdf5facd56e556ae_black-forest-labs.svg' },
    { name: 'Udemy', url: 'https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cece69d55e0d39c5a77_udemy.svg' },
  ];

  return (
    <section className="bg-light-grey border-b border-medium-grey overflow-hidden">
      <div className="py-4 text-center border-b border-medium-grey">
        <p className="text-[0.875rem] tracking-wider opacity-60">
          TRUSTED BY THE WORLD'S BIGGEST ENTERPRISES & FOUNDATION MODEL LABS
        </p>
      </div>
      
      <div className="py-8 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-light-grey to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-light-grey to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {[...logos, ...logos].map((logo, idx) => (
            <img 
              key={idx} 
              src={logo.url} 
              alt={logo.name} 
              className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
