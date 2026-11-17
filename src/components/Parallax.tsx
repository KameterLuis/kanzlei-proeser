"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  /** Bewegungsfaktor (Original: 0.25) */
  factor?: number;
  /** true für das Bild ganz oben (über der Falz laden) */
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  as?: "section" | "div";
  ariaLabel?: string;
};

/**
 * Hintergrundbild mit sanftem Parallax-Effekt wie auf der Originalseite.
 * – Nur ab 768 px Breite (wie im Original)
 * – Respektiert „Bewegung reduzieren“ im Betriebssystem
 * – Nutzt transform + requestAnimationFrame statt top/bottom (flüssig, kein Layout-Thrashing)
 */
export function Parallax({
  src,
  factor = 0.25,
  priority = false,
  className,
  children,
  id,
  as: Tag = "div",
  ariaLabel,
}: Props) {
  const wrapRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const layer = layerRef.current;
    if (!wrap || !layer) return;

    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference) and (min-width: 768px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!motionOk.matches) {
        layer.style.transform = "";
        return;
      }
      const rect = wrap.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // Verschiebung relativ zur Mitte des Viewports
      const delta = (rect.top + rect.height / 2 - window.innerHeight / 2) * factor;
      layer.style.transform = `translate3d(0, ${(-delta).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motionOk.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionOk.removeEventListener("change", onScroll);
    };
  }, [factor]);

  return (
    <Tag
      ref={wrapRef as React.Ref<HTMLDivElement>}
      id={id}
      className={`parallax ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      <div ref={layerRef} className="parallax__layer" aria-hidden="true">
        <Image src={src} alt="" fill sizes="100vw" priority={priority} quality={70} />
      </div>
      {children}
    </Tag>
  );
}
