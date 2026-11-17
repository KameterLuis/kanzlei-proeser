/**
 * Erzeugt aus den Bildern in public/images/ optimierte WebP-Varianten in
 * mehreren Breiten (public/images/opt/<name>-<breite>.webp).
 *
 * Hintergrund: Beim statischen Export (Cloudflare Pages) gibt es keinen Server,
 * der Bilder zur Laufzeit verkleinert. Deshalb passiert das hier beim Build.
 * Der Bild-Loader (src/lib/image-loader.ts) verweist auf genau diese Dateien.
 *
 * Läuft automatisch vor `npm run dev` und `npm run build`. Bereits erzeugte
 * Dateien werden übersprungen, solange das Original nicht neuer ist.
 */
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Muss mit images.deviceSizes + images.imageSizes in next.config.ts übereinstimmen
export const WIDTHS = [256, 384, 640, 1080, 1920, 2560];
const QUALITY = 72;

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");
const OUT = join(ROOT, "opt");
mkdirSync(OUT, { recursive: true });

const sources = readdirSync(ROOT).filter((f) => /\.(jpe?g|png)$/i.test(f));
if (sources.length === 0) {
  console.error("Keine Bilder in public/images gefunden.");
  process.exit(1);
}

let created = 0;
for (const file of sources) {
  const src = join(ROOT, file);
  const srcTime = statSync(src).mtimeMs;
  const { name } = parse(file);
  const meta = await sharp(src).metadata();

  for (const width of WIDTHS) {
    const dest = join(OUT, `${name}-${width}.webp`);
    if (existsSync(dest) && statSync(dest).mtimeMs >= srcTime) continue;
    await sharp(src)
      .resize({ width: Math.min(width, meta.width ?? width), withoutEnlargement: true })
      .webp({ quality: QUALITY, alphaQuality: 90, effort: 5, lossless: extname(file).toLowerCase() === ".png" && (meta.width ?? 0) < 400 })
      .toFile(dest);
    created++;
  }
}

console.log(`Bilder optimiert: ${created} neu erzeugt, ${sources.length} Originale.`);
