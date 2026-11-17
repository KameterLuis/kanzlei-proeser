/** Inhalte der Startseite (1:1 von der bisherigen Website übernommen). */

export const leistungen = {
  tagesgeschaeft: [
    "Erstellung von Steuererklärungen",
    "Erstellung von Jahresabschlüssen",
    "Erstellung von Finanzbuchhaltungen",
    "Erstellung von Lohnbuchhaltungen",
    "Prüfung von Steuerbescheiden",
    "Mitwirkung an jeglicher Art von Prüfungen durch Behörden usw.",
  ],
  schwerpunkte: [
    "Steuer- und gesellschaftsrechtliche Gestaltung von Unternehmen",
    "Gestaltung der Unternehmens- und Vermögensnachfolge",
    "Restrukturierung und Sanierung von Unternehmen",
    "Vertretung in Steuerfahndungs- und Steuerstrafverfahren",
    "Vertretung in Finanzgerichtsverfahren u. vor dem Bundesfinanzhof",
    "Starterzentrum der IHK Pfalz für Existenzgründungen",
  ],
};

type LinkGroup = { title: string; links: { label: string; href: string }[] };

/**
 * „Interessante Links im Internet“.
 * Beschriftungen wie im Original; veraltete oder falsche Adressen wurden auf
 * die heute gültigen (HTTPS-)Adressen aktualisiert.
 */
export const linkColumns: LinkGroup[][] = [
  [
    {
      title: "Datenschutz",
      links: [
        { label: "Bundesamt für Sicherheit in der Informationstechnik", href: "https://www.bsi.bund.de/" },
        { label: "Bundesbeauftragter für den Datenschutz", href: "https://www.bfdi.bund.de/" },
        { label: "Das virtuelle Datenschutzbüro", href: "https://www.datenschutz.de/" },
        { label: "Internet-Sicherheit für jedermann", href: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html" },
      ],
    },
    {
      title: "Recht",
      links: [
        { label: "dejure.org", href: "https://dejure.org/" },
        { label: "Deutsches, Europäisches und Internationales Markenrecht", href: "https://www.marken-recht.de/" },
        { label: "Gesetze im Internet", href: "https://www.gesetze-im-internet.de/" },
      ],
    },
    {
      title: "Gerichte",
      links: [
        { label: "Bundesarbeitsgericht", href: "https://www.bundesarbeitsgericht.de/" },
        { label: "Bundesfinanzhof", href: "https://www.bundesfinanzhof.de/" },
        { label: "Bundesgerichtshof", href: "https://www.bundesgerichtshof.de/" },
        { label: "Bundessozialgericht", href: "https://www.bsg.bund.de/" },
        { label: "Bundesverfassungsgericht", href: "https://www.bundesverfassungsgericht.de/" },
        { label: "Bundesverwaltungsgericht", href: "https://www.bverwg.de/" },
        { label: "Europäischer Gerichtshof", href: "https://curia.europa.eu/" },
      ],
    },
    {
      title: "Bundesbehörden",
      links: [
        { label: "Bund.de", href: "https://www.bund.de/" },
        { label: "Bundesagentur für Arbeit", href: "https://www.arbeitsagentur.de/" },
        { label: "Bundesministerium der Finanzen", href: "https://www.bundesfinanzministerium.de/" },
        { label: "Bundesministerium für Wirtschaft und Arbeit (BMWA)", href: "https://www.bundeswirtschaftsministerium.de/" },
        { label: "Bundesministerium der Justiz", href: "https://www.bmj.de/" },
        { label: "Bundesministerium für Bildung und Forschung BMBF", href: "https://www.bmbf.de/" },
        { label: "Bundesministerium für Ernährung, Landwirtschaft und Verbraucherschutz", href: "https://www.bmel.de/" },
        { label: "Bundesrechnungshof", href: "https://www.bundesrechnungshof.de/" },
        { label: "Bundesumweltministerium", href: "https://www.bundesumweltministerium.de/" },
        { label: "Bundeszentralamt für Steuern", href: "https://www.bzst.de/" },
        { label: "Statistisches Bundesamt", href: "https://www.destatis.de/" },
        { label: "Umweltbundesamt", href: "https://www.umweltbundesamt.de/" },
      ],
    },
    {
      title: "Berufsgenossenschaftliche Organisationen",
      links: [{ label: "DATEV eG", href: "https://www.datev.de/" }],
    },
    {
      title: "Parlament, Regierung, Europäische Union",
      links: [
        { label: "Bundeskanzleramt", href: "https://www.bundesregierung.de/" },
        { label: "Deutscher Bundestag", href: "https://www.bundestag.de/" },
        { label: "Deutscher Bundesrat", href: "https://www.bundesrat.de/" },
        { label: "Europäische Union", href: "https://european-union.europa.eu/" },
      ],
    },
  ],
  [
    {
      title: "Interessenvertretungen",
      links: [
        { label: "BDA Bundesvereinigung der Deutschen Arbeitgeberverbände", href: "https://arbeitgeber.de/" },
        { label: "BDI Bundesverband der Deutschen Industrie", href: "https://bdi.eu/" },
        { label: "BFB Bundesverband der Freien Berufe", href: "https://www.freie-berufe.de/" },
        { label: "BGA Bundesverband des Deutschen Groß- und Außenhandels", href: "https://www.bga.de/" },
        { label: "BITKOM", href: "https://www.bitkom.org/" },
        { label: "Deutscher Hotel- und Gaststättenverband", href: "https://www.dehoga-bundesverband.de/" },
        { label: "DIHT Deutscher Industrie- und Handelstag", href: "https://www.dihk.de/" },
        { label: "Hauptverband des Deutschen Einzelhandels", href: "https://einzelhandel.de/" },
        { label: "Zentralverband des Deutschen Handwerks", href: "https://www.zdh.de/" },
      ],
    },
    {
      title: "Internationale Rechnungslegung",
      links: [
        { label: "Deutsche Börse Group", href: "https://www.deutsche-boerse.com/" },
        { label: "Deutsches Rechnungslegungs Standards Committee e.V.", href: "https://www.drsc.de/" },
        { label: "Web-Seite der Europäischen Union", href: "https://european-union.europa.eu/" },
        { label: "Financial Accounting Standards Board", href: "https://www.fasb.org/" },
        { label: "International Accounting Standards Board (IASB)", href: "https://www.ifrs.org/" },
        { label: "Fédération des Experts Comptables Européen (FEE)", href: "https://accountancyeurope.eu/" },
        { label: "IASplus Informationen über IAS/IFRS & Co.", href: "https://www.iasplus.com/" },
        { label: "International Federation of Accountants (IFAC)", href: "https://www.ifac.org/" },
        { label: "Internationale Vereinigung nationaler Börsenaufsichtsbehörden", href: "https://www.iosco.org/" },
        { label: "Börsenaufsicht in den USA", href: "https://www.sec.gov/" },
      ],
    },
    {
      title: "Kammern und Verbände",
      links: [
        { label: "Bundesnotarkammer", href: "https://www.bnotk.de/" },
        { label: "Bundesrechtsanwaltskammer", href: "https://www.brak.de/" },
        { label: "Bundessteuerberaterkammer", href: "https://www.bstbk.de/" },
        { label: "Deutscher Anwaltverein (Dachverband)", href: "https://anwaltverein.de/" },
        { label: "Deutscher Juristinnenbund", href: "https://www.djb.de/" },
        { label: "Deutscher Steuerberaterverband / DStV Mitgliedsverbände", href: "https://www.dstv.de/" },
        { label: "Deutsches wissenschaftliches Institut der Steuerberater", href: "https://www.dws-institut.de/" },
        { label: "Institut der Wirtschaftsprüfer in Deutschland e.V.", href: "https://www.idw.de/" },
        { label: "Wirtschaftsprüferkammer", href: "https://www.wpk.de/" },
      ],
    },
  ],
];
