import { Divider } from "./Divider";

/** Gemeinsames Gerüst für Impressum, Datenschutz und Haftungsausschluss. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="legal">
      <div className="inner">
        <div className="section-title">
          <h1>{title}</h1>
          <Divider />
        </div>
        <div className="legal__body">{children}</div>
      </div>
    </article>
  );
}

/** Markiert Stellen, die vor der Veröffentlichung noch ergänzt werden müssen. */
export function Todo({ children }: { children: React.ReactNode }) {
  return <mark className="todo">[{children}]</mark>;
}
