import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  Layers3,
  Menu,
  Palette,
  Send,
  ShieldCheck,
  Shirt,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import logoAsset from "@/assets/kannadi-logo.jpeg.asset.json";
import heroImage from "@/assets/kannadi-hero.jpg";
import corporateImage from "@/assets/kannadi-corporate.jpg";
import sportsImage from "@/assets/kannadi-sports-events.jpg";
import craftImage from "@/assets/kannadi-craft.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KANNADI | Custom T-Shirt Manufacturer in Bangalore" },
      {
        name: "description",
        content:
          "KANNADI creates customized corporate, promotional, event, school, college, sports and branded T-shirts in Bangalore.",
      },
      { property: "og:title", content: "KANNADI | Customized T-Shirts in Bangalore" },
      {
        property: "og:description",
        content: "Your idea. Your design. Your T-shirt. Professional custom apparel for teams, institutions, events and brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { title: "Corporate T-Shirts", text: "Professional branded T-shirts for employees, events, conferences and team activities.", icon: Building2 },
  { title: "Event & Promotional", text: "Memorable apparel for campaigns, launches, exhibitions, festivals and celebrations.", icon: Sparkles },
  { title: "School & College", text: "Custom T-shirts for annual days, fests, clubs, departments, sports and student groups.", icon: GraduationCap },
  { title: "Sports & Team", text: "Team colours, player names, numbers, sponsor logos and tournament designs.", icon: Trophy },
  { title: "Employee Uniforms", text: "A consistent, brand-aligned look for sales, retail, delivery, field and service teams.", icon: Users },
  { title: "Merchandise & Brands", text: "Wearable merchandise for startups, creators, communities, campaigns and retail.", icon: Shirt },
];

const styles = [
  ["Round Neck", "A versatile choice for events, promotions, teams and everyday use."],
  ["Polo T-Shirt", "A smart option for corporate, hospitality, retail and service teams."],
  ["V-Neck", "A contemporary alternative for customized team and corporate apparel."],
  ["Sports T-Shirt", "Designed for teams, tournaments, fitness and training programs."],
];

const completeRange = [
  "Company T-Shirts",
  "Promotional T-Shirts",
  "Event T-Shirts",
  "School T-Shirts",
  "College T-Shirts",
  "Sports T-Shirts",
  "Team T-Shirts",
  "Custom Polo T-Shirts",
  "Round-Neck T-Shirts",
  "V-Neck T-Shirts",
  "Branded Merchandise",
  "Startup & Brand T-Shirts",
  "Campaign T-Shirts",
  "Festival T-Shirts",
  "Personalized T-Shirts",
  "Bulk Customized T-Shirts",
];

const process = [
  ["Share your requirement", "Tell us the purpose, quantity, style, sizes and colours."],
  ["Share your design", "Send your logo, artwork, reference image or concept."],
  ["Finalize specifications", "Select the fabric, branding and customization details."],
  ["Production", "Approved specifications move into production."],
  ["Quality check", "We check customization and overall finishing."],
  ["Delivery", "Your order is prepared and delivered as agreed."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="KANNADI home">
      <img src={logoAsset.url} alt="KANNADI logo" className={compact ? "h-12 w-12 rounded-full object-cover" : "h-14 w-14 rounded-full object-cover"} />
      <div className="leading-none">
        <span className="font-display text-xl font-bold tracking-[0.12em] text-foreground">KANNADI</span>
        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">Custom Apparel</span>
      </div>
    </a>
  );
}

function SectionTitle({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className={`mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl ${light ? "text-ivory" : "text-foreground"}`}>{title}</h2>
      {intro && <p className={`mx-auto mt-5 max-w-xl leading-7 ${light ? "text-ivory/70" : "text-muted-foreground"}`}>{intro}</p>}
      <div className="gold-rule mx-auto mt-7 h-px w-36" />
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = [["About", "#about"], ["Products", "#products"], ["Customize", "#customize"], ["Process", "#process"]];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className={`fixed inset-x-0 top-0 z-50 border-b text-ivory backdrop-blur-xl transition-all duration-300 ${scrolled || menuOpen ? "border-ivory/10 bg-charcoal/95 shadow-lg" : "border-transparent bg-charcoal/55"}`}>
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8">
          <div className="min-w-0 [&_span:first-of-type]:text-ivory"><Logo compact /></div>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-ivory/75 transition-colors hover:text-primary">{label}</a>)}
            <Button variant="gold" size="lg" asChild><a href="#contact">Get a Quote <ArrowRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="text-ivory hover:bg-ivory/10 hover:text-primary lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && <nav className="border-t border-ivory/10 bg-charcoal px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-ivory/10 py-3 text-sm text-ivory/80">{label}</a>)}
            <Button variant="gold" className="mt-4" asChild><a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote</a></Button>
          </div>
        </nav>}
      </header>

      <main>
        <section id="home" className="relative min-h-[780px] overflow-hidden bg-charcoal pt-20 text-ivory">
          <img src={heroImage} alt="A team wearing premium customized KANNADI-style apparel" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--charcoal)_0%,color-mix(in_oklab,var(--charcoal)_92%,transparent)_38%,color-mix(in_oklab,var(--charcoal)_28%,transparent)_72%,color-mix(in_oklab,var(--charcoal)_55%,transparent)_100%)]" />
          <div className="heritage-pattern absolute inset-y-0 left-0 w-1/2 opacity-30" />
          <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-20 sm:px-8">
            <div className="reveal max-w-2xl">
              <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-primary" /><span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Custom T-Shirt Manufacturer in Bangalore</span></div>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">Customized T-Shirts That Make Your <span className="text-primary">Brand Stand Out.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-ivory/75 sm:text-lg">Bring your ideas to life with KANNADI—your trusted partner for high-quality custom T-shirts for businesses, institutions, events, teams and brands.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" asChild><a href="#contact">Get a Quote <ArrowRight /></a></Button>
                <Button variant="heroOutline" size="lg" asChild><a href="#products">Explore Products</a></Button>
              </div>
              <p className="mt-10 font-display text-xl italic text-ivory/65">Your design. Your brand. Your T-shirt.</p>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-primary/50" />
        </section>

        <section id="about" className="bg-background py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <img src={craftImage} alt="Quality inspection of a customized polo T-shirt" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-lg object-cover shadow-premium" />
              <div className="absolute -bottom-6 -right-3 max-w-52 rounded-md border border-primary/40 bg-charcoal p-5 text-ivory shadow-premium sm:-right-6">
                <ShieldCheck className="mb-3 text-primary" />
                <p className="font-display text-xl leading-tight">Creative ideas. Professional quality.</p>
              </div>
            </div>
            <div className="lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">About KANNADI</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">Apparel designed around your identity.</h2>
              <p className="mt-6 leading-8 text-muted-foreground">KANNADI helps businesses, organizations, institutions, teams and individuals bring their ideas to life through professionally customized T-shirts and apparel.</p>
              <p className="mt-4 leading-8 text-muted-foreground">From a simple logo to a complete custom design, we work closely with you to create apparel that represents your brand, team, event, campaign or identity.</p>
              <div className="mt-8 border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-semibold">Mr. Prahallad R. <span className="font-sans text-sm font-semibold text-primary">— CEO</span></h3>
                <p className="mt-3 leading-7 text-muted-foreground">With over 12 years of professional experience in project management, operations and business leadership, he brings experience from HCL, DELL, NTT DATA and Perot Systems—and a commitment to quality, efficiency and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-charcoal py-24 text-ivory sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Our Products" title="Customized apparel for every requirement." intro="From corporate teams to college fests, sports tournaments and new brands, every piece is designed around your purpose." light />
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ivory/10 bg-primary/25 md:grid-cols-2 lg:grid-cols-3">
              {products.map((item) => <article key={item.title} className="group bg-charcoal p-8 transition-colors hover:bg-ivory/5">
                <item.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ivory/65">{item.text}</p>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">Enquire now <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </article>)}
            </div>
            <div className="mt-12 border-y border-ivory/10 py-8">
              <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-primary">Complete customized range</p>
              <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2.5">
                {completeRange.map((item) => <span key={item} className="rounded-full border border-ivory/15 px-4 py-2 text-xs text-ivory/65 transition-colors hover:border-primary/60 hover:text-primary">{item}</span>)}
              </div>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <img src={corporateImage} alt="Corporate team in customized polo T-shirts" width={1024} height={1024} loading="lazy" className="aspect-[4/3] h-full w-full rounded-lg object-cover" />
              <img src={sportsImage} alt="Sports team in customized red and black T-shirts" width={1024} height={1024} loading="lazy" className="aspect-[4/3] h-full w-full rounded-lg object-cover" />
            </div>
          </div>
        </section>

        <section id="customize" className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Create Your T-Shirt Your Way" title="Every detail, made to represent you." intro="Customize your apparel by design, logo, artwork, graphics, text, brand colours, names, numbers, event details, size, style, fabric and quantity." />
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg bg-brand-red p-8 text-ivory sm:p-10">
                <Palette className="h-9 w-9 text-primary" />
                <h3 className="mt-7 text-3xl font-semibold">Customization options</h3>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {["Logo customization", "Text customization", "Graphic customization", "Colour customization", "Names & numbers", "Size customization"].map((label) => <div key={label} className="flex items-center gap-3 border-b border-ivory/20 pb-4 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{label}</div>)}
                </div>
                <p className="mt-8 text-sm leading-7 text-ivory/75">Theme T-shirts can be built around your occasion, campaign, event, group or creative concept—with names, dates, photos, slogans and custom artwork.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {styles.map(([name, text], index) => <article key={name} className="rounded-lg border border-border bg-card p-7 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="font-display text-4xl text-primary/45">0{index + 1}</span>
                  <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                </article>)}
              </div>
            </div>
            <div className="mt-14 border-y border-border py-9">
              <p className="text-center text-xs font-bold uppercase tracking-[0.23em] text-primary">Built for every industry</p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4 font-display text-2xl text-foreground/75">
                {['Corporate & Business', 'Education', 'Sports', 'Events', 'Marketing & Promotions', 'Retail & Brands'].map(x => <span key={x}>{x}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="From Your Design to Your T-Shirt" title="A simple customization process." />
            <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {process.map(([title, text], index) => <li key={title} className="relative border-t border-primary pt-7">
                <span className="absolute -top-4 left-0 grid h-8 w-8 place-items-center rounded-full bg-charcoal text-xs font-bold text-primary">{index + 1}</span>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </li>)}
            </ol>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Why Choose KANNADI?" title="Professional service, shaped around your requirement." />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Customized", "Apparel based on your design and branding."], ["Versatile", "Solutions across teams, events and institutions."], ["Bulk Ready", "Support for groups requiring larger quantities."], ["Brand Focused", "Your visual identity and purpose stay central."], ["Structured", "Clear service from discussion to delivery."],
              ].map(([title, text]) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm"><Layers3 className="h-6 w-6 text-brand-red" /><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="contact" className="relative bg-charcoal py-24 text-ivory sm:py-32">
          <div className="heritage-pattern absolute inset-0 opacity-25" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contact KANNADI</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">Let’s create your customized T-shirt.</h2>
              <p className="mt-6 max-w-lg leading-8 text-ivory/70">Looking for customized T-shirts in Bangalore for your company, event, school, college, sports team, campaign, organization or brand? Share your requirements and our team will help with the next steps.</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-primary"><Send className="h-5 w-5" /> Get a quote · Send your design · Enquire now</div>
            </div>
            <form className="rounded-lg border border-ivory/15 bg-ivory/5 p-6 backdrop-blur-sm sm:p-8" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-ivory/75">Name<Input required className="mt-2 h-12 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/35" placeholder="Your name" /></label>
                <label className="text-sm text-ivory/75">Phone or email<Input required className="mt-2 h-12 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/35" placeholder="How can we reach you?" /></label>
              </div>
              <label className="mt-5 block text-sm text-ivory/75">Requirement<Textarea required className="mt-2 min-h-32 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/35" placeholder="Purpose, quantity, style, sizes, colours and design details" /></label>
              <Button variant="gold" size="lg" className="mt-6 w-full" type="submit">Send Enquiry <ArrowRight /></Button>
              {sent && <p className="mt-4 text-center text-sm text-primary" role="status">Thank you. Your enquiry details are ready to be shared with KANNADI.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/25 bg-charcoal py-12 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="[&_span:first-of-type]:text-ivory"><Logo /><p className="mt-5 max-w-md text-sm leading-7 text-ivory/55">Customized T-shirts and apparel for businesses, institutions, teams, events and brands in Bangalore.</p></div>
          <div className="md:text-right"><div className="flex flex-wrap gap-5 text-sm text-ivory/65 md:justify-end">{nav.map(([label, href]) => <a key={href} href={href} className="hover:text-primary">{label}</a>)}<a href="#contact" className="hover:text-primary">Contact</a></div><p className="mt-5 text-xs text-ivory/40">© {new Date().getFullYear()} KANNADI. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}