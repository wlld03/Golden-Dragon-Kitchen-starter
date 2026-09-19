import Image from "next/image";
import Reveal from "@/components/Reveal";

const menu = [
  { name: "Margherita", note: "Pomodoro, fior di latte, basilico", price: "€ —" },
  { name: "Ligure", note: "Pesto, stracchino, pinoli", price: "€ —" },
  { name: "Marinara", note: "Pomodoro, aglio, origano", price: "€ —" },
  { name: "Garibaldi", note: "Specialità della casa · details to confirm", price: "€ —" },
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  return (
    <main id="top">
      <header className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Taverna Garibaldi home"><span className="mark">TG</span><span>Taverna<br/>Garibaldi</span></a>
        <nav aria-label="Main navigation"><a href="#storia">Storia</a><a href="#menu">Menu</a><a href="#visit">Visita</a></nav>
        <a className="nav-cta" href="tel:+390187808098">Prenota <Arrow/></a>
      </header>

      <section className="hero">
        <Image src="/images/levanto-coast-concept.png" alt="Concept image inspired by the Ligurian coast near Levanto" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow hero-in delay-1">Levanto · Liguria</p>
          <h1 className="hero-in delay-2">La semplicità<br/>ha il sapore<br/><em>del mare.</em></h1>
          <div className="hero-bottom hero-in delay-3"><p>Pizza, territorio e una tavola italiana<br/>a due passi dal mare.</p><a className="button button-light" href="#menu">Scopri il menu <Arrow/></a></div>
        </div>
        <p className="image-note">Concept imagery · replace with owner-approved photography</p>
      </section>

      <section id="storia" className="story section-pad">
        <Reveal className="story-index"><p className="eyebrow">01 · La taverna</p></Reveal>
        <Reveal className="story-title" delay={80}><h2>Un indirizzo storico,<br/>un ritmo contemporaneo.</h2></Reveal>
        <Reveal className="story-copy" delay={160}><p>Nel cuore di Levanto, Taverna Garibaldi accoglie viaggiatori e gente del posto attorno a una cucina diretta, conviviale e profondamente italiana.</p><p className="demo-copy">Testo dimostrativo: la storia, gli ingredienti e i metodi di preparazione devono essere confermati dal ristorante.</p><a className="text-link" href="#visit">Trova il tavolo <Arrow/></a></Reveal>
        <Reveal className="story-stamp" delay={240}><span>Via Garibaldi 57</span><strong>LEVANTO</strong><span>Dal centro al mare</span></Reveal>
      </section>

      <section className="image-break">
        <div className="image-card"><Image src="/images/pizza-concept.png" alt="Concept photograph of a wood-fired margherita pizza" fill sizes="(max-width: 900px) 100vw, 70vw" className="cover" /><p className="image-note dark-note">Illustrative menu concept</p></div>
        <Reveal className="side-quote"><span>Farina.</span><span>Fuoco.</span><span>Tempo.</span></Reveal>
      </section>

      <section id="menu" className="menu-section section-pad">
        <Reveal className="menu-intro"><p className="eyebrow">02 · Dal forno</p><h2>Poche cose.<br/>Fatte bene.</h2><p>Una selezione essenziale pensata per la stagione e per il forno. Le voci qui sotto sono esempi di impaginazione, non un menu pubblicato dal ristorante.</p></Reveal>
        <div className="menu-list">
          {menu.map((item, i) => <Reveal key={item.name} delay={i * 70} className="menu-row"><span className="menu-num">0{i + 1}</span><div><h3>{item.name}</h3><p>{item.note}</p></div><span className="price">{item.price}</span></Reveal>)}
          <Reveal><a className="button button-dark" href="mailto:tommydevoto@gmail.com?subject=Richiesta%20menu%20Taverna%20Garibaldi">Richiedi il menu <Arrow/></a></Reveal>
        </div>
      </section>

      <section className="coast-strip" aria-label="From Levanto to the sea"><span>LEVANTO</span><i/><span>BONASSOLA</span><i/><span>CINQUE TERRE</span></section>

      <section id="visit" className="visit section-pad">
        <Reveal className="visit-heading"><p className="eyebrow">03 · Vieni a trovarci</p><h2>La tua tavola<br/>a Levanto.</h2></Reveal>
        <Reveal className="visit-details" delay={100}>
          <div><span className="label">Indirizzo</span><p>Via Giuseppe Garibaldi, 57<br/>19015 Levanto SP, Italia</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Via+Giuseppe+Garibaldi+57+Levanto" target="_blank" rel="noopener noreferrer">Apri la mappa <Arrow/></a></div>
          <div><span className="label">Contatti</span><p><a href="tel:+390187808098">+39 0187 808 098</a><br/><a href="mailto:tommydevoto@gmail.com">tommydevoto@gmail.com</a></p></div>
          <div><span className="label">Orari</span><p>Da confermare con il ristorante</p></div>
        </Reveal>
        <Reveal className="visit-action" delay={180}><p>Una cena prima del tramonto.<br/>Una pizza dopo il mare.</p><a className="circle-cta" href="tel:+390187808098"><span>Prenota<br/>un tavolo</span><Arrow/></a></Reveal>
      </section>

      <footer><div className="footer-brand"><span className="mark">TG</span><strong>Taverna Garibaldi</strong></div><p>Concept website · Informazioni e immagini da approvare prima della pubblicazione.</p><a href="#top">Torna su ↑</a></footer>
    </main>
  );
}
