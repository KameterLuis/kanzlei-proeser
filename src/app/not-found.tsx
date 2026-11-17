import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export default function NotFound() {
  return (
    <LegalPage title="Seite nicht gefunden">
      <p>Die gewünschte Seite existiert leider nicht (mehr).</p>
      <p>
        <Link href="/">Zur Startseite</Link>
      </p>
    </LegalPage>
  );
}
