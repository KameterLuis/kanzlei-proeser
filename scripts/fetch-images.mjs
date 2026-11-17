/**
 * Lädt die Fotos der bisherigen Website einmalig nach public/images herunter.
 * Läuft automatisch nach `npm install` (postinstall) und überspringt bereits
 * vorhandene Dateien. Schlägt der Download fehl, bricht die Installation nicht ab.
 *
 * Tipp: Die heruntergeladenen Bilder anschließend mit ins Git-Repository
 * aufnehmen, damit das Projekt nicht dauerhaft von der alten Seite abhängt.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://steuerbuero-proeser.de/assets/images";
const TARGET = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

const files = [
  ["bg/bg-welcome.jpg", "bg-welcome.jpg"],
  ["bg/bg-services.jpg", "bg-services.jpg"],
  ["bg/bg-contact.jpg", "bg-contact.jpg"],
  ["Wolfgang-Proeser.jpg", "wolfgang-proeser.jpg"],
];

mkdirSync(TARGET, { recursive: true });

let failed = 0;
for (const [remote, local] of files) {
  const dest = join(TARGET, local);
  if (existsSync(dest)) continue;
  try {
    const res = await fetch(`${ORIGIN}/${remote}`, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`✓ ${local}`);
  } catch (err) {
    failed++;
    console.warn(`✗ ${local} konnte nicht geladen werden (${err.message})`);
  }
}

if (failed) {
  console.warn(
    `\n${failed} Bild(er) fehlen noch. Später erneut versuchen mit: npm run images\n` +
      `oder die Dateien manuell nach public/images/ kopieren.`,
  );
}
