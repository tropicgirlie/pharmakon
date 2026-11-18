import MaterialIcon from "./MaterialIcon";

type Block = {
  num: string;
  headline: React.ReactNode;
  body: string;
  bg: string;
  text: string;
  accent: string;
  shape: string;
};

const BLOCKS: Block[] = [
  {
    num: "I",
    headline: (
      <>
        The jungle is <em className="italic">not commercial.</em> It is knowledge for the world.
      </>
    ),
    body:
      "Thousands of years of careful stewardship made the Amazon what it is. Every tree that heals, every bark that stains, every seed that sings — planted, pruned, remembered, taught from one generation to the next.",
    bg: "var(--urucum)",
    text: "var(--bone)",
    accent: "var(--sun)",
    shape: "url(#clipCookie)",
  },
  {
    num: "II",
    headline: (
      <>
        Behind every molecule is a <em className="italic">name</em>, a{" "}
        <em className="italic">community</em>, a <em className="italic">ritual</em>.
      </>
    ),
    body:
      "The vine in Chanel N°5. The bark that calmed a child's fever in Manaus. The root a Shipibo healer sings over at dawn. Separate a plant from its people and you lose the medicine twice.",
    bg: "var(--ochre)",
    text: "var(--ink)",
    accent: "var(--acai)",
    shape: "url(#clipClover)",
  },
  {
    num: "III",
    headline: (
      <>
        <em className="italic">No</em> biopiracy. Ever. Full stop.
      </>
    ),
    body:
      "Documenting is not extracting. This archive names origins, credits elders, and refuses the colonial habit of turning sacred knowledge into patented returns.",
    bg: "var(--forest)",
    text: "var(--bone)",
    accent: "var(--sage)",
    shape: "url(#clipDiamond)",
  },
  {
    num: "IV",
    headline: (
      <>
        A gift <em className="italic">accurately recorded</em> is still a gift.
      </>
    ),
    body:
      "Our job is to listen, cross-reference, and make visible. The forest gave the world medicine. The least the world can do is remember who held the garden.",
    bg: "var(--acai)",
    text: "var(--bone)",
    accent: "var(--sun)",
    shape: "url(#clipPentagon)",
  },
];

export default function HomeManifesto() {
  return (
    <section id="manifesto" className="relative py-20 lg:py-28 bg-[color:var(--bone)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-16">
        <span className="chip chip-outline">
          <MaterialIcon name="format_quote" style={{ fontSize: 14 }} />
          Manifesto
        </span>
        <h2
          className="mt-6 font-display tracking-brand text-[color:var(--ink)] leading-[0.92] max-w-5xl"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
        >
          Four principles<br />
          <span className="italic text-[color:var(--urucum)]">that hold this archive together.</span>
        </h2>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {BLOCKS.map((b, i) => (
          <article
            key={b.num}
            className="tile-lg p-10 md:p-12 relative overflow-hidden reveal min-h-[420px] flex flex-col justify-between"
            style={{ background: b.bg, color: b.text }}
          >
            {/* Floating decorative shape */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48"
              style={{ background: b.accent, clipPath: b.shape }}
              aria-hidden
            />

            <div className="relative">
              <div className="flex items-baseline gap-4">
                <span
                  className="font-display text-7xl md:text-8xl leading-none"
                  style={{ color: b.text, opacity: 0.4 }}
                >
                  {b.num}
                </span>
                <span
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: b.text, opacity: 0.7 }}
                >
                  N°{String(i + 1).padStart(2, "0")} of 4
                </span>
              </div>
              <h3
                className="mt-6 font-display tracking-brand leading-[1.02] max-w-[26ch]"
                style={{ color: b.text, fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)" }}
              >
                {b.headline}
              </h3>
            </div>

            <p
              className="relative mt-8 text-base md:text-lg leading-relaxed max-w-[42ch]"
              style={{ color: b.text, opacity: 0.88 }}
            >
              {b.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
