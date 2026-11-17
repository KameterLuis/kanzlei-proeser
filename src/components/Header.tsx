"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/lib/site";
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(isHome ? "willkommen" : "");

  // Hebt den Menüpunkt des gerade sichtbaren Abschnitts hervor (wie jquery.nav im Original).
  useEffect(() => {
    if (!isHome) return;
    const sections = mainNav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current: string = mainNav[0].id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top - offset <= 0) current = s.id;
      }
      // Ganz unten angekommen → letzter Menüpunkt
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = mainNav[mainNav.length - 1].id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // Menü bei Escape schließen
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="site-top">
      <div className="topbar">
        <div className="topbar__inner">
          <a href={site.phone.href} className="topbar__item">
            <PhoneIcon />
            {site.phone.display}
          </a>
          <a href={`mailto:${site.email}`} className="topbar__item">
            <MailIcon />
            {site.email}
          </a>
        </div>
      </div>

      <header className="header">
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label={`${site.shortName} – zur Startseite`}>
            <Image
              src="/images/proeser_logo.png"
              alt="Steuerbüro Pröser - Logo"
              width={210}
              height={75}
              priority
            />
          </Link>

          <nav className="main-nav" aria-label="Hauptnavigation">
            <button
              type="button"
              className="main-nav__toggle"
              aria-expanded={open}
              aria-controls="main-nav-list"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
              <span className="visually-hidden">{open ? "Menü schließen" : "Menü öffnen"}</span>
            </button>
            <ul id="main-nav-list" className={`main-nav__list${open ? " is-open" : ""}`}>
              {mainNav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    className={active === item.id ? "is-current" : undefined}
                    aria-current={active === item.id ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
