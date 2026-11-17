import Link from "next/link";
import { legalNav, mainNav, site } from "@/lib/site";
import { Divider } from "./Divider";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    ...mainNav.map((n) => ({ href: `/#${n.id}`, label: n.label })),
    ...legalNav,
  ];

  return (
    <footer className="footer">
      <div className="inner">
        <nav className="footer__menu" aria-label="Fußzeilennavigation">
          {links.map((l, i) => (
            <span key={l.href}>
              {i > 0 && <span aria-hidden="true"> | </span>}
              <Link href={l.href}>{l.label}</Link>
            </span>
          ))}
        </nav>

        <Divider tone="muted" className="footer__divider" />

        <address className="footer__address">
          <p>© {year} {site.name}</p>
          <p>
            {site.address.street} | {site.address.zip} {site.address.city}
          </p>
          <p>
            Tel: <a href={site.phone.href}>{site.phone.display}</a> | Fax: {site.fax.display}
          </p>
          <p>
            <a href={site.web.href}>{site.web.display}</a>
          </p>
        </address>
      </div>
    </footer>
  );
}
