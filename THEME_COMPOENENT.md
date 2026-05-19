Build a pixel-perfect clone of the Alice.io homepage (formerly ActiveFence).
Use React + Tailwind CSS + inline styles where Tailwind can't replicate exact values.
ALL design tokens, colors, fonts, and component specs below are extracted 
directly from the site's production stylesheet.

---

## DESIGN SYSTEM — CSS VARIABLES (apply globally via :root)

### Color Palette
--beige: #f6f0e9         /* Primary background */
--bg-black: #1e1e1e      /* Secondary background */
--blue-black: #03041d    /* Dark background sections */
--black: #0d0d0d
--white: #ffffff
--bright-grey: #f7f5f1
--light-grey: #f0ebe3
--medium-grey: #bdbbb8
--dark-grey: #6e6d6b
--medium-pink: #b6276b   /* PRIMARY ACCENT */
--pink: #e686b4          /* Button accent */
--green: #9fd2da
--green2: #8ad6cb
--medium-green: #108496  /* CTA button background */
--yellow: #ffd57a
--medium-yellow: #de972d
--blue: #7ec6f2
--medium-blue: #339dde
--brown: #362c2c         /* Top bar background */

### Semantic Tokens
--backgrounds--primary: var(--beige)
--backgrounds--secondary: var(--bg-black)
--backgrounds--blue-black: var(--blue-black)
--backgrounds--pink: var(--pink)
--backgrounds--light-grey: var(--light-grey)
--backgrounds--medium-yellow: var(--medium-yellow)
--backgrounds--tertiary: var(--yellow)
--texts-on-light--primary: var(--black)
--texts-on-light--secondary: var(--dark-grey)
--texts-on-light--links: var(--medium-green)
--texts-on-dark--primary: var(--medium-grey)
--texts-on-dark--secondary: var(--bright-grey)
--texts-on-dark--tertiary: var(--white)
--borders--primary: var(--black)
--borders--secondary: var(--dark-grey)
--borders--tertiary: var(--medium-grey)
--shadows--black: var(--black)
--shadows--dark-pink: var(--medium-pink)
--shadows--green: var(--green)

---

## TYPOGRAPHY SYSTEM

### Font Families
- Headings (h1, h2, h3): "Romie", "Times New Roman", sans-serif (serif, italic feel)
- Body text: "Haas Text", Arial, sans-serif
- Monospace labels / h4 / h5 / h6: "Haas Text Mono", Arial, sans-serif
- Buttons / nav links: "Haas Display", Arial, sans-serif

Import via Google Fonts approximation:
- Use "Playfair Display" as Romie fallback (italic serif)
- Use "Inter" as Haas Text fallback
- Use "Space Mono" as Haas Text Mono fallback
- Use "Inter" as Haas Display fallback

### Type Scale (Desktop)
H1: font-size 3.9375rem | line-height 1.15em | letter-spacing -0.02em | weight 400
H2: font-size 2.8125rem | line-height 1.15em | letter-spacing -0.02em | weight 400
H3: font-size 1.40625rem | line-height 1.15em | letter-spacing -0.02em | weight 500 | italic
H4: font-size 1.40625rem | line-height 1.15em | letter-spacing 0.03em | weight 400 | Haas Text Mono
H5: font-size 0.875rem  | line-height 1.3em  | letter-spacing 0.045em | weight 500 | Haas Text Mono
H6: font-size 0.875rem  | line-height 1.1em  | letter-spacing 0.9em   | weight 700

Body: font-size 1rem | line-height 1.35em | letter-spacing 0.05em
Body XSmall: 0.65rem
Body Medium: 2.1875rem  (large display text)
Body Large: 3.375rem    (hero display numbers)

### Type Scale (Tablet ≤991px)
H1: 3.5rem
H2: 2.8125rem

### Type Scale (Mobile ≤767px)
H1: 2.5rem | line-height 1.25em | letter-spacing -0.03em
H2: 2.25rem | line-height 1.25em | letter-spacing -0.02em
body: line-height 1.4em | letter-spacing 0.01em

### Type Scale (Mobile Portrait ≤479px)
H1: 2.5rem | line-height 1.15em
H2: 2rem | line-height 1.15em
body: letter-spacing 0.05em

---

## GLOBAL LAYOUT

body: background-color #f6f0e9 (beige), overflow: clip
.container-large: max-width 85.5rem, display block
.container-small: max-width 55.5rem, margin auto
.padding-global: padding 0 2.5rem (mobile: 0 1.25rem)
.padding-section-large: padding 10rem 0 (tablet: 6rem, mobile: 4rem)
.padding-section-medium: padding 5rem 0 (tablet: 4rem, mobile: 3rem)
.padding-section-small: padding 2rem 0

---

## COMPONENT 0 — TOP BAR ANNOUNCEMENT

Background: #362c2c (brown)
Font: Haas Text Mono, 0.875rem, letter-spacing 0.045em
Color: #f6f0e9 (beige)
Padding: 0.6rem top/bottom
Layout: flex, justify-center, align-center

Inside: A dark-pink pill badge styled as:
  border: 0.03125rem solid #0d0d0d
  background: #b6276b (medium-pink)
  box-shadow: 3px 3px 0 0 #0d0d0d
  text-transform: uppercase
  padding: 0.28125rem
  border-radius: 0.1875rem
Text content: "ActiveFence is now Alice"

---

## COMPONENT 1 — STICKY NAVIGATION

Position: sticky top-0, z-index 1001
Background: #f6f0e9 (beige)
Border-bottom: 0.03125rem solid #bdbbb8
Padding: 0.75rem 2.5rem

Inner container: flex, justify-between, align-center
max-width: 85.5rem, margin auto

### Logo
Width: 5.5rem, height: 2.5rem
Use SVG from:
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/6935051c71a7628e57908360_fixed-icon.svg

### Nav Links (center)
Font: "Haas Display", 0.875rem, letter-spacing 0.045em, weight 400
Color: #0d0d0d
Gap between items: 0.9rem
Padding per link: 0.5rem
Border-bottom: 0.5px solid transparent
Hover: font-variation-settings "wght" 500, border-bottom-color currentColor
Transition: all 0.5s

Dropdown toggle: same font, flex row, gap 0.25rem
Dropdown list (open state):
  border: 0.03125rem solid #0d0d0d
  background: #f6f0e9
  min-width: 15rem, max-width: 15rem
  box-shadow: 3px 3px 0 0 #0d0d0d
  flex column, overflow visible

Dropdown link:
  padding: 0.75rem 1rem
  border-bottom: 1px solid #bdbbb8 (last: none)
  font: Haas Display, text-decoration none
  display flex, gap 0.5rem, align-center

Nav items: Products | Solutions | Intelligence | Where We Operate | Resources | Company

### CTA Button "Get a Demo"
Font: Haas Display, 0.875rem, letter-spacing 0.09em
Background: #108496 (medium-green)
Color: #f7f5f1 (bright-grey)
Border: 0.03125rem solid #0d0d0d
Box-shadow: 3px 3px 0 0 #0d0d0d
Padding: 0.5rem 3.375rem
Min-width: 240px, max-width: 7rem (nav variant)
Hover: background #0d6a78, box-shadow 1px 1px 0 0 #0d0d0d
Transition: all 0.3s
No border-radius (square corners)

---

## COMPONENT 2 — HERO SECTION

Background: #f6f0e9 (beige)
Overflow: hidden
Padding: uses padding-section-medium

### Eyebrow label
Font: Haas Text Mono, 0.875rem, letter-spacing 0.045em, uppercase, weight 500
Text: "INNOVATE UNAFRAID"
Centered

### H1
Font: Romie (Playfair Display italic), 3.9375rem (desktop)
Color: #0d0d0d
Letter-spacing: -0.02em, line-height: 1.15em, weight 400
Text: "Security, Safety, and Trust
for the AI Era"
Text-align: center

### CTA Button (same as nav CTA above)
Centered below H1

### Hero Image
z-index: -1
Width: 100%
Aspect-ratio: 2880/820
Object-fit: cover
Margin-top: -10rem (overlap effect with text above)
Margin-bottom: -3.25rem
Position: relative, bottom: -1rem
Image: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69dcf9a5a1cf6d78c7a68fb8_alice-hero-first-frame.avif

---

## COMPONENT 3 — LOGO STRIP (Trust Bar)

Background: #f0ebe3 (light-grey)
Border-bottom: 0.03125rem solid #bdbbb8
Overflow: hidden

### Heading row
Border-bottom: 0.03125rem solid #bdbbb8
Padding: 1rem
Text-align: center
Font: body default (Haas Text, 1rem)
Text: "Trusted by the world's biggest enterprises & foundation model labs"

### Marquee strip
Padding: 1.5rem 0
display: flex, align-center
mask-image: linear-gradient(90deg, transparent, #f6f0e9 200px calc(100% - 200px), transparent)
(mobile mask: 40px instead of 200px)

### Marquee animation (CSS keyframes)
@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
animation: marquee 30s linear infinite
Two identical sets of logos in a flex row for seamless loop

### Logo wrapper
display: flex, flex-direction: row, flex: none, align-center
gap: 4rem between logos, padding-right: 4rem on collection

### Logo images
height: 2.875rem, width: auto
color: #6e6d6b (dark-grey)
filter on hover: brightness(0%)
transition: filter 0.2s

Logo SVG URLs (use <img> tags directly):
TikTok: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d3915a8fee2297cb1f0_tiktok.svg
Lovable: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d313bad9acfe2dff740_lovable.svg
AWS: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d29171f608da106750d_aws.svg
Deliveroo: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d210bb376e0e03c7ab0_deliveroo.svg
NVIDIA: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d1abc4d38f815b901f1_nvidia.svg
Niantic: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d10149f8ffd1cbb1ca0_niantic.svg
Cohere: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d09a62c04a206d2f41b_cohere.svg
Amazon: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661d000389257618444175_amazon.svg
Black Forest Labs: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cfbbdf5facd56e556ae_black-forest-labs.svg
Udemy: https://cdn.prod.website-files.com/690342d0de7772098a5575f1/69661cece69d55e0d39c5a77_udemy.svg

---

## COMPONENT 4 — WONDERSUITE TABS SECTION

Background: #f6f0e9
Padding: padding-section-medium

### Section heading
Eyebrow: "Introducing" (Haas Text Mono, 0.875rem, uppercase, letter-spacing 0.045em)
H2: "WonderSuite" (Romie, 2.8125rem, letter-spacing -0.02em)
Sub-H2: "Security Platform for Enterprise AI — Test, Protect, and Monitor AI Apps & Agents"
Link: "Platform Overview →" color: #108496

### Tabs layout
margin-top: 2.25rem
display: flex, flex-direction: row
Left column (tabs menu): max-width 33%, flex column

Each tab link:
  padding: 1rem 1.75rem 1rem 0
  border-bottom: 0.03125rem solid #bdbbb8
  opacity: 0.3 (inactive)
  opacity: 1 (active)
  transition: opacity
  background: transparent
  flex column, gap 1rem
  Last tab: no border-bottom

Active indicator: a 2px-tall progress bar at bottom of active tab
  background: #1e1e1e, border-radius 2px right side
  position absolute, bottom -1px
  Animate from 0% to 100% width over 5s

Tab heading:
  Font: Haas Text Mono, 0.875rem, uppercase, letter-spacing 0.045em, weight 500
  Display: flex, align-center, gap 0.75rem

Right column (tab content): full width, flex-start align-self

Tab image:
  aspect-ratio: 15.7/9
  border: 1px solid #bdbbb8
  object-fit: contain
  width: 100%
  Crossfade transition: opacity 300ms ease

Tab data:
Tab 1 — WonderBuild | "Pre-Launch Stress-Testing" | "Prepare your AI models, apps, and agents for responsible, resilient, confident deployment" | https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fea74eadfbe5277d319_WB.jpg
Tab 2 — WonderFence | "Dynamic Runtime Guardrails" | "Keep live apps and agents safe, secure, and aligned with your policies and brand" | https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb92b707dbee5a94e0b14f_WFINAL.jpg
Tab 3 — WonderCheck | "Ongoing Automated Red-Teaming" | "Evaluation for production AI systems to detect drift, surface emerging risks, and prioritize remediation" | https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/69fb8fa225b537b4e5eb703e_WC_10.jpg

---

## COMPONENT 5 — STATS SECTION

Background: #f6f0e9
H2 intro: "Safeguarding more than 50% of the world's online experiences"
Font: Romie, 2.8125rem, italic, centered

Stats grid: 2×2 grid (grid-template-columns: 1fr 1fr)
(mobile: single column)

Each stat item:
  display: flex, flex-direction column, align-center, justify-center
  background: #9fd2da (green)
  border: 0.03125rem solid #0d0d0d
  box-shadow: 3px 3px 0 0 #0d0d0d
  padding: 1rem 2rem
  text-align: center
  gap: 1rem
  Hover: background #8ad6cb, box-shadow 1px 1px 0 0 #0d0d0d
  transition: box-shadow 0.2s

Stat number: font-size 3.375rem (body-large), font Romie, italic
Stat label: Haas Text Mono, 0.875rem, uppercase

Data:
  3B+ | Users
  120+ | Languages
  1B+ | Daily AI-Human interactions
  (4th cell optional or use for CTA)

---

## COMPONENT 6 — TESTIMONIALS SLIDER

Section: perspective 10000px, position relative
Padding: 6rem 0

Background images (layered SVG decorations behind quotes):
  Middle: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4328dc47fb8108837_82cf7d7d0d47934de81015a25868dd9b_middle.svg
  Front: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff4334c013e46320b38_09fe41fa7b20fe7ce83ba0879367c84c_front.svg
  Rare: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695fcff45bee8a26c6bd6d3d_e1166c82f455d41a0e2aec102825fbd1_rare.svg
  Each is position:absolute, inset 0%, width 100%, z-index 1

### Slider wrapper
  background: transparent
  max-width: 60vw
  margin: auto

### Slider mask
  border-top: 0.03125rem solid #bdbbb8
  border-bottom: 0.03125rem solid #bdbbb8

### Each slide inner
  display: flex, flex-direction column, align-center
  gap: 1.75rem
  padding: 1.75rem 0
  margin-top: 1.5rem
  text-align: center

### Quote text
  font: Romie, 2.25rem, italic, line-height 1.25em
  (tablet: 1.875rem, mobile: 1.5rem, 479px: 1.5rem)

### Attribution
  font: Haas Text, 0.875rem

### Slider nav dots
  justify: center, align center
  height: 2rem, margin-top 1.75rem
  position: static

### Arrow buttons
  position: absolute, bottom: 0, left: 40% (right arrow: right 40%)
  width: 2rem, height: 2rem
  hover: opacity 0.6
  transition: opacity 0.3s

Quote data:
1. "Alice has significantly impacted our iteration speed and confidence in our evaluations and mitigations..." — Seraphina Goldfarb-Tarrant, Head of AI Safety | Cohere
2. "Alice has been a great partner to work with & I look forward to delivering next editions of Nova models..." — Rahul Gupta, Senior Manager, Responsible AI | Amazon AGI
3. "Alice is the only vendor I've seen that does this type of extremely high quality safety work..." — Head of Safety, Leading LLM

Auto-advance every 5s. Show dot indicators.

---

## COMPONENT 7 — DIFFERENTIATORS (3-column grid)

Background: #f6f0e9

Intro paragraph (italic, large, centered):
"From UGC to GenAI and humanoid robots, Alice allows you and your users to advance unafraid."

Background SVG line art:
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f43cae38bdbbb595b81bf_046dafd558a2582a42a7c0d3cda1dff8_acountable_bg-line.svg

Grid: grid-template-columns: 1fr 1fr 1fr
margin-top: 2.25rem

Each card:
  padding: 1.6875rem (paddings--medium)
  border-style: solid
  border-width: 0.5px 0.5px 0.03125rem (thinner top/side, thicker bottom)
  border-color: #6e6d6b (secondary borders)
  background: #f6f0e9
  flex column, gap 1.125rem
  margin-left: -0.5px (overlap for seamless borders)
  Hover: z-index 1
  stroke-shadow hover: background #ffffff, box-shadow 6px 9px 0 0 #0d0d0d
  transition: all 0.3s

Card title: Haas Text Mono or heading-style-h4
Card body: body text, color #6e6d6b

3 cards:
1. "Epic, Real-World Adversarial Intelligence"
   "Our solutions outperform industry benchmarks because they're powered by data drawn from a decade of real-world adversarial research, enabling you to act before abuse becomes news."
2. "The Rabbit Hole Data Moat"
   "With billions of continually updated toxic examples, we train sharper classifiers and fuel stronger red-teaming, giving you unmatched accuracy and coverage."
3. "Adaptive, Customizable Policy Alignment"
   "Keep your policies front and center, tuning coverage to your regulatory needs and risk tolerance — across every modality, so each interaction stays trusted and aligned."

---

## COMPONENT 8 — PROBLEM STATEMENT (ACCOUNTABLE SECTION)

Background: #03041d (blue-black)
z-index: 1
margin-top: -0.25rem
overflow: hidden
Color: white (#ffffff)

Top background SVG (decorative wavy line transition):
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/695f43cae38bdbbb595b81bf_046dafd558a2582a42a7c0d3cda1dff8_acountable_bg-line.svg
width: 100%, position relative, height: 6.75rem, margin-top: -3.5rem, z-index 1

Eyebrow (small, gray, centered):
"The internet is a wonderful place. Mostly."

H2 (large, white, centered):
"Wherever people and technology meet, powerful tools can be manipulated to do harmful things. And you're held accountable."

4-column grid:
grid-template-columns: 1fr 1fr 1fr 1fr
margin-top: 3.375rem (heading-content-large)
(tablet: 2-col, mobile: 1-col)

Each card (on-blue-dark variant):
  border: 0.03125rem solid #bdbbb8 (tertiary)
  background: transparent
  hover: box-shadow none
  padding: 1.6875rem
  color: white
  Hover: z-index 1

4 problem cards:
1. "Unintended GenAI Behavior" — GenAI can produce harmful or misleading content at a scale traditional security and safety controls can't reliably manage.
2. "Application-Level Exploitation" — Prompt injection, jailbreaks, and model exploits expose applications, agents, and integrations to data leakage or abuse.
3. "Governance and Compliance Gaps" — Abusive, harmful, or non-compliant interactions undermine security and safety policy enforcement and responsible AI governance.
4. "Reputational and Trust Exposure" — A single failure can trigger legal liability, regulatory scrutiny, stalled innovation momentum, and lasting damage to brand trust.

CTA link at bottom (centered, margin-top: 3.375rem):
"Step into GenAI Wonderland →"

---

## COMPONENT 9 — VIDEO DEMO

Background: #03041d continuing or beige section

Video thumbnail:
https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/696672852c03c4c72a9bcbf6_Demo%20Video%20Thumbnail.avif

Play button (centered overlay):
  border: 1px solid #0d0d0d
  background: #f6f0e9 (primary)
  width: 4.375rem, height: 4.375rem
  box-shadow: 2px 2px 0 0 #0d0d0d
  color: #e686b4 (pink)
  border-radius: 50%
  padding: 0.5rem
  position: absolute, top 50%, left 50%, transform translate(-50%, -50%)
  Hover: box-shadow 0 0 0 0 #0d0d0d
  transition: box-shadow 0.3s
  Inner ring: border 1px solid #0d0d0d, border-radius 50%
  Inner shadow: box-shadow inset 3px 3px 0 0 #0d0d0d
  Video: Vimeo modal on click
  Vimeo URL: https://player.vimeo.com/video/1153867982

Large text below (centered):
"If you've talked online with a friend, colleague, or chatbot in the last hour, Alice likely protected you."
Font: Romie italic, ~2.8125rem

---

## COMPONENT 10 — RABBIT HOLE (INTELLIGENCE ENGINE)

Eyebrow: "PROTECTING 3B+ PEOPLE ONLINE"
H2: "Powered by the world's most comprehensive adversarial intelligence engine — Rabbit Hole"
Two paragraphs of body text.
Two CTAs: "Navigate GenAI Wonderland" (green button) + "Learn More →" (text link, color #108496)

Section background: dark (blue-black)
Text: white/bright-grey

---

## COMPONENT 11 — TRUST PILLARS

H2: "Proven peace of mind"

Peace component:
  border-top: 0.03125rem solid #bdbbb8
  border-bottom: 0.03125rem solid #bdbbb8
  padding: 2.25rem 0

3-column grid, same card style as differentiators.
Cards: "Trusted" | "Safe" | "Secured"

Certifications section:
  margin-top: 3.375rem
  flex column, align center, gap 1.75rem

Cert icon wrapper: flex, gap 1.5rem, justify-center

Each cert icon:
  aspect-ratio: 1, object-fit cover, width: 6rem

SOC 2: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98b04bec8784dd14987_soc2.svg
ISO 27001: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/690dd98bca642f01e8b7e47b_iso.svg

Cert label: Haas Text Mono, 0.875rem, uppercase, letter-spacing 0.9em

---

## COMPONENT 12 — NEWS/BLOG GRID

Eyebrow: "Safe. Honest. Kind."
H2: "What's New from Alice"

News cards wrapper:
  flex column, gap 3.375rem

News cards grid:
  border: 0.03125rem solid #bdbbb8
  background: #bdbbb8 (medium-grey — acts as grid gap color)
  grid-template-columns: 1fr 1fr 1fr (tablet: 1fr 1fr, mobile: 1fr)
  padding-left: 1px

Each card top:
  box-shadow: 3px 3px 0 0 #0d0d0d
  border: 0.5px solid #0d0d0d
  flex column, gap 1.125rem
  padding: 1.125rem 1.5625rem 1.375rem

Tag (content type badge):
  background: #ffd57a (yellow = blog)
  background: #8ad6cb (mint = podcast)
  background: #108496 + color white (green = webinar)
  background: #e686b4 (pink = whitepaper)
  font: Haas Text Mono, 0.875rem, uppercase, letter-spacing 0.045em
  border-radius: 0.1875rem
  padding: 0.375rem
  display: inline-flex

Card title: font-size 2rem, line-height 1.21em
Date: Haas Text Mono, 0.875rem, color #6e6d6b, weight 500
Body text: body default

"Learn More" link: color #108496, font-weight 600

4 cards:
1. [blog/yellow] May 13, 2026 · 3 min read — "Introducing Guardrails Trained for Your Policies"
2. [podcast/mint] May 4, 2026 — "What Does It Actually Take to Build Unbiased AI?"
3. [webinar/green] Sep 25, 2025 — "Distilling LLMs into Efficient Transformers for Real-World AI"
4. [whitepaper/pink] Apr 27, 2026 — "Building AI Applications in Financial Services"

---

## COMPONENT 13 — ADVANTAGE / CTA BANNER

Pink CTA band:
  border: 0.03125rem solid #0d0d0d
  background: #e686b4 (pink)
  box-shadow: 6px 9px 0 0 #0d0d0d
  background-image: SVG decorations (right + left corners)
  grid-template-columns: 1.125fr 0.875fr
  padding: 0 2rem
  position: relative

Left side: heading + body + CTA button
Right side: illustration/image

---

## COMPONENT 14 — FOOTER

Background: #f6f0e9
Overflow: hidden

Footer Lottie animation (decorative wave at top of footer):
  width: 100%, margin-top: -4rem
  pointer-events: none
  position relative, bottom: -0.5rem

### Main footer grid
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr
  gap: 1.75rem
  font-size: 0.875rem
  (tablet: 1.5fr 1fr)

### First column (brand)
  border-top: none
  padding-top: 0
  gap: 1rem

  Logo: width 12.75rem, height 3.25rem
  SVG: https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/6935051c71a7628e57908360_fixed-icon.svg

  Social section:
    border-top: 0.5px solid #bdbbb8
    padding-top: 1rem
    flex column, gap 1rem

  Social links row: gap 0.75rem

  Each social icon:
    border: 1px solid #bdbbb8
    background: #f0ebe3 (light-grey)
    width: 1.75rem, height: 1.75rem
    cursor pointer
    justify-center, align-center
    transition: all 0.3s
    Hover: background #1e1e1e, color #f6f0e9

  Social icons for: LinkedIn | X/Twitter | YouTube | Medium | Spotify

### Nav columns (columns 2-6)
  Each column:
    border-top: 0.5px solid #bdbbb8
    padding-top: 1rem
    flex column, gap 0.75rem

  Column heading: Haas Text Mono, 0.875rem, uppercase, letter-spacing 0.045em, weight 500

  Footer links:
    color: #6e6d6b (dark-grey)
    text-decoration: none
    transition: color 0.3s
    Hover: color #0d0d0d

  Columns:
    Products: Platform Overview | WonderBuild | WonderFence | WonderCheck | Intelligence
    Solutions: Foundation Model | Gen AI Apps & Agents | ActiveFence - UGC
    Where We Operate: Customers | Ecosystem
    Resources: Perspectives Blog | Engineering Blog | Intelligence Blog | Learning | Technical Docs | Glossary | AI Skills Scanner | Podcast
    Company: About | Newsroom | Ecosystem | Careers

### Footer bottom bar
  border-top: 1px solid #bdbbb8
  justify-content: space-between
  align-items: center
  margin-top: 1rem
  padding-top: 1.75rem
  display: flex
  (tablet: flex-column, gap 1.5rem)

  Left: "©2026 ActiveFence"
  Right: "Privacy Policy | Accessibility Statement | CPRA | Terms of Use | Cookie Policy | LLM Reference"
  Both: font 0.875rem, color #6e6d6b

---

## FIXED BUTTON (bottom-right floating CTA)

Position: fixed, bottom 2.5rem, right 2.5rem, z-index 10
Width: 11rem, height: 11rem (mobile: 8rem × 8rem)
Border: 0.03125rem solid #0d0d0d
Background: #f6f0e9
Border-radius: 50%
box-shadow: 3px 3px 0 0 #0d0d0d
font: Romie, italic, letter-spacing -0.02em, weight 500
text-align: center
transform: rotate(10deg)
Hover: box-shadow 1px 1px 0 0 #0d0d0d
transition: box-shadow 0.3s
Inner icon: width 5rem (mobile: 4rem)
Text: "Get a Demo" (in italic serif, styled as a circular stamp)

---

## MODALS

### Video Modal (Vimeo)
Overlay: position fixed, inset 0, background #1e1e1e at 45% opacity
Content wrapper:
  border: 0.03125rem solid #0d0d0d
  background: #f6f0e9
  max-width: 52rem, width 100%
  box-shadow: 6px 9px 0 0 #0d0d0d
  padding: 3.625rem 2rem 2rem
  position relative

Close button:
  border: 0.03125rem solid #0d0d0d
  background: #b6276b (dark-pink)
  width: 1.75rem, height: 1.75rem
  box-shadow: 3px 3px 0 0 #0d0d0d
  color: white
  position absolute, top: -2.5rem, right: 0
  Hover: box-shadow 1px 1px 0 0 #0d0d0d
  transition: all 0.3s

Video iframe:
  aspect-ratio: 16/9, width: 100%
  Vimeo: https://player.vimeo.com/video/1153867982

---

## ANIMATIONS (pure CSS + IntersectionObserver)

1. Nav background: starts transparent on scroll top, adds background + border on scroll
2. Marquee: `@keyframes marquee { from: translateX(0) to: translateX(-50%) }` 30s linear infinite
3. Tab progress bar: `@keyframes progress { from: width 0% to: width 100% }` 5s linear
4. Stats count-up: IntersectionObserver triggers JS counter from 0 to final value
5. Tab image crossfade: opacity transition 300ms ease
6. Testimonials: setInterval 5000ms, manual arrow click
7. Card hover: scale(1.02) only on stroke-shadow variant, box-shadow shift
8. Section entry: IntersectionObserver → opacity 0→1 + translateY(20px)→(0), duration 600ms ease
9. Fixed button: rotate(10deg) permanent, box-shadow collapse on hover

---

## RESPONSIVE BREAKPOINTS

≥1920px: container max-width increases, some column rearrangements
≤991px (tablet): nav collapses to hamburger, 2-col grids → 1-col, testimonial slider wider
≤767px (mobile): font sizes shrink, padding reduces to 1.25rem, marquee mask narrows to 40px
≤479px (portrait): hero image stretches 300% translateX(-45%), stats go 1-col, fixed button shrinks

---

## IMPLEMENTATION REQUIREMENTS

- React functional components with useState, useEffect, useRef, useIntersectionObserver
- All CSS custom properties in a global <style> tag or CSS module
- All images via <img> tags using CDN URLs above — no placeholders
- No third-party animation libs — only CSS keyframes + JS timers
- Tailwind for layout, inline styles for exact CSS variable values
- Smooth scroll behavior on <html>
- Accessible: aria-labels on buttons, alt text on all images
- Mobile-first CSS, override at breakpoints above