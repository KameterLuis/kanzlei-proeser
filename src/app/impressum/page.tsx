import type { Metadata } from "next";
import { LegalPage, Todo } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
};

/*
 * HINWEIS: Die bisherige Seite hatte ein leeres Impressum. Dieser Text ist ein
 * Entwurf auf Basis der bekannten Daten. Alle mit [ … ] markierten Stellen
 * müssen vor der Veröffentlichung ergänzt und der Text insgesamt geprüft werden.
 */
export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.owner}
        <br />
        Steuerberater und Rechtsbeistand
        <br />
        {site.shortName}
        <br />
        {site.address.street} ({site.address.note})
        <br />
        {site.address.zip} {site.address.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={site.phone.href}>{site.phone.display}</a>
        <br />
        Telefax: {site.fax.display}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Berufsbezeichnung: Steuerberater (verliehen in der Bundesrepublik Deutschland)
        <br />
        Zuständige Kammer: Steuerberaterkammer Rheinland-Pfalz, Hölderlinstraße 1, 55131 Mainz,{" "}
        <a href="https://www.sbk-rlp.de/" target="_blank" rel="noopener noreferrer">
          www.sbk-rlp.de
        </a>
      </p>
      <p>
        Es gelten insbesondere folgende berufsrechtliche Regelungen: Steuerberatungsgesetz (StBerG),
        Durchführungsverordnung zum Steuerberatungsgesetz (DVStB), Berufsordnung der Steuerberater (BOStB)
        und Steuerberatervergütungsverordnung (StBVV). Die Regelungen können auf der Website der
        Bundessteuerberaterkammer eingesehen werden:{" "}
        <a href="https://www.bstbk.de/" target="_blank" rel="noopener noreferrer">
          www.bstbk.de
        </a>
        .
      </p>
      <p>
        Rechtsbeistand: <Todo>bitte ergänzen – zuständige Kammer bzw. Zulassungsbehörde</Todo>
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        USt-IdNr. gemäß § 27a Umsatzsteuergesetz: <Todo>bitte ergänzen oder Abschnitt entfernen</Todo>
      </p>

      <h2>Berufshaftpflichtversicherung</h2>
      <p>
        <Todo>Name und Anschrift des Versicherers</Todo>
        <br />
        Räumlicher Geltungsbereich: <Todo>bitte ergänzen</Todo>
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
