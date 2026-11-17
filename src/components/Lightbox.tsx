"use client";

import Image from "next/image";
import { useRef } from "react";
import { CloseIcon } from "./Icons";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Anzeigegröße des Vorschaubilds */
  thumbWidth: number;
  thumbHeight: number;
};

/** Vorschaubild, das per Klick groß geöffnet wird – mit nativem <dialog> (barrierefrei, ohne Bibliothek). */
export function Lightbox({ src, alt, width, height, thumbWidth, thumbHeight }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <a
        href={src}
        className="lightbox__trigger"
        onClick={(e) => {
          e.preventDefault();
          dialogRef.current?.showModal();
        }}
        aria-label={`${alt} – Bild vergrößern`}
      >
        <Image src={src} alt={alt} width={thumbWidth} height={thumbHeight} sizes="(max-width: 767px) 100vw, 300px" />
      </a>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={alt}
        onClick={(e) => {
          // Klick auf den Hintergrund schließt
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          type="button"
          className="lightbox__close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Schließen"
        >
          <CloseIcon />
        </button>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 1100px) 92vw, 1024px" />
      </dialog>
    </>
  );
}
