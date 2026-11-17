import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Haftungsausschluss",
  alternates: { canonical: "/haftungsausschluss" },
};

/* HINWEIS: Die bisherige Seite war leer. Allgemeiner Entwurf – bitte prüfen. */
export default function HaftungsausschlussPage() {
  return (
    <LegalPage title="Haftungsausschluss">
      <h2>Inhalte dieser Website</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Die Informationen ersetzen keine
        individuelle steuerliche oder rechtliche Beratung. Ein Mandatsverhältnis kommt erst durch eine
        ausdrückliche Vereinbarung zustande.
      </p>

      <h2>Links auf externe Websites</h2>
      <p>
        Unsere Website enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben. Für diese
        fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der
        Verlinkung waren keine Rechtsverstöße erkennbar. Werden uns Rechtsverletzungen bekannt, entfernen wir
        die betreffenden Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte und Bilder unterliegen dem deutschen Urheberrecht. Eine
        Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf der
        vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
      </p>
    </LegalPage>
  );
}
