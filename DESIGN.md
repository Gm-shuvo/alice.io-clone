Build a pixel-perfect clone of the Alice.io homepage (formerly ActiveFence). 
The site is a dark-themed, enterprise SaaS landing page for an AI Security, Safety 
& Trust platform. Use React + Tailwind CSS. Below is the complete spec.

---

## BRAND & THEME

- Company: Alice (formerly ActiveFence)
- Tagline: "INNOVATE UNAFRAID"
- Theme: Deep dark background (#0a0a0a / near-black), white and light-gray text
- Accent color: Soft green or teal glow (use #a8f0c6 or similar for highlights)
- Typography: Clean modern sans-serif (use Inter or similar); large, bold headings
- Overall aesthetic: Futuristic, minimal, editorial — like a high-end AI company 
  meets an Alice in Wonderland theme ("Wonderland", "Rabbit Hole", "Curiouser")

---

## NAVIGATION (sticky, dark background, blur backdrop)

Left: Alice logo SVG (use a stylized "A" icon — reference: 
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/6935051c71a7628e57908360_fixed-icon.svg)

Center nav links (with dropdown menus):
- Products → [Platform Overview, WonderBuild, WonderFence, WonderCheck]
- Solutions → [GenAI Apps & Agents, Foundation Models, ActiveFence - UGC]
- Intelligence
- Where We Operate → [Industries dropdown: Child-Facing Products, Financial Services, 
  Healthcare, Insurance] + [Customers, Ecosystem]
- Resources → [Blogs: Perspectives, Engineering, Intelligence] + 
  [Learning, Technical Docs, AI Skills Scanner, Glossary, Podcast]
- Company → [About, Careers, News Room, Events]

Right: "Get a Demo" CTA button (outlined or filled, accent color)

---

## SECTION 1 — HERO

Full-viewport dark section.

Top label (small caps, letter-spaced): "INNOVATE UNAFRAID"

H1 (very large, ~72–80px, bold, white, centered):
"Security, Safety, and Trust
for the AI Era"

CTA button below: "Get a Demo" (large, accent-colored, rounded)

Below the text: A large hero visual — animated dark abstract graphic 
(simulate with a CSS animated radial gradient blob / glowing orb effect 
in deep purple/green/teal tones). Use this image as a static fallback:
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69dcf9a5a1cf6d78c7a68fb8_alice-hero-first-frame.avif

---

## SECTION 2 — TRUST LOGOS MARQUEE

Small label (gray, centered): "Trusted by the world's biggest enterprises & foundation model labs"

Infinite horizontal auto-scrolling logo strip (CSS marquee animation, no gap 
at loop point). Two identical sets for seamless loop. Logos (white/gray SVG):
TikTok, Lovable, AWS, Deliveroo, NVIDIA, Niantic, Cohere, Amazon, 
Black Forest Labs, Udemy

Use these exact SVG URLs from the CDN:
- TikTok: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d3915a8fee2297cb1f0_tiktok.svg
- Lovable: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d313bad9acfe2dff740_lovable.svg
- AWS: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d29171f608da106750d_aws.svg
- Deliveroo: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d210bb376e0e03c7ab0_deliveroo.svg
- NVIDIA: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d1abc4d38f815b901f1_nvidia.svg
- Niantic: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d10149f8ffd1cbb1ca0_niantic.svg
- Cohere: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d09a62c04a206d2f41b_cohere.svg
- Amazon: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d000389257618444175_amazon.svg
- Black Forest Labs: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cfbbdf5facd56e556ae_black-forest-labs.svg
- Udemy: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cece69d55e0d39c5a77_udemy.svg

---

## SECTION 3 — WONDERSUITE PRODUCT SHOWCASE

Small label: "Introducing"
H2 (large): "WonderSuite"
Subheading: "Security Platform for Enterprise AI — Test, Protect, and Monitor AI Apps & Agents"
Link: "Platform Overview →"

Below: 3-column tabbed/card layout. Each card is clickable and shows a 
corresponding product screenshot on the right side.

Card 1 — WonderBuild
  Tag: "Pre-Launch Stress-Testing"
  Description: "Prepare your AI models, apps, and agents for responsible, 
  resilient, confident deployment"
  Image: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fea74eadfbe5277d319_WB.jpg

Card 2 — WonderFence
  Tag: "Dynamic Runtime Guardrails"
  Description: "Keep live apps and agents safe, secure, and aligned with your 
  policies and brand"
  Image: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb92b707dbee5a94e0b14f_WFINAL.jpg

Card 3 — WonderCheck
  Tag: "Ongoing Automated Red-Teaming"
  Description: "Evaluation for production AI systems to detect drift, surface 
  emerging risks, and prioritize remediation"
  Image: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fa225b537b4e5eb703e_WC_10.jpg

Active card has a highlighted/glowing border (accent color). Image transitions 
with a smooth fade animation on card switch.

---

## SECTION 4 — STATS BANNER

Dark section, centered, 3 large stats in a row with thin vertical dividers:

Stat 1: "3B+" — Users
Stat 2: "120+" — Languages  
Stat 3: "1B+" — Daily AI-Human interactions

Numbers: very large (80–96px), bold white. Labels: small gray text below.
Add a subtle count-up animation on scroll into view.

---

## SECTION 5 — TESTIMONIALS CAROUSEL

H2: "Safeguarding more than 50% of the world's online experiences"

3 quote cards in a horizontal carousel (auto-advance or arrow navigation):

Quote 1:
  Text: "Alice has significantly impacted our iteration speed and confidence 
  in our evaluations and mitigations..."
  Author: Seraphina Goldfarb-Tarrant
  Title: Head of AI Safety | Cohere

Quote 2:
  Text: "Alice has been a great partner to work with & I look forward to 
  delivering next editions of Nova models..."
  Author: Rahul Gupta
  Title: Senior Manager, Responsible AI | Amazon AGI

Quote 3:
  Text: "Alice is the only vendor I've seen that does this type of extremely 
  high quality safety work..."
  Author: Head of Safety
  Title: Leading LLM

Style: Dark cards, quote mark icon, subtle border. Author name in white, 
title in gray.
svg: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4328dc47fb8108837_82cf7d7d0d47934de81015a25868dd9b_middle.svg

---

## SECTION 6 — DIFFERENTIATORS (3-column feature grid)

Intro text (centered, large, italic or elegant): 
"From UGC to GenAI and humanoid robots, Alice allows you and your users 
to advance unafraid."

3 feature columns:

1. "Epic, Real-World Adversarial Intelligence"
   Body: "Our solutions outperform industry benchmarks because they're powered 
   by data drawn from a decade of real-world adversarial research..."

2. "The Rabbit Hole Data Moat"
   Body: "With billions of continually updated toxic examples, we train sharper 
   classifiers and fuel stronger red-teaming..."

3. "Adaptive, Customizable Policy Alignment"
   Body: "Keep your policies front and center, tuning coverage to your 
   regulatory needs and risk tolerance..."

Background: subtle SVG line art or grid pattern behind this section.

---

## SECTION 7 — PROBLEM STATEMENT (dark, full-width)

Eyebrow text (small, gray): "The internet is a wonderful place. Mostly."

H2 (large, white, centered):
"Wherever people and technology meet, powerful tools can be manipulated 
to do harmful things. And you're held accountable."

4-column grid of problem cards (dark bordered cards, icon + title + body):

1. "Unintended GenAI Behavior" — "GenAI can produce harmful or misleading 
   content at a scale traditional controls can't reliably manage."

2. "Application-Level Exploitation" — "Prompt injection, jailbreaks, and 
   model exploits expose applications, agents, and integrations to abuse."

3. "Governance and Compliance Gaps" — "Abusive or non-compliant interactions 
   undermine safety policy enforcement and responsible AI governance."

4. "Reputational and Trust Exposure" — "A single failure can trigger legal 
   liability, regulatory scrutiny, and lasting damage to brand trust."

Below: CTA link — "Step into GenAI Wonderland →"

---

## SECTION 8 — VIDEO EMBED PLACEHOLDER

Full-width dark section with a video thumbnail placeholder.
Use this image: 
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/696672852c03c4c72a9bcbf6_Demo%20Video%20Thumbnail.avif

Centered play button icon overlay. On click, open a modal with an embedded 
Vimeo player (https://player.vimeo.com/video/1153867982).

Text below (centered, large):
"If you've talked online with a friend, colleague, or chatbot in the last hour, 
Alice likely protected you."

---

## SECTION 9 — RABBIT HOLE DATA ENGINE

Label: "PROTECTING 3B+ PEOPLE ONLINE"
H2: "Powered by the world's most comprehensive adversarial intelligence engine — Rabbit Hole"

Body text (two paragraphs — see content above).

Two CTA links: "Navigate GenAI Wonderland" and "Learn More →"

Right side: Abstract visual — dark background with a glowing rabbit hole / 
spiral effect (use CSS radial gradient animation or animated SVG concentric 
circles with a glow).

---

## SECTION 10 — TRUST PILLARS (3 columns)

H2: "Proven peace of mind"

3 cards:
1. "Trusted" — "The backbone of the internet's most popular platforms, proven 
   at scale across 100+ languages..."
2. "Safe" — "Powered by the industry's richest real-world intelligence dataset..."
3. "Secured" — "Protecting and fortifying GenAI applications, agents, and 
   models against evolving exploit techniques..."

Below the cards: Two certification badges side by side:
- SOC 2: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98b04bec8784dd14987_soc2.svg
- ISO 27001: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98bca642f01e8b7e47b_iso.svg

---

## SECTION 11 — BLOG / NEWS GRID

H2: "What's New from Alice"
Label above: "Safe. Honest. Kind."

4-card grid. Each card has: content type badge (blog/podcast/webinar/whitepaper), 
date, title, short description, and "Learn More" link.

Card 1 (blog):
  Date: May 13, 2026 · 3 min read
  Title: "Introducing Guardrails Trained for Your Policies"
  Body: "Generic guardrails weren't built for your policies. WonderFence trains 
  a custom detector for each one..."

Card 2 (podcast):
  Date: May 4, 2026
  Title: "What Does It Actually Take to Build Unbiased AI?"
  Body: "Nobody told Tennisha Martin the importance of having a mentor, so she 
  built a community of tens of thousands instead..."

Card 3 (webinar):
  Date: Sep 25, 2025
  Title: "Distilling LLMs into Efficient Transformers for Real-World AI"
  Body: "This technical webinar explores how we distilled the world knowledge 
  of a large language model into a compact transformer..."

Card 4 (whitepaper):
  Date: Apr 27, 2026
  Title: "Building AI Applications in Financial Services"
  Body: "A practical guide to building safe, compliant AI applications in 
  financial services..."

---

## SECTION 12 — EXPLAINER MODAL / SLIDE-IN PANEL

There are two modal-style panels triggered by links in the site:

Panel A — "Communicative Tech" explainer (triggered from footer link):
  Title: "Communicative Tech - Advance Unafraid"
  Subtitle: (same as title)
  Body: Full paragraph about Communicative Technology definition and Alice's role.
  CTA: "Get a Demo"
  Close button (X) top right.

Panel B — "ActiveFence is now Alice" announcement bar:
  Small banner at top of page (dismissable).
  Text: "ActiveFence is now Alice"
  Has a small image/thumbnail:
  https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69660019dcdea4a2dc1c0e84_explainer.avif

---

## FOOTER

Dark background, multi-column layout.

Left: Alice logo SVG + social icons (LinkedIn, X/Twitter, YouTube, Medium, Spotify)

5 nav columns:
1. Products: Platform Overview, WonderBuild, WonderFence, WonderCheck, Intelligence
2. Solutions: Foundation Model, Gen AI Apps & Agents, ActiveFence - UGC
3. Where We Operate: Customers, Ecosystem
4. Resources: Perspectives Blog, Engineering Blog, Intelligence Blog, Learning, 
   Technical Docs, Glossary, AI Skills Scanner, Podcast
5. Company: About, Newsroom, Ecosystem, Careers

Bottom bar:
  "©2026 ActiveFence"
  Links: Privacy Policy | Accessibility Statement | CPRA | Terms of Use | 
         Cookie Policy | LLM Reference

---

## ANIMATIONS & INTERACTIONS

1. Navbar: blur + dark background on scroll, transparent at top
2. Hero: animated glowing blob (CSS keyframes, radial gradient shift)
3. Logo marquee: infinite scroll left, `animation: marquee 30s linear infinite`
4. Stats: count-up animation using IntersectionObserver on scroll
5. WonderSuite tabs: smooth image crossfade (opacity transition 300ms)
6. Testimonials: auto-advance carousel every 5s with dot indicators
7. Video thumbnail: hover shows play button glow; click opens Vimeo modal (black overlay)
8. Cards: subtle scale(1.02) + border glow on hover
9. All section entrances: fade-in + translateY(20px) → translateY(0) on scroll 
   using IntersectionObserver
10. CTA buttons: gradient shimmer or glow pulse on hover

---

## IMPLEMENTATION NOTES

- Use React functional components + Tailwind CSS
- All images via <img> tags with the CDN URLs provided above
- Fonts: Import Inter from Google Fonts
- Do NOT use any third-party animation libraries — pure CSS keyframes + 
  Tailwind transitions only
- Ensure full mobile responsiveness (hamburger menu on mobile, stack all grids)
- Use `overflow-hidden` on marquee container to prevent horizontal scroll
- The page should feel premium, dark, and futuristic — not generic SaaS blue