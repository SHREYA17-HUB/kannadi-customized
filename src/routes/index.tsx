import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  Layers3,
  Megaphone,
  Menu,
  Palette,
  PartyPopper,
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
          "KANNADI creates customized corporate, promotional, event, school, college, sports and branded T-shirts in Bangalore. Your design. Your brand. Your T-shirt.",
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

const collections = [
  {
    title: "Corporate T-Shirts",
    tagline: "Professional T-shirts for modern teams.",
    text: "Create a unified, professional appearance for employees — ideal for everyday team activities, corporate events, conferences, exhibitions and special occasions. Customize with your company logo, brand colours, employee names, department details, slogans or custom graphics.",
    tags: ["Employee uniforms", "Conferences", "Product launches", "Brand activations", "Annual days", "Team building"],
    icon: Building2,
  },
  {
    title: "Promotional T-Shirts",
    tagline: "Make your marketing more visible.",
    text: "Carry your company logo, product name, campaign message, website, social handle and brand colours into marketing campaigns, brand activations, product launches and exhibitions — a consistent look for your promotional team.",
    tags: ["Campaigns", "Brand activations", "Exhibitions", "Promotional events"],
    icon: Megaphone,
  },
  {
    title: "Event T-Shirts",
    tagline: "Create a T-shirt people remember.",
    text: "Give your event its own identity with event names, dates, logos, graphics, sponsors, slogans and custom artwork — for corporate events, college fests, conferences, festivals, awareness campaigns, charity events and celebrations.",
    tags: ["College fests", "Festivals", "Workshops", "Charity events", "Special occasions"],
    icon: PartyPopper,
  },
  {
    title: "School & College T-Shirts",
    tagline: "Make campus events more memorable.",
    text: "Comfortable, recognizable T-shirts for school activities, house competitions, annual days and sports days — and for college fests, departments, clubs, batch years and farewell events. Add logos, house colours, student names and custom graphics.",
    tags: ["Annual days", "House colours", "Departments", "Batch years", "Farewells"],
    icon: GraduationCap,
  },
  {
    title: "Sports & Team T-Shirts",
    tagline: "One team. One identity.",
    text: "Customized sports T-shirts for teams, clubs, tournaments, training and fitness groups — with team logos, player names and numbers, team colours, sponsor logos and tournament branding. Matching T-shirts for corporate teams, communities and volunteer groups too.",
    tags: ["Cricket", "Football", "Running groups", "Tournaments", "Fitness teams"],
    icon: Trophy,
  },
  {
    title: "Employee Uniforms",
    tagline: "A consistent look for your workforce.",
    text: "Customized employee T-shirts with your company branding, in colours and designs that match your organization — for sales, delivery, retail, service, field, promotional and event teams.",
    tags: ["Sales teams", "Retail staff", "Field teams", "Service staff"],
    icon: Users,
  },
  {
    title: "Merchandise & Startup Brands",
    tagline: "Turn your creative ideas into merchandise.",
    text: "Transform your logo, illustrations, artwork, slogans and brand identity into wearable merchandise for brand promotions, community building, customer engagement and retail. For startups, T-shirts become part of your visual identity.",
    tags: ["Brand launches", "Creators", "Communities", "Customer merchandise"],
    icon: Shirt,
  },
  {
    title: "Campaign & Festival T-Shirts",
    tagline: "Wear your message. Celebrate together.",
    text: "Custom T-shirts for awareness programs, social campaigns and community activities — and personalized celebration T-shirts with names, dates, messages, photos and artwork for festivals, reunions and family gatherings.",
    tags: ["Awareness campaigns", "Reunions", "Festivals", "Personalized gifts"],
    icon: Sparkles,
  },
  {
    title: "Bulk Customized T-Shirts",
    tagline: "Custom T-shirts for large orders.",
    text: "Customized solutions for bulk requirements — corporate teams, college events, school programs, sports tournaments, promotional campaigns and brands. Bulk orders can include multiple sizes, colours, designs, individual names, player numbers and team branding.",
    tags: ["Multiple sizes", "Multiple designs", "Individual names", "Team branding"],
    icon: Layers3,
  },
];

const styles = [
  ["Round Neck", "A classic and versatile choice for events, promotions, teams and everyday use."],
  ["Polo T-Shirt", "A smart, brand-ready option for corporate, hospitality, retail and service teams — customizable with logo, brand colours, text or embroidery."],
  ["V-Neck", "A contemporary alternative for customized team and corporate apparel."],
  ["Sports T-Shirt", "Designed for sports teams, tournaments, fitness activities and training programs."],
];

const customizationOptions = [
  ["Logo Customization", "Add your company, school, college, team, organization or brand logo."],
  ["Text Customization", "Add names, slogans, messages, event details or other text."],
  ["Graphic Customization", "Use illustrations, patterns, artwork and custom graphics."],
  ["Colour Customization", "Choose colours that match your brand, team, event or organization."],
  ["Name & Number Customization", "Ideal for sports teams, employee teams, student groups and events."],
  ["Size Customization", "Plan your order according to the sizes required by your team or group."],
];

const industries = [
  ["Corporate & Business", "Professional branded T-shirts for employees, teams, events and promotions."],
  ["Education", "Customized apparel for schools, colleges, student groups, clubs and events."],
  ["Sports", "Team T-shirts for tournaments, clubs, training and sports activities."],
  ["Events", "Customized T-shirts for conferences, celebrations, festivals, campaigns and group events."],
  ["Marketing & Promotions", "Promotional apparel for brand awareness, product launches, exhibitions and campaigns."],
  ["Retail & Brands", "Customized merchandise and branded apparel for businesses and emerging brands."],
];

const process = [
  ["Share Your Requirement", "Tell us your purpose, quantity, preferred style, sizes, colours and design requirements."],
  ["Share Your Design", "Send your logo, artwork, reference image or design concept."],
  ["Finalize Specifications", "Select the preferred T-shirt style, fabric, colours, sizes, branding and customization details."],
  ["Production", "Once the specifications are approved, the customized T-shirts move into production."],
  ["Quality Check", "The finished products are checked for customization and overall finishing."],
  ["Delivery", "Your customized T-shirts are prepared and delivered according to the agreed requirements."],
];

const whyChoose = [
  ["Customized Around Your Requirement", "Apparel created according to your specific design and branding requirements."],
  ["Wide Range of Applications", "From corporate teams and promotional campaigns to schools, colleges, events, sports and brands."],
  ["Bulk Order Support", "Customized solutions for organizations and groups requiring larger quantities."],
  ["Brand-Focused Approach", "We help ensure your T-shirts reflect your visual identity and purpose."],
  ["Professional Service", "A structured process from initial requirement discussion to final delivery."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="KANNADI home">
      <img src={logoAsset.url} alt="KANNADI logo" className={compact ? "h-11 w-11 rounded-full object-cover" : "h-14 w-14 rounded-full object-cover"} />
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
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className={`mt-3 text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${light ? "text-ivory" : "text-foreground"}`}>{title}</h2>
      {intro && <p className={`mx-auto mt-4 max-w-xl text-sm leading-7 ${light ? "text-ivory/70" : "text-muted-foreground"}`}>{intro}</p>}
      <div className="gold-rule mx-auto mt-6 h-px w-28" />
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = [["About", "#about"], ["Collection", "#collection"], ["Customize", "#customize"], ["Process", "#process"]];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className={`fixed inset-x-0 top-0 z-50 border-b text-ivory backdrop-blur-xl transition-all duration-300 ${scrolled || menuOpen ? "border-ivory/10 bg-charcoal/95 shadow-lg" : "border-transparent bg-charcoal/55"}`}>
        <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8">
          <div className="min-w-0 [&_span:first-of-type]:text-ivory"><Logo compact /></div>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={href} href={href} className="text-[13px] font-medium tracking-wide text-ivory/75 transition-colors hover:text-primary">{label}</a>)}
            <Button variant="gold" size="lg" asChild><a href="#contact">Get a Quote <ArrowRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="text-ivory hover:bg-ivory/10 hover:text-primary lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && <nav className="border-t border-ivory/10 bg-charcoal px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-ivory/10 py-3 text-sm text-ivory/80">{label}</a>)}
            <Button variant="gold" className="mt-4" asChild><a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote</a></Button>
          </div>
        </nav>}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative min-h-[640px] overflow-hidden bg-charcoal pt-[72px] text-ivory">
          <img src={heroImage} alt="A team wearing premium customized KANNADI-style apparel" width={1536} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[68%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--charcoal)_0%,color-mix(in_oklab,var(--charcoal)_92%,transparent)_38%,color-mix(in_oklab,var(--charcoal)_28%,transparent)_72%,color-mix(in_oklab,var(--charcoal)_55%,transparent)_100%)]" />
          <div className="heritage-pattern absolute inset-y-0 left-0 w-1/2 opacity-30" />
          <div className="relative mx-auto flex min-h-[568px] max-w-7xl items-center px-5 py-16 sm:px-8">
            <div className="reveal max-w-2xl">
              <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-primary" /><span className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">Custom T-Shirt Manufacturer in Bangalore</span></div>
              <h1 className="text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">Customized T-Shirts That Make Your <span className="text-primary">Brand Stand Out.</span></h1>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-ivory/75">Bring your ideas to life with KANNADI — your trusted partner for customized T-shirts in Bangalore. From your logo and brand colours to custom artwork, text and designs, we create T-shirts that reflect your identity, purpose and style.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" asChild><a href="#contact">Get a Quote <ArrowRight /></a></Button>
                <Button variant="heroOutline" size="lg" asChild><a href="#collection">Explore the Collection</a></Button>
              </div>
              <p className="mt-8 font-display text-lg italic text-ivory/65">Your design. Your brand. Your T-shirt.</p>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-primary/50" />
        </section>

        {/* Intro statement */}
        <section className="border-b border-border bg-background py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">A great T-shirt does more than look good — <span className="text-brand-red">it creates identity.</span></h2>
            <div>
              <p className="text-sm leading-7 text-muted-foreground">At KANNADI, we specialize in customized T-shirt manufacturing with solutions tailored to your requirements. Whether you need branded T-shirts for your employees, promotional T-shirts for a campaign, event T-shirts for a special occasion, or custom apparel for your team, we help turn your concept into reality.</p>
              <p className="mt-4 font-display text-lg italic text-foreground/80">Customised for your brand. Designed for your purpose.</p>
            </div>
          </div>
        </section>

        {/* About + Founder */}
        <section id="about" className="bg-background py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <img src={craftImage} alt="Quality inspection of a customized polo T-shirt" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-md object-cover shadow-premium" />
              <div className="absolute -bottom-5 -right-3 max-w-52 rounded-md border border-primary/40 bg-charcoal p-5 text-ivory shadow-premium sm:-right-5">
                <ShieldCheck className="mb-3 text-primary" />
                <p className="font-display text-lg leading-tight">Creative ideas. Professional quality.</p>
              </div>
            </div>
            <div className="lg:pl-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">About KANNADI</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Customized T-Shirts. Creative Ideas. Professional Quality.</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">KANNADI is a customized T-shirt and apparel solutions company focused on helping businesses, organizations, institutions, teams and individuals bring their ideas to life through professionally customized T-shirts — corporate, promotional, event, school and college, sports, branded merchandise and more.</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">From a simple logo to a complete custom design, we work closely with our customers to create T-shirts that represent their brand, team, event, campaign or identity.</p>
              <div className="mt-7 border-l-2 border-primary pl-6">
                <h3 className="font-display text-xl font-semibold">Meet the Founder — Mr. Prahallad R. <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">CEO</span></h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">With over 12 years of professional experience in project management, operations and business leadership, Mr. Prahallad R. brings extensive industry knowledge and a strong commitment to excellence — shaped through leadership roles with renowned organizations including HCL, DELL, NTT DATA and Perot Systems.</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Under his leadership, KANNADI is focused on delivering high-quality customized uniforms, corporate workwear, school uniforms, industrial uniforms and institutional apparel — building a trusted and dependable uniform manufacturing brand recognized for quality products, consistent service and long-term customer relationships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collection */}
        <section id="collection" className="bg-charcoal py-16 text-ivory sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Our Products" title="Customized T-Shirts & Apparel for Every Requirement" intro="We help transform your logo, artwork, brand identity, event concept or creative idea into customized apparel designed around your requirements." light />
            <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-ivory/10 bg-primary/25 md:grid-cols-2 lg:grid-cols-3">
              {collections.map((item) => <article key={item.title} className="group flex flex-col bg-charcoal p-7 transition-colors hover:bg-ivory/5">
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 font-display text-sm italic text-primary/85">{item.tagline}</p>
                <p className="mt-3 text-[13px] leading-6 text-ivory/65">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => <span key={tag} className="rounded-full border border-ivory/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-ivory/55">{tag}</span>)}
                </div>
                <a href="#contact" className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-primary">Enquire now <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </article>)}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <img src={corporateImage} alt="Corporate team in customized polo T-shirts" width={1024} height={1024} loading="lazy" className="aspect-[4/3] h-full w-full rounded-md object-cover" />
              <img src={sportsImage} alt="Sports team in customized red and black T-shirts" width={1024} height={1024} loading="lazy" className="aspect-[4/3] h-full w-full rounded-md object-cover" />
            </div>
          </div>
        </section>

        {/* Styles + Theme T-Shirts */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="T-Shirt Styles" title="Choose the Style That Fits Your Requirement" intro="Depending on your requirement, customized apparel can be developed in different styles." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {styles.map(([name, text], index) => <article key={name} className="rounded-md border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                <span className="font-display text-3xl text-primary/45">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{text}</p>
              </article>)}
            </div>
            <div className="mt-12 grid gap-8 rounded-md border border-primary/30 bg-secondary p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Theme T-Shirts</p>
                <h3 className="mt-3 text-balance font-display text-2xl font-semibold leading-tight sm:text-3xl">T-Shirts That Tell Your Story</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">Designed around a specific occasion, campaign, event, group or creative concept, our theme T-shirts help create a strong and unified visual identity — for corporate events, college fests, school programs, sports activities, festivals, awareness campaigns, family celebrations, team outings and special occasions.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Theme", "Colours", "Graphics", "Artwork", "Text", "Logo", "Slogan", "Event Name", "Names & Numbers", "Custom Design"].map((item) => <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/75 transition-colors hover:border-primary/60 hover:text-primary">{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section id="customize" className="bg-charcoal py-16 text-ivory sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Create Your T-Shirt Your Way</p>
                <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Every detail, made to represent you.</h2>
                <p className="mt-4 text-sm leading-7 text-ivory/70">Customize your T-shirts by design, logo, artwork, graphics, text, brand colours, team names, player names, numbers, event details, size, style, fabric and quantity. From a simple logo T-shirt to a completely customized design, we help create apparel that matches your requirements.</p>
                <Button variant="hero" size="lg" className="mt-7" asChild><a href="#contact">Create Something Truly Yours <ArrowRight /></a></Button>
              </div>
              <div className="grid gap-px overflow-hidden rounded-md border border-ivory/10 bg-primary/25 sm:grid-cols-2">
                {customizationOptions.map(([title, text]) => <div key={title} className="bg-charcoal p-6">
                  <Palette className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-ivory/60">{text}</p>
                </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Customized T-Shirts for Every Industry" title="Built for every industry." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map(([title, text]) => <article key={title} className="border-t-2 border-primary bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{text}</p>
              </article>)}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="From Your Design to Your T-Shirt" title="A simple customization process." />
            <ol className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {process.map(([title, text], index) => <li key={title} className="relative border-t border-primary pt-6">
                <span className="absolute -top-4 left-0 grid h-8 w-8 place-items-center rounded-full bg-charcoal text-xs font-bold text-primary">{index + 1}</span>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{text}</p>
              </li>)}
            </ol>
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionTitle eyebrow="Why Choose KANNADI?" title="Professional service, shaped around your requirement." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {whyChoose.map(([title, text]) => <article key={title} className="rounded-md border border-border bg-card p-5 shadow-sm">
                <Check className="h-5 w-5 text-brand-red" />
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{text}</p>
              </article>)}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative bg-charcoal py-16 text-ivory sm:py-20">
          <div className="heritage-pattern absolute inset-0 opacity-25" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Contact KANNADI</p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Let’s Create Your Customized T-Shirt</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ivory/70">Looking for customized T-shirts in Bangalore for your company, event, school, college, sports team, promotional campaign, organization or brand? KANNADI is ready to help you turn your ideas into professionally customized T-shirts. Share your requirements and our team will help you with the next steps.</p>
              <div className="mt-7 flex items-center gap-3 text-sm text-primary"><Send className="h-5 w-5" /> Get a quote · Send your design · Enquire now</div>
            </div>
            <form className="rounded-md border border-ivory/15 bg-ivory/5 p-6 backdrop-blur-sm sm:p-7" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-ivory/75">Name<Input required className="mt-2 h-12 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/35" placeholder="Your name" /></label>
                <label className="text-sm text-ivory/75">Phone or email<Input required className="mt-2 h-12 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/35" placeholder="How can we reach you?" /></label>
              </div>
              <label className="mt-4 block text-sm text-ivory/75">Requirement<Textarea required className="mt-2 min-h-28 border-ivory/20 bg-ivory/5 text-ivory placeholder:text-ivory/35" placeholder="Purpose, quantity, style, sizes, colours and design details" /></label>
              <Button variant="gold" size="lg" className="mt-5 w-full" type="submit">Send Enquiry <ArrowRight /></Button>
              {sent && <p className="mt-4 text-center text-sm text-primary" role="status">Thank you. Your enquiry details are ready to be shared with KANNADI.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-primary/25 bg-charcoal py-10 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="[&_span:first-of-type]:text-ivory"><Logo /><p className="mt-4 max-w-md text-sm leading-7 text-ivory/55">Customized T-shirts and apparel for businesses, institutions, teams, events and brands in Bangalore.</p></div>
          <div className="md:text-right"><div className="flex flex-wrap gap-5 text-sm text-ivory/65 md:justify-end">{nav.map(([label, href]) => <a key={href} href={href} className="hover:text-primary">{label}</a>)}<a href="#contact" className="hover:text-primary">Contact</a></div><p className="mt-4 text-xs text-ivory/40">© {new Date().getFullYear()} KANNADI. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}
