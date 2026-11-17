import { ChevronUpIcon } from "./Icons";

/** Roter „Nach oben“-Button am Seitenende (wie im Original). Scrollt per CSS smooth-scroll. */
export function BackToTop() {
  return (
    <a href="#top" className="to-top" title="Nach oben">
      <ChevronUpIcon />
      <span className="visually-hidden">Nach oben</span>
    </a>
  );
}
