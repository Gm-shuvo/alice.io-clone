import React from 'react';

const BlogGrid = () => {
  const posts = [
    {
      type: 'blog',
      color: 'bg-[#ffd57a]',
      date: 'May 13, 2026 · 3 min read',
      title: "Introducing Guardrails Trained for Your Policies",
      body: "Generic guardrails weren't built for your policies. WonderFence trains a custom detector for each one..."
    },
    {
      type: 'podcast',
      color: 'bg-[#8ad6cb]',
      date: 'May 4, 2026',
      title: "What Does It Actually Take to Build Unbiased AI?",
      body: "Nobody told Tennisha Martin the importance of having a mentor, so she built a community of tens of thousands instead..."
    },
    {
      type: 'webinar',
      color: 'bg-[#108496] text-white',
      date: 'Sep 25, 2025',
      title: "Distilling LLMs into Efficient Transformers for Real-World AI",
      body: "This technical webinar explores how we distilled the world knowledge of a large language model into a compact transformer..."
    },
    {
      type: 'whitepaper',
      color: 'bg-[#e686b4]',
      date: 'Apr 27, 2026',
      title: "Building AI Applications in Financial Services",
      body: "A practical guide to building safe, compliant AI applications in financial services..."
    }
  ];

  return (
    <section className="bg-beige pt-20 pb-20">
      <div className="container-large">
        <div className="mb-16">
          <div className="font-mono text-[0.875rem] uppercase tracking-widest opacity-60 mb-2">Safe. Honest. Kind.</div>
          <h2 className="text-[2.5rem] md:text-[3rem]">What's New from Alice</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col border border-black shadow-[3px_3px_0_0_#0d0d0d] bg-beige p-6 group hover:shadow-[1px_1px_0_0_#0d0d0d] transition-all">
              <div className={`self-start px-2 py-1 ${post.color} rounded-[0.1875rem] font-mono text-[0.75rem] uppercase tracking-wider mb-6`}>
                {post.type}
              </div>
              <div className="font-mono text-[0.75rem] opacity-50 mb-4">{post.date}</div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-medium-green transition-colors">{post.title}</h4>
              <p className="text-[0.9375rem] opacity-70 mb-8 flex-grow">{post.body}</p>
              <a href="#" className="text-medium-green font-bold text-[0.875rem] uppercase tracking-wider hover:opacity-70">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
