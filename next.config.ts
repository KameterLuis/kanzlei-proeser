import type { NextConfig } from "next";

/**
 * Statischer Export für Cloudflare Pages: `npm run build` erzeugt den Ordner `out/`
 * mit fertigem HTML/CSS/JS. Security-Header stehen in public/_headers.
 */
const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Muss mit WIDTHS in scripts/optimize-images.mjs übereinstimmen
    deviceSizes: [640, 1080, 1920, 2560],
    imageSizes: [256, 384],
  },
};

export default nextConfig;
