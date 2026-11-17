# Steuerkanzlei Wolfgang Pröser – Website

Neuaufbau von [steuerbuero-proeser.de](https://steuerbuero-proeser.de/) mit **Next.js 16** (App Router, TypeScript).
Inhalt, Aufbau und Optik entsprechen der bisherigen Seite – technisch auf aktuellem Stand.

## Schnellstart

Voraussetzung: [Node.js](https://nodejs.org/) ab Version 20.9.

```bash
npm install      # installiert alles und lädt die Fotos der alten Seite nach public/images
npm run dev      # Entwicklungsserver auf http://localhost:3000
```

Für den Live-Betrieb:

```bash
npm run build    # erzeugt die fertige Seite im Ordner out/
npm run preview  # out/ lokal ansehen
```

Falls beim Installieren die Fotos nicht geladen werden konnten: `npm run images` erneut ausführen
oder die Dateien `bg-welcome.jpg`, `bg-services.jpg`, `bg-contact.jpg` und `wolfgang-proeser.jpg`
manuell nach `public/images/` legen. **Die Bilder danach mit ins Git-Repository aufnehmen.**

## Wo ändere ich was?

| Was                                         | Datei                                     |
| ------------------------------------------- | ----------------------------------------- |
| Adresse, Telefon, E-Mail, Bürozeiten        | `src/lib/site.ts`                         |
| Leistungen und „Interessante Links“         | `src/lib/content.ts`                      |
| Texte der Startseite                        | `src/app/page.tsx`                        |
| Impressum / Datenschutz / Haftungsausschluss | `src/app/<seite>/page.tsx`                |
| Farben, Schriften, Abstände                 | `src/app/globals.css` (oben: Variablen)   |
| Bilder                                      | `public/images/`                          |

## Was ist neu gegenüber der alten Seite?

- **Performance:** Bilder werden beim Build als WebP in mehreren Größen erzeugt
  (`scripts/optimize-images.mjs`) und passend zum Bildschirm ausgeliefert; kein jQuery mehr.
- **Mobil:** durchgehend responsiv (auch Tablet), Menü-Button für Smartphones.
- **Barrierefreiheit:** semantisches HTML, Tastaturbedienung, „Zum Inhalt springen“-Link,
  Rücksicht auf „Bewegung reduzieren“, Lightbox mit nativem `<dialog>`.
- **SEO:** Metadaten, Open Graph, strukturierte Daten (Schema.org `AccountingService`),
  `sitemap.xml` und `robots.txt`.
- **Datenschutz:** Schriften liegen lokal (keine Google-Fonts-Abfrage), keine Cookies, kein Tracking.
- **Sicherheit:** HTTPS-Links, Security-Header (`public/_headers`).
- **Korrekturen:** Footer-Adresse („67655 Kaiserslautern“ statt doppelter Straße),
  veraltete Link-Adressen aktualisiert.

## Rechtstexte

Impressum, Datenschutz und Haftungsausschluss entsprechen den bisherigen Texten. Angepasst wurde nur,
was nicht mehr stimmte:

- Gesetzesverweise: TMG → DDG, RStV → MStV, StBGebV → StBVV, TMG (Datenschutz) → TDDDG
- Datenschutz: Abschnitte zu Cookies, eingebettetem Google Maps und Google Fonts an die neue Seite
  angepasst (keine Cookies, Maps nur als Link, Schriften lokal); Kontaktformular entfernt (gibt es nicht);
  Beschwerderecht bei der Aufsichtsbehörde ergänzt.

Bitte vor dem Livegang prüfen (lassen).

## Hosting: Cloudflare Pages

Die Seite wird als statischer Export gebaut (`output: "export"` in `next.config.ts`) und läuft
damit ohne Server auf Cloudflare Pages.

| Einstellung in Cloudflare Pages | Wert                             |
| ------------------------------- | -------------------------------- |
| Framework preset                | Next.js (Static HTML Export)     |
| Build command                   | `npm run build`                  |
| Build output directory          | `out`                            |
| Node-Version                    | aus `.node-version` (22)         |

**Variante A – mit GitHub verbunden:** Jeder Push auf `main` wird automatisch veröffentlicht.

**Variante B – direkt vom eigenen Rechner (ohne GitHub):**

```bash
npm run deploy
```

Baut die Seite und lädt `out/` per Wrangler zu Cloudflare Pages hoch (Projekt `steuerkanzlei-proeser`).
Beim ersten Mal öffnet sich der Browser zur Cloudflare-Anmeldung.
HTTP-Header (Sicherheit, Caching) stehen in `public/_headers`.
