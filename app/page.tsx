import Image from "next/image";
import { business, directionsHref, phoneHref } from "@/config/business";

const links = [
  { label: "Our story", href: "#about" },
  { label: "Favourites", href: "#favourites" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

function Mark() {
  return business.logo ? (
    <Image src={business.logo} alt={`${business.businessName} logo`} width={52} height={52} className="h-11 w-11 object-contain" />
  ) : (
    <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full border border-ember-400/50 bg-ember-500 font-display text-2xl text-white">龍</span>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-char-900/10 bg-ember-50/95 backdrop-blur-lg">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${business.businessName} home`}>
          <Mark />
          <span className="max-w-44 font-display text-base font-bold leading-tight tracking-tight text-char-900 sm:text-lg">{business.businessName}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(link => <a key={link.href} href={link.href} className="text-sm font-medium hover:text-ember-600">{link.label}</a>)}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {business.phone && <a href={phoneHref(business.phone)} className="text-sm font-semibold hover:text-ember-600">Call us</a>}
          <a href="#menu" className="rounded-full bg-char-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ember-600">View menu</a>
        </div>
        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-char-900/20 px-4 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember-500">Menu</summary>
          <div className="absolute right-0 top-12 flex w-52 flex-col rounded-xl border border-char-900/10 bg-ember-50 p-3 shadow-xl">
            {links.map(link => <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm hover:bg-ember-100">{link.label}</a>)}
          </div>
        </details>
      </nav>
    </header>
  );
}

function Cta({ label, url, light = false }: {label: string; url: string | null; light?: boolean}) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-bold transition-colors ${light ? "bg-white text-char-900 hover:bg-ember-100" : "bg-ember-500 text-white hover:bg-ember-600"}`;
  return url ? <a href={url} className={classes} target={url.startsWith("https://") ? "_blank" : undefined} rel={url.startsWith("https://") ? "noopener noreferrer" : undefined}>{label}<span aria-hidden="true" className="ml-3">↗</span></a>
    : <span className="inline-flex flex-col items-start gap-1"><span aria-disabled="true" className={`${classes} cursor-not-allowed opacity-55`}>{label}</span><span className="text-xs opacity-75">Available after the restaurant connects its service</span></span>;
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[690px] overflow-hidden bg-char-950 text-white sm:min-h-[720px]">
      <Image src={business.heroImage} alt="Illustrative, AI-created Chinese noodle dish" fill priority sizes="100vw" className="object-cover object-[65%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-char-950 via-char-950/85 to-char-950/10" />
      <div className="relative mx-auto flex min-h-[690px] max-w-7xl flex-col justify-center px-5 py-24 sm:min-h-[720px] sm:px-8">
        <span className="mb-7 w-fit rounded-full border border-ember-200/40 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-ember-100">{business.businessType}{business.isDemo && " · Demo site"}</span>
        <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-7xl">{business.heroHeading}<br/><span className="text-ember-400">{business.heroAccent}</span></h1>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-ember-100">{business.tagline} A welcoming table and comforting dishes made to share.</p>
        <div className="mt-10 flex flex-wrap items-start gap-4">
          <Cta label={business.secondaryCTA.label} url={business.secondaryCTA.url} />
          <a href="#about" className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">Meet the kitchen</a>
        </div>
        <p className="mt-16 max-w-lg text-xs tracking-wide text-ember-100/70">Concept demo. Food imagery is illustrative; replace with real restaurant photography.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-600">{business.about.eyebrow}</p><h2 className="mt-5 max-w-lg font-display text-4xl font-bold leading-tight sm:text-5xl">{business.about.heading}</h2>
        {business.about.paragraphs.map(p => <p key={p} className="mt-6 max-w-xl leading-8 text-char-800/80">{p}</p>)}
        <a href="#menu" className="mt-8 inline-block border-b-2 border-ember-500 pb-1 text-sm font-bold text-ember-600">Discover the menu ↗</a></div>
      <div className="relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[520px]"><Image src={business.galleryImages[0]?.src ?? business.heroImage} alt={business.galleryImages[0]?.alt ?? "Restaurant concept image"} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><span className="absolute bottom-5 left-5 rounded-full bg-char-950/75 px-4 py-2 text-xs text-white backdrop-blur">Illustrative interior · demo</span></div>
    </section>
  );
}

function Favourites() {
  return (
    <section id="favourites" className="bg-white py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-600">Popular plates</p><div className="mt-4 flex flex-wrap items-end justify-between gap-4"><h2 className="font-display text-4xl font-bold sm:text-5xl">The dishes worth coming back for.</h2><a href="#menu" className="text-sm font-bold text-ember-600">See the full menu →</a></div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{business.featuredItems.map((item, index) => <article key={item.name} className="overflow-hidden rounded-3xl border border-char-900/10 bg-ember-50"><div className="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-char-900 via-ember-600 to-char-800">{item.image ? <Image src={item.image} alt={`Illustrative presentation for ${item.name}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" /> : <span aria-hidden="true" className="font-display text-7xl text-white/20">龍</span>}</div><div className="p-6"><span className="text-xs font-semibold uppercase tracking-widest text-ember-600">Favourite 0{index+1}</span><div className="mt-3 flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-bold">{item.name}</h3><span className="font-bold text-ember-600">{business.currencySymbol}{item.price}</span></div><p className="mt-3 text-sm leading-6 text-char-800/75">{item.description}</p></div></article>)}</div>
      {business.isDemo && <p className="mt-5 text-xs text-char-800/60">Illustrative menu and prices. Actual items, prices and dish photography must be confirmed with the client.</p>}
    </div></section>
  );
}

function Menu() {
  return (
    <section id="menu" className="paper py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-600">Explore the menu</p><h2 className="mt-4 font-display text-5xl font-bold">Something for every table.</h2><p className="mt-4 text-sm text-char-800/70">Fresh inspiration for lunch, dinner and everything in between.</p></div>
      <div className="mt-14 grid gap-8 lg:grid-cols-2">{business.menu.map((section, i) => <div key={section.section} className={`rounded-3xl border border-char-900/10 bg-white/75 p-7 sm:p-9 ${i===1 ? "lg:row-span-2" : ""}`}><h3 className="font-display text-3xl font-bold text-ember-600">{section.section}</h3><div className="mt-7 space-y-7">{section.items.map(item => <div key={item.name}><div className="flex items-baseline justify-between gap-4"><h4 className="font-semibold">{item.name}</h4><span aria-hidden="true" className="leader"/><span className="shrink-0 font-bold">{business.currencySymbol}{item.price}</span></div><p className="mt-1 text-sm leading-6 text-char-800/65">{item.description}</p></div>)}</div></div>)}</div>
      {business.isDemo && <p className="mt-7 text-center text-xs text-char-800/60">Sample menu · confirm ingredients, allergens, availability and prices before a real restaurant launch.</p>}
    </div></section>
  );
}

function WhyUs() {
  return <section className="bg-char-900 py-24 text-white"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-400">Why dine with us</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold sm:text-5xl">The best meals make room for everyone.</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{business.services.map((item, i) => <article key={item.title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><span className="font-display text-3xl text-ember-400">0{i+1}</span><h3 className="mt-8 font-display text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-white/70">{item.description}</p></article>)}</div></div></section>;
}

function Testimonials() {
  return <section id="reviews" className="bg-white py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-600">What guests say</p><h2 className="mt-4 font-display text-4xl font-bold">Words from the neighbourhood.</h2>{business.testimonials.length ? <div className="mt-8 grid gap-5 md:grid-cols-3">{business.testimonials.map(t => <blockquote key={t.quote} className="rounded-2xl border border-char-900/10 p-7"><p className="font-display text-xl leading-relaxed">“{t.quote}”</p><footer className="mt-6 text-sm text-ember-600">{t.attribution}</footer></blockquote>)}</div> : <div className="mt-8 rounded-2xl border border-dashed border-ember-500/45 bg-ember-50 p-8"><p className="font-display text-xl">Real reviews belong here.</p><p className="mt-2 text-sm leading-6 text-char-800/70">This demo has no customer reviews. Add quotes only after checking their accuracy and getting permission to publish them.</p></div>}</div></section>;
}

function Visit() {
  const a = business.address;
  return <section id="visit" className="py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-600">Plan your visit</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Pull up a chair.</h2><div className="mt-10 grid gap-6 lg:grid-cols-3"><div className="rounded-3xl border border-char-900/10 bg-white p-8"><h3 className="font-display text-2xl font-bold">Opening hours</h3><dl className="mt-7 space-y-3">{business.openingHours.map(h => <div key={h.day} className="flex flex-wrap justify-between gap-3 border-b border-char-900/10 pb-2 text-sm"><dt>{h.day}</dt><dd className="font-semibold">{h.hours}</dd></div>)}</dl>{business.isDemo && <p className="mt-5 text-xs text-ember-600">Example schedule — confirm with the business before launch.</p>}</div>
      <div className="rounded-3xl border border-char-900/10 bg-white p-8"><h3 className="font-display text-2xl font-bold">Find us</h3>{a ? <><address className="mt-7 not-italic leading-7">{a.street}<br/>{a.city}, {a.region} {a.postalCode}<br/>{a.country}</address><a href={directionsHref(a)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block text-sm font-bold text-ember-600">Open directions ↗</a></> : <><p className="mt-7 leading-7 text-char-800/70">Add the restaurant&apos;s verified address to activate directions and local search details.</p><span className="mt-7 inline-block rounded-full border border-char-900/15 px-5 py-3 text-sm">Location to be confirmed</span></>}</div>
      <div className="rounded-3xl border border-char-900/10 bg-white p-8"><h3 className="font-display text-2xl font-bold">Get in touch</h3><p className="mt-7 leading-7 text-char-800/70">For a real business, tap to call, book a table or order through its own provider.</p>{business.phone ? <a href={phoneHref(business.phone)} className="mt-7 inline-block rounded-full bg-ember-500 px-6 py-3 font-semibold text-white">Call {business.phone}</a> : <span aria-disabled="true" className="mt-7 inline-block rounded-full bg-char-900/15 px-6 py-3 font-semibold text-char-800/65">Phone CTA · connect verified number</span>}{business.email && <a href={`mailto:${business.email}`} className="mt-4 block text-sm font-semibold text-ember-600">{business.email}</a>}</div></div></div></section>;
}

function FinalCta() {
  return <section id="order" className="bg-ember-600 py-20 text-white"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-10 px-5 sm:px-8"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-ember-100">Your table is waiting</p><h2 className="mt-4 max-w-xl font-display text-4xl font-bold sm:text-5xl">Come hungry. Leave happy.</h2><p className="mt-5 max-w-lg text-ember-100">Order and reservation links are connected only when the restaurant provides its real service URL.</p></div><div className="flex flex-wrap gap-3"><Cta label={business.primaryCTA.label} url={business.primaryCTA.url} light /><Cta label={business.reservationCTA.label} url={business.reservationCTA.url ?? (business.phone ? phoneHref(business.phone) : null)} light /></div></div></section>;
}

function Footer() {
  return <footer className="bg-char-950 py-12 text-ember-100"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:px-8 md:flex-row"><div className="flex gap-4"><Mark/><div><p className="font-display text-xl font-bold">{business.businessName}</p><p className="mt-2 max-w-xs text-sm text-ember-100/65">{business.tagline}</p></div></div><div className="flex flex-wrap gap-6 text-sm">{links.map(l => <a key={l.href} href={l.href} className="hover:text-ember-400">{l.label}</a>)}{business.socialLinks.map(s => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}</div></div><div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/15 px-5 pt-6 text-xs text-ember-100/60 sm:px-8"><p>© {new Date().getFullYear()} {business.businessName}. {business.isDemo ? "Fictional demo business." : "All rights reserved."}</p><p>Built from an MIT-licensed open-source starter. Illustrative imagery in demo.</p></div></footer>;
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Favourites />
        <Menu />
        <WhyUs />
        <Testimonials />
        <Visit />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
