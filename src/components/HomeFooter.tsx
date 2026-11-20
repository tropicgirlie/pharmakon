import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function HomeFooter() {
  return (
    <footer className="relative bg-[color:var(--forest)] text-[color:var(--bone)]">
      {/* Big closing manifesto */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <span className="chip" style={{ background: "transparent", borderColor: "rgba(246,239,224,0.4)", color: "var(--bone)" }}>
          <MaterialIcon name="forest" style={{ fontSize: 14 }} />
          Carry it forward
        </span>
        <h2
          className="mt-8 font-display tracking-brand text-[color:var(--bone)] leading-[0.92] max-w-5xl"
          style={{ fontSize: "clamp(2.6rem, 8vw, 7.5rem)" }}
        >
          Read, cite, <span className="italic text-[color:var(--ochre)]">credit.</span>
          <br />
          Walk softer in the forest<br />
          <span className="italic text-[color:var(--urucum)]">you now know a little of.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <p className="text-lg text-[color:var(--bone)]/85 max-w-2xl leading-relaxed">
            The archive grows with every entry that names its source and every reader who passes the
            knowledge on without pretending it began with them. If an elder, a community, or a healer
            belongs on these pages and isn&apos;t. Write and we&apos;ll listen.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/explore" className="m3-filled">
              <MaterialIcon name="travel_explore" style={{ fontSize: 20 }} />
              Open the archive
            </Link>
            <a
              href="mailto:hello@pharmakon.garden"
              className="m3-tonal"
              style={{ background: "var(--ochre)", color: "var(--ink)" }}
            >
              <MaterialIcon name="mail" style={{ fontSize: 20 }} />
              Suggest an entry
            </a>
          </div>
        </div>
      </div>

      <div
        className="border-t border-[color:var(--bone)]/15"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[color:var(--bone)]/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[color:var(--urucum)] flex items-center justify-center">
              <MaterialIcon name="eco" filled style={{ fontSize: 18 }} />
            </div>
            <div>Pharmakon · The Living Archive</div>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span>Knowledge credited to its keepers</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} · Public good</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
