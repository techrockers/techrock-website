import Image from "next/image";
import { withBasePath } from "../src/github-pages";

type Product = {
  name: string;
  kind: string;
  teaser: string;
  description: string;
  stats: string[];
  badge: string;
  badgeTone?: string;
  detailsLabel: string;
  palette?: string;
  shotClass?: string;
  image?: `/${string}`;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
};

const products: Product[] = [
  {
    name: "Sag Mal Ehrlich",
    kind: "Real Life Gesellschaftsspiel",
    teaser:
      "Unterhaltsame Real Life Gesellschafts-App für die etwas informativeren Abende mit Freunden, Familie und vor allem mit Leuten, die man noch nicht so gut kennt.",
    description:
      "Sag Mal Ehrlich ist eine unterhaltsame Gesellschafts-App für die etwas informativeren Abende mit Freunden, Familie und vor allem mit Leuten, die man noch nicht so gut kennt. Wählt aus verschiedenen Kategorien und stellt euch spannenden, witzigen oder tiefgründigen Fragen.\n\nOb als virtuelles Flaschendrehen mit einem jeweiligen Auserwählten oder als swipebare Karten an die ganze Runde – ihr habt die Wahl.",
    image: "/mal-ehrlich.logo.png",
    imageAlt: "Sag Mal Ehrlich",
    imageWidth: 167,
    imageHeight: 90,
    shotClass: "mal-ehrlich-shot",
    url: "https://sag-mal-ehrlich.de",
    badge: "Online",
    badgeTone: "online",
    detailsLabel: "Details",
    stats: ["Progressive Web App", "TypeScript", "React", "Next.js", "Firebase"],
  },
  {
    name: "Platzhalter: Browser Extension",
    kind: "In Bearbeitung",
    teaser: "Hier wird bald ein Projekt vorgestellt.",
    description:
      "Die Seite befindet sich gerade noch in der Entstehung. Nähere Infos zu bestehenden Projekten folgen bald.",
    palette: "ridge",
    badge: "In Bearbeitung",
    detailsLabel: "Warum Platzhalter?",
    stats: ["Coming soon", "Extension", "Manifest V3"],
  },
  {
    name: "Platzhalter: Weiteres Produkt",
    kind: "In Bearbeitung",
    teaser: "Hier wird bald ein Projekt vorgestellt.",
    description:
      "Die Seite befindet sich gerade noch in der Entstehung. Nähere Infos zu bestehenden Projekten folgen bald.",
    palette: "ice",
    badge: "In Bearbeitung",
    detailsLabel: "Warum Platzhalter?",
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
  "GitHub",
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
          <Image
            src={withBasePath("/mountain.png")}
            alt=""
            width={200}
            height={200}
            className="brand-mark"
          />
          <Image
            src={withBasePath("/techrock.webp")}
            alt="TechRock"
            width={256}
            height={43}
            className="brand-logo"
          />
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
            <Image
              src={withBasePath("/mountain.png")}
              alt=""
              width={200}
              height={200}
            />
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
            Von der Idee zum Produkt mit professionell-pragmatischer
            Arbeitsweise und modernem Tech Stack.
          </h2>
        </div>
        <div className="section-copy">
          <p>
            TechRock kreiert aus Ideen funktionierende, moderne Produkte. Die
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
          <h2>Produkte mit eigener Roadmap.</h2>
          <p>
            Ein kompakter Einblick in Produktlinien für Web, Browser und
            datengetriebene Arbeitsabläufe. Jede Karte enthält einen
            Screenshot-Entwurf, einen kurzen Teaser und Details auf Klick.
          </p>
        </div>

        <div className="portfolio-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div
                className={[
                  "product-shot",
                  product.palette,
                  product.shotClass,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={`work-badge ${product.badgeTone ?? ""}`}>
                  {product.badge}
                </div>
                {product.image ? (
                  <div className="product-logo-stage">
                    <Image
                      src={withBasePath(product.image)}
                      alt={product.imageAlt ?? product.name}
                      width={product.imageWidth ?? 167}
                      height={product.imageHeight ?? 90}
                      className="product-logo"
                    />
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
              <div className="product-content">
                <p className="product-kind">{product.kind}</p>
                <h3>
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-title-link"
                    >
                      {product.name}
                    </a>
                  ) : (
                    product.name
                  )}
                </h3>
                <p>{product.teaser}</p>
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-cta-link"
                  >
                    App aufrufen <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                <div className="product-tags">
                  {product.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div>
                <details>
                  <summary>{product.detailsLabel}</summary>
                  {product.description.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-cta-link"
                    >
                      App aufrufen <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
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
        <div>
          <p className="eyebrow">Arbeitsweise</p>
          <p>
            Der Fokus liegt auf eigenen Web Apps und Browser Extensions, von der
            Produktidee über Architektur und Frontend bis zu Betrieb, Analyse
            und Weiterentwicklung. Alles aus eine Hand.
          </p>
        </div>
      </section>

      <footer className="footer">
        <span>TechRock</span>
        <span>Web Apps. Browser Extensions. Product Engineering.</span>
      </footer>
    </main>
  );
}
