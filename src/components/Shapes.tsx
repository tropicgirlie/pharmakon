/**
 * Material 3 Expressive shape library — SVG clip paths referenced by `.shape-*` classes.
 * Mount <Shapes /> once at the root so clip-path urls resolve.
 */
export default function Shapes() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        {/* Cookie — 12-sided wavy */}
        <clipPath id="clipCookie" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0 C 0.58,0 0.6,0.08 0.66,0.08 C 0.72,0.08 0.78,0.02 0.84,0.08 C 0.9,0.14 0.84,0.2 0.86,0.26 C 0.88,0.32 0.98,0.34 0.98,0.42 C 0.98,0.5 0.9,0.5 0.9,0.56 C 0.9,0.62 0.98,0.68 0.94,0.74 C 0.9,0.8 0.82,0.76 0.76,0.8 C 0.7,0.84 0.7,0.92 0.62,0.94 C 0.54,0.96 0.5,0.9 0.44,0.92 C 0.38,0.94 0.32,1 0.26,0.98 C 0.18,0.96 0.2,0.86 0.14,0.84 C 0.08,0.82 0,0.86 0.02,0.78 C 0.04,0.7 0.12,0.7 0.12,0.64 C 0.12,0.58 0.02,0.56 0.02,0.48 C 0.02,0.4 0.12,0.4 0.14,0.34 C 0.16,0.28 0.08,0.22 0.14,0.16 C 0.2,0.1 0.28,0.16 0.34,0.12 C 0.4,0.08 0.42,0 0.5,0 Z" />
        </clipPath>

        {/* Clover — 4 lobes */}
        <clipPath id="clipClover" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0.05 C 0.7,-0.05 0.95,0.1 0.9,0.3 C 1.05,0.3 1.05,0.7 0.9,0.7 C 0.95,0.9 0.7,1.05 0.5,0.95 C 0.3,1.05 0.05,0.9 0.1,0.7 C -0.05,0.7 -0.05,0.3 0.1,0.3 C 0.05,0.1 0.3,-0.05 0.5,0.05 Z" />
        </clipPath>

        {/* Pentagon — rounded 5-sided */}
        <clipPath id="clipPentagon" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0 L 1,0.4 L 0.82,1 L 0.18,1 L 0,0.4 Z" />
        </clipPath>

        {/* Diamond — rotated rounded square */}
        <clipPath id="clipDiamond" clipPathUnits="objectBoundingBox">
          <path d="M 0.5,0 L 1,0.5 L 0.5,1 L 0,0.5 Z" />
        </clipPath>

        {/* Blob — organic */}
        <clipPath id="clipBlob" clipPathUnits="objectBoundingBox">
          <path d="M 0.6,0.03 C 0.85,0.05 1,0.3 0.95,0.55 C 0.9,0.8 0.7,0.98 0.45,0.95 C 0.2,0.92 0.02,0.72 0.05,0.45 C 0.08,0.2 0.35,0.01 0.6,0.03 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}
