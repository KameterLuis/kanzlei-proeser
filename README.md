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
npm run build
npm start
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

- **Performance:** Bilder werden automatisch als AVIF/WebP in passender Größe ausgeliefert; kein jQuery mehr.
- **Mobil:** durchgehend responsiv (auch Tablet), Menü-Button für Smartphones.
- **Barrierefreiheit:** semantisches HTML, Tastaturbedienung, „Zum Inhalt springen“-Link,
  Rücksicht auf „Bewegung reduzieren“, Lightbox mit nativem `<dialog>`.
- **SEO:** Metadaten, Open Graph, strukturierte Daten (Schema.org `AccountingService`),
  `sitemap.xml` und `robots.txt`.
- **Datenschutz:** Schriften liegen lokal (keine Google-Fonts-Abfrage), keine Cookies, kein Tracking.
- **Sicherheit:** HTTPS-Links, Security-Header (`next.config.ts`).
- **Korrekturen:** Footer-Adresse („67655 Kaiserslautern“ statt doppelter Straße),
  veraltete Link-Adressen aktualisiert.

## ⚠️ Vor dem Livegang

Impressum, Datenschutz und Haftungsausschluss waren auf der alten Seite **leer**.
Die neuen Seiten enthalten Entwürfe; gelb markierte Stellen (`[ … ]`) müssen ergänzt werden
(u. a. Berufshaftpflichtversicherung, ggf. USt-IdNr., Hosting-Anbieter). Die Texte bitte
vor Veröffentlichung prüfen lassen.

## Hosting

Läuft auf jedem Node.js-Hosting oder z. B. bei Vercel. Für die DSGVO bietet sich ein Hoster
mit Rechenzentrum in Deutschland/EU an.
