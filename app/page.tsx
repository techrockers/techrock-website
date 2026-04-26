const products = [
  {
    name: "Platzhalter: Web App",
    kind: "In Bearbeitung",
    teaser: "Ein eigenes Web-App-Produkt entsteht und wird hier bald vorgestellt.",
    description:
      "Diese Kachel ist ein Platzhalter für ein Produkt, das aktuell konzipiert und entwickelt wird. Sobald die Produktbasis steht, erscheinen hier echte Screenshots, ein präziser Teaser und ein konkreter Einblick in Nutzen, Funktionen und technische Umsetzung.",
    palette: "aurora",
    stats: ["Coming soon", "Web App", "Product Build"],
  },
  {
    name: "Platzhalter: Browser Extension",
    kind: "In Bearbeitung",
    teaser: "Eine Browser Extension mit produktivem Fokus ist in Vorbereitung.",
    description:
      "TechRock arbeitet an Browser-Erweiterungen, die echte Alltagsprobleme im Web lösen. Die finalen Produktdaten werden ergänzt, sobald Berechtigungen, Kernfunktionen, Store-Auftritt und technische Basis belastbar definiert sind.",
    palette: "ridge",
    stats: ["Coming soon", "Extension", "Manifest V3"],
  },
  {
    name: "Platzhalter: Weiteres Produkt",
    kind: "In Bearbeitung",
    teaser: "Weitere Produktideen werden validiert und schrittweise umgesetzt.",
    description:
      "Dieser Platz ist für ein weiteres TechRock-Produkt reserviert. Der Bereich wird mit echten Produktinformationen gefüllt, sobald Konzept, Prototyp und Roadmap weit genug sind, um sie nachvollziehbar zu präsentieren.",
    palette: "ice",
    stats: ["Coming soon", "Prototype", "Roadmap"],
  },
];

const capabilities = [
  "Eigene Produktanbieter, kein klassischer Dienstleister",
  "Web Apps mit belastbaren Frontend- und Backend-Architekturen",
  "Browser Extensions mit Manifest V3, sicheren Berechtigungen und Store-Readiness",
  "KI-Funktionen, die Prozesse beschleunigen statt Oberflächen zu überladen",
];

const stack = [
  "TypeScript",
  "Node",
  "React",
  "Angular",
  "Firebase",
  "AI/KI",
  "Browser APIs",
  "Product Design",
  "CI/CD",
  "Github",
  "HTML & CSS",
  "Next.js",
  "Responsive Design",
  "Cloud",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TechRock Startseite">
          <img src="/mountain.png" alt="" className="brand-mark" />
          <img src="/techrock.webp" alt="TechRock" className="brand-logo" />
        </a>
        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#produkte">Produkte</a>
          <a href="#entwicklung">Entwicklung</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent Product Studio</p>
          <h1>Web App & Browser Extension Schmiede.</h1>
          <p className="hero-text">
            TechRock entwickelt eigene Softwareprodukte mit professioneller
            Architektur, modernen Web-Stacks und pragmatisch eingesetzten
            KI-Werkzeugen.
          </p>
          <div className="hero-actions">
            <a href="#produkte" className="button primary">
              Produktplatzhalter ansehen
            </a>
            <a href="#entwicklung" className="button secondary">
              Arbeitsweise
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mountain-shell">
            <img src="/mountain.png" alt="" />
          </div>
          <div className="code-panel panel-one">
            <span>products.ts</span>
            <strong>buildOwnProducts()</strong>
          </div>
          <div className="code-panel panel-two">
            <span>stack</span>
            <strong>React / Angular + Firebase</strong>
          </div>
        </div>
      </section>

      <section className="section split" id="entwicklung">
        <div>
          <p className="eyebrow">Entwicklung</p>
          <h2>
            Von der Idee zum nutzbaren Produkt mit professionell-pragmatischer
            Arbeitsweise und modernem Tech Stack.
          </h2>
        </div>
        <div className="section-copy">
          <p>
            TechRock kreiert aus Ideen funktonierende, moderne Produkte. Die
            Arbeit beginnt bei einem stabilen
            technischen Kern und endet bei Oberflächen, die schnell verständlich,
            responsiv und langfristig wartbar sind.
          </p>
          <ul className="capability-list">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section stack-band" aria-label="Technologien">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section" id="produkte">
        <div className="section-heading">
          <p className="eyebrow">Portfolio in Vorbereitung</p>
          <h2>Hier entstehen die Produktkacheln für echte TechRock-Produkte.</h2>
          <p>
            Die Kacheln sind bewusst als Platzhalter angelegt. Sie zeigen schon
            die spätere Struktur des Portfolio-Bereichs, werden aber erst nach
            und nach mit realen Produktnamen, Screenshots, Teasern und
            Detailinformationen befüllt.
          </p>
        </div>

        <div className="portfolio-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className={`product-shot ${product.palette}`}>
                <div className="work-badge">In Bearbeitung</div>
                <div className="shot-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="shot-body">
                  <div className="shot-sidebar" />
                  <div className="shot-main">
                    <div className="shot-line wide" />
                    <div className="shot-line" />
                    <div className="shot-chart">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <p className="product-kind">{product.kind}</p>
                <h3>{product.name}</h3>
                <p>{product.teaser}</p>
                <div className="product-tags">
                  {product.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div>
                <details>
                  <summary>Warum Platzhalter?</summary>
                  <p>{product.description}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>TechRock baut Softwareprodukte mit technischem Fundament.</h2>
        </div>
        <p>
          Der Fokus liegt auf eigenen Web Apps und Browser Extensions, von der
          Produktidee über Architektur und Frontend bis zu Betrieb, Analyse und
          Weiterentwicklung. Alles aus eine Hand.
        </p>
      </section>

      <footer className="footer">
        <span>TechRock</span>
        <span>Web Apps. Browser Extensions. Product Engineering.</span>
      </footer>
    </main>
  );
}
