/**
 * Bild-Loader für den statischen Export: verweist auf die beim Build erzeugten
 * WebP-Varianten (siehe scripts/optimize-images.mjs).
 * Aus "/images/bg-welcome.jpg" + Breite 1080 wird "/images/opt/bg-welcome-1080.webp".
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const match = src.match(/^\/images\/([^/]+)\.(jpe?g|png)$/i);
  if (!match) return src;
  return `/images/opt/${match[1]}-${width}.webp`;
}
