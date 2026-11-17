type Props = {
  /** dark = grau auf hellem Grund, light = weiß auf Foto, muted = Footer */
  tone?: "dark" | "light" | "muted";
  className?: string;
};

const colors = {
  dark: { line: "#666666", star: "#ffffff" },
  light: { line: "#ffffff", star: "#3f3f3f" },
  muted: { line: "#888888", star: "#333333" },
};

/** Zierlinie mit Stern – ersetzt divider*.png des Originals als gestochen scharfes SVG. */
export function Divider({ tone = "dark", className }: Props) {
  const c = colors[tone];
  return (
    <svg
      className={className}
      width="200"
      height="26"
      viewBox="0 0 200 26"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 13.5h86M114 13.5h86" stroke={c.line} strokeWidth="1" />
      <circle cx="100" cy="13" r="10" fill={c.line} />
      <g stroke={c.star} strokeWidth="2" strokeLinecap="round">
        <path d="M100 8v10" />
        <path d="M95.67 10.5l8.66 5" />
        <path d="M95.67 15.5l8.66-5" />
      </g>
    </svg>
  );
}
