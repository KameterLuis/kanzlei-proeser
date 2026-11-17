import type { Metadata } from "next";
import { LegalPage, Todo } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz" },
};

/*
 * HINWEIS: Die bisherige Seite hatte keine Datenschutzerklärung. Dieser Text ist
 * ein Entwurf für die neue Seite (keine Cookies, kein Tracking, Schriften lokal).
 * Den Hosting-Anbieter ergänzen und den Text vor Veröffentlichung prüfen lassen.
 */
export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <h2>1. Verantwortlicher</h2>
      <p>
        {site.owner}, {site.shortName}
        <br />
        {site.address.street}, {site.address.zip} {site.address.city}
        <br />
        Telefon: {site.phone.display}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. Allgemeines</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website setzt keine Cookies, verwendet keine
        Analyse- oder Tracking-Werkzeuge und bindet keine Inhalte von Drittanbietern ein. Alle Schriftarten
        werden direkt von unserem Server geladen.
      </p>

      <h2>3. Hosting und Server-Logdateien</h2>
      <p>
        Diese Website wird bei <Todo>Name und Anschrift des Hosting-Anbieters</Todo> betrieben. Beim Aufruf der
        Seiten werden technisch notwendige Daten (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite,
        Browsertyp) in Server-Logdateien verarbeitet. Dies dient dem sicheren und stabilen Betrieb der Website
        (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Die Daten werden nicht mit anderen Datenquellen zusammengeführt
        und nach spätestens <Todo>Speicherdauer, z.&nbsp;B. 14 Tagen</Todo> gelöscht. Mit dem Anbieter besteht ein
        Vertrag zur Auftragsverarbeitung nach Art.&nbsp;28 DSGVO.
      </p>

      <h2>4. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung
        Ihrer Anfrage (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b bzw. f DSGVO). Die Daten werden gelöscht, sobald sie
        nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>5. Links zu anderen Websites</h2>
      <p>
        Unsere Seite enthält Links zu externen Websites, z.&nbsp;B. zu Google Maps. Erst wenn Sie einen solchen
        Link anklicken, werden Daten an den jeweiligen Anbieter übertragen. Für dessen Datenverarbeitung gilt
        die Datenschutzerklärung des Anbieters.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art.&nbsp;15 DSGVO), Berichtigung (Art.&nbsp;16), Löschung
        (Art.&nbsp;17), Einschränkung der Verarbeitung (Art.&nbsp;18), Datenübertragbarkeit (Art.&nbsp;20) sowie
        Widerspruch gegen die Verarbeitung (Art.&nbsp;21 DSGVO). Wenden Sie sich dazu einfach an uns.
      </p>
      <p>
        Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art.&nbsp;77 DSGVO). Für uns
        zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz,{" "}
        <a href="https://www.datenschutz.rlp.de/" target="_blank" rel="noopener noreferrer">
          www.datenschutz.rlp.de
        </a>
        .
      </p>

      <p className="legal__stand">Stand: November 2026</p>
    </LegalPage>
  );
}
