/** Zentrale Stammdaten der Kanzlei – hier ändern, wirkt überall auf der Seite. */
export const site = {
  url: "https://steuerbuero-proeser.de",
  name: "Steuerkanzlei Wolfgang Pröser",
  shortName: "Steuerkanzlei Pröser",
  owner: "Wolfgang Pröser",
  title: "Pröser Steuerkanzlei - Steuerberater und Rechtsbeistand Wolfgang Pröser",
  description:
    "Steuerkanzlei Wolfgang Pröser, Steuerberatung und Rechtsbeistand, Kaiserslautern Rheinland-Pfalz",
  keywords: [
    "Steuererklärung",
    "Finanzen",
    "Finanzbuchhaltung",
    "Lohnabrechnung",
    "Lohnbuchhaltungen",
    "Gehaltsabrechnung",
    "Jahresabschluss",
    "Steuern",
    "Bilanzbuchhaltung",
    "Bilanzen",
    "Tax",
    "Steuerberatung",
    "Steuerkanzlei",
    "Rechtsbeistand",
    "Kaiserslautern",
  ],
  address: {
    street: "Badstraße 4",
    note: "Eingang Hechtstraße",
    zip: "67655",
    city: "Kaiserslautern",
    region: "Rheinland-Pfalz",
    country: "DE",
    geo: { lat: 49.4412431, lng: 7.7738281 },
  },
  phone: { display: "+49 (0) 631 - 362 14 - 0", href: "tel:+496313621400" },
  fax: { display: "+49 (0) 631 - 362 14 - 25", href: "fax:+4963136214025" },
  email: "info@kanzlei-proeser.de",
  web: { display: "www.kanzlei-proeser.de", href: "https://www.kanzlei-proeser.de" },
  mapsUrl:
    "https://www.google.com/maps/place/Wolfgang+Pr%C3%B6ser/@49.4412451,7.7737048,21z/data=!4m5!3m4!1s0x410c9eff71207aab:0x5bad87963fce7de2!8m2!3d49.4412431!4d7.7738281",
  hours: [
    { label: "Montag - Donnerstag", time: "7:30 - 16:30 Uhr", days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "16:30" },
    { label: "Freitag", time: "7:30 - 13:30 Uhr", days: ["Friday"], opens: "07:30", closes: "13:30" },
  ],
} as const;

export const mainNav = [
  { id: "willkommen", label: "Willkommen" },
  { id: "das-sind-wir", label: "Das sind wir" },
  { id: "kanzleileistungen", label: "Leistungen" },
  { id: "kontakt", label: "Kontakt" },
] as const;

export const legalNav = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/haftungsausschluss", label: "Haftungsausschluss" },
] as const;
