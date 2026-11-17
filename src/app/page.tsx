import { BackToTop } from "@/components/BackToTop";
import { Divider } from "@/components/Divider";
import { GlobeIcon, MailIcon, PhoneIcon, PrintIcon } from "@/components/Icons";
import { Lightbox } from "@/components/Lightbox";
import { Parallax } from "@/components/Parallax";
import { leistungen, linkColumns } from "@/lib/content";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/wolfgang-proeser.jpg`,
  logo: `${site.url}/images/proeser_logo.png`,
  telephone: "+49 631 362140",
  faxNumber: "+49 631 3621425",
  email: site.email,
  founder: { "@type": "Person", name: site.owner, jobTitle: "Steuerberater und Rechtsbeistand" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
  hasMap: site.mapsUrl,
  openingHoursSpecification: site.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───── Willkommen ───── */}
      <Parallax as="section" id="willkommen" src="/images/bg-welcome.jpg" priority className="hero">
        <div className="inner hero__content">
          <h1>Schön, dass Sie uns gefunden haben!</h1>
          <Divider tone="light" />
          <p className="hero__subtitle">
            Willkommen bei der
            <br /> {site.name}
          </p>
        </div>
      </Parallax>

      {/* ───── Das sind wir ───── */}
      <section id="das-sind-wir" className="section bg-1" aria-labelledby="das-sind-wir-title">
        <div className="inner">
          <div className="section-title">
            <h2 id="das-sind-wir-title">Das sind wir!</h2>
            <Divider />
          </div>
          <p className="section-subtitle">
            Geschichtliche Entwicklung
            <br /> Steuerberater und Rechtsbeistand {site.owner}
          </p>

          <div className="grid-2 about">
            <blockquote className="quote">
              <p>
                Unsere Dienstleistungen bestehen hauptsächlich in der vorausschauenden Beratung für eine
                optimale Steuergestaltung, der Erstellung von Buchführungen, Jahresabschlüssen und
                Steuererklärungen sowie der anschließenden Überprüfung von Steuerbescheiden und der
                Vertretung von Mandanten in außergerichtlichen und gerichtlichen Verfahren.
              </p>
            </blockquote>
            <div>
              <h3 className="column-title">Was können wir für Sie tun?</h3>
            </div>
          </div>
        </div>
      </section>

      <Parallax src="/images/bg-services.jpg" className="band" />

      {/* ───── Leistungen ───── */}
      <section id="kanzleileistungen" className="section bg-2" aria-labelledby="leistungen-title">
        <div className="inner">
          <div className="section-title">
            <h2 id="leistungen-title">Kanzleileistungen im Überblick</h2>
            <Divider />
          </div>
          <div className="grid-2">
            <div>
              <h3 className="column-title">Unser Tagesgeschäft</h3>
              <ul className="star-list">
                {leistungen.tagesgeschaeft.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="column-title">Unsere Schwerpunkte</h3>
              <ul className="star-list">
                {leistungen.schwerpunkte.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Links ───── */}
      <section id="links" className="links bg-2" aria-labelledby="links-title">
        <div className="inner">
          <h2 id="links-title" className="section-subtitle links__title">
            Interessante Links im Internet
          </h2>
          <div className="grid-2 links__grid">
            {linkColumns.map((column, ci) => (
              <div key={ci}>
                {column.map((group) => (
                  <div key={group.title} className="links__group">
                    <h3>{group.title}</h3>
                    <ul>
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                            <span className="visually-hidden"> (öffnet in neuem Tab)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Parallax src="/images/bg-contact.jpg" className="band" />

      {/* ───── Kontakt ───── */}
      <section id="kontakt" className="section section--contact bg-1" aria-labelledby="kontakt-title">
        <div className="inner">
          <div className="section-title">
            <h2 id="kontakt-title">Was können wir für Sie tun?</h2>
            <Divider />
          </div>
          <p className="section-subtitle">Treten Sie in Kontakt mit uns!</p>

          <div className="contact">
            <h3 className="column-title contact__title">Kontakt</h3>
            <div className="contact__grid">
              <div className="contact__text">
                <address>
                  <p>
                    <strong>{site.shortName}</strong>
                    <br />
                    {site.address.street} ({site.address.note})
                    <br />
                    {site.address.zip} {site.address.city}
                  </p>
                </address>
                <p>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Hier finden Sie unsere Anfahrtsbeschreibung mit Google Maps
                  </a>
                </p>
                <p>
                  <strong>Bürostunden:</strong>
                  {site.hours.map((h) => (
                    <span key={h.label}>
                      <br />
                      {h.label} {h.time}
                    </span>
                  ))}
                </p>
                <p>Ausserhalb der Bürostunden stehen wir Ihnen auch gerne nach Terminabsprache zur Verfügung.</p>

                <ul className="contact-icons">
                  <li>
                    <PhoneIcon />
                    <span className="visually-hidden">Telefon: </span>
                    <a href={site.phone.href}>{site.phone.display}</a>
                  </li>
                  <li>
                    <PrintIcon />
                    <span className="visually-hidden">Fax: </span>
                    {site.fax.display}
                  </li>
                  <li>
                    <MailIcon />
                    <span className="visually-hidden">E-Mail: </span>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <GlobeIcon />
                    <span className="visually-hidden">Website: </span>
                    <a href={site.web.href}>{site.web.display}</a>
                  </li>
                </ul>
              </div>

              <figure className="contact__image">
                <Lightbox
                  src="/images/wolfgang-proeser.jpg"
                  alt={site.owner}
                  width={1024}
                  height={683}
                  thumbWidth={350}
                  thumbHeight={233}
                />
              </figure>
            </div>
          </div>
        </div>
        <BackToTop />
      </section>
    </>
  );
}
