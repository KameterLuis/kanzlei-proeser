import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
};

function Anschrift() {
  return (
    <p>
      {site.owner}
      <br />
      Steuerberater / Rechtsbeistand
      <br />
      {site.address.street}
      <br />
      {site.address.zip} {site.address.city}
    </p>
  );
}

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Anbieterkennung gem. § 5 Digitale-Dienste-Gesetz (DDG)</h2>
      <Anschrift />

      <h3>Kontakt:</h3>
      <p>
        Tel: <a href={site.phone.href}>{site.phone.display}</a>
        <br />
        Fax: {site.fax.display}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Web: <a href={site.web.href}>{site.web.display}</a>
      </p>
      <p>Die gesetzlichen Berufsbezeichnungen wurden in der Bundesrepublik Deutschland verliehen.</p>

      <h2>Zulassungs-/Aufsichtsbehörden:</h2>
      <p>
        Steuerberaterkammer Rheinland-Pfalz
        <br />
        Hölderlinstraße 1
        <br />
        55131 Mainz
      </p>

      <h2>Berufsrechtliche Regelungen:</h2>
      <p>Der Berufsstand der Steuerberater unterliegt im Wesentlichen den folgenden gesetzlichen Regelungen:</p>
      <ul className="legal__list">
        <li>Steuerberatungsgesetz (StBerG)</li>
        <li>Durchführungsverordnung zum Steuerberatungsgesetz (DVStB)</li>
        <li>Berufsordnung (BOStB)</li>
        <li>Steuerberatervergütungsverordnung (StBVV)</li>
      </ul>
      <p>
        Die berufsrechtlichen Regelungen können auf der Homepage der Bundessteuerberaterkammer (
        <a href="https://www.bstbk.de" target="_blank" rel="noopener noreferrer">
          www.bstbk.de
        </a>
        ) eingesehen werden.
      </p>

      <h2>Verantwortlich für den Inhalt gem. § 18 Abs. 2 MStV</h2>
      <Anschrift />

      <h2>Webdesign und Programmierung:</h2>
      <p>
        NEUFORMAT - Büro für Mediendesign
        <br />
        Werkstättestraße 8
        <br />
        67655 Kaiserslautern
        <br />
        Tel: <a href="tel:+496315704898">+49 (0) 631 - 570 48 98</a>
        <br />
        E-Mail: <a href="mailto:info@neuformat.com">info@neuformat.com</a>
        <br />
        Web:{" "}
        <a href="https://www.neuformat.com" target="_blank" rel="noopener noreferrer">
          www.neuformat.com
        </a>
      </p>

      <h2>Widerspruch gegen Werbe-Mails</h2>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
        ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
        der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-E-Mails, vor.
      </p>
    </LegalPage>
  );
}
