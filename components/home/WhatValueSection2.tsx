const values = [
  {
    label: "/ Saving Time\nWhere It Matters",
    description:
      "Our products eliminate repetitive work and unnecessary steps, helping teams focus on outcomes, not processes.",
  },
  {
    label: "/ Reducing Operational\nComplexity",
    description:
      "Clear interfaces. Logical flows. Fewer decisions. This leads to faster onboarding and fewer errors.",
  },
  {
    label: "/ Supporting\nLong-Term Use",
    description:
      "Our tools are built to remain stable as teams and businesses grow without constant relearning or redesign.",
  },
];

// Star / gear decorative shape using SVG polygon
function StarShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <polygon points="100,0 117,68 168,32 132,83 200,100 132,117 168,168 117,132 100,200 83,132 32,168 68,117 0,100 68,83 32,32 83,68" />
    </svg>
  );
}

export function WhatValueSection2() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#2d2d2d" }}
      aria-labelledby="value-heading"
    >
      <div className="flex min-h-[600px]">
        {/* ── Main content ─────────────────────────────────────────── */}
        <div className="flex-1 px-10 py-16 md:px-16 lg:px-20">
          {/* Headline with floating badges */}
          <div className="relative mb-14">
            <h2
              id="value-heading"
              className="text-white leading-[0.9] tracking-tight"
              style={{
                fontFamily: "var(--font-display), 'Impact', sans-serif",
                fontSize: "clamp(4rem, 11vw, 10rem)",
                lineHeight: 0.92,
              }}
            >
              {/* Row 1: "What Value" with Discipline badge */}
              <span className="relative inline-block">
                What{" "}
                <span className="relative inline-block">
                  Value
                  {/* Discipline badge */}
                  <span
                    className="absolute -top-3 left-[30%] -translate-x-1/2 rounded-sm px-2 py-0.5 text-xs font-bold text-white"
                    style={{
                      fontFamily: "var(--font-sans)",
                      backgroundColor: "#e040fb",
                      fontSize: "0.6rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Discipline
                  </span>
                  {/* Perspective badge */}
                  <span
                    className="absolute -top-3 right-[5%] rounded-sm px-2 py-0.5 text-xs font-bold text-black"
                    style={{
                      fontFamily: "var(--font-sans)",
                      backgroundColor: "#c6f135",
                      fontSize: "0.6rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Perspective
                  </span>
                </span>
              </span>
              <br />
              {/* Row 2: "Mean To Us" with Growth badge */}
              <span className="relative inline-block">
                <span className="relative inline-block">
                  M{/* Growth badge */}
                  <span
                    className="absolute -top-3 left-[80%] rounded-sm px-2 py-0.5 text-xs font-bold text-black"
                    style={{
                      fontFamily: "var(--font-sans)",
                      backgroundColor: "#00d4c8",
                      fontSize: "0.6rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Growth
                  </span>
                </span>
                ean To Us
              </span>
            </h2>
          </div>

          {/* Value rows */}
          <div className="flex flex-col gap-10">
            {values.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-2 gap-8 border-t pt-8"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                {/* Label */}
                <p
                  className="text-white font-bold uppercase"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.label}
                </p>

                {/* Description */}
                <p
                  className="text-white font-bold leading-snug"
                  style={{
                    fontFamily: "var(--font-display), 'Impact', sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                    lineHeight: 1.25,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right decorative panels ───────────────────────────────── */}
        <div className="hidden lg:flex w-64 xl:w-72 flex-col">
          {/* Top panel – green with star */}
          <div
            className="relative flex-1 overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: "#4cff6e" }}
            aria-hidden="true"
          >
            <StarShape
              className="absolute text-[#a8ff5a] w-[140%] max-w-none"
              aria-hidden="true"
            />
          </div>

          {/* Bottom panel – pink with large numeral */}
          <div
            className="relative flex-1 overflow-hidden flex items-end justify-end"
            style={{ backgroundColor: "#ff85b3" }}
            aria-hidden="true"
          >
            <span
              className="absolute bottom-0 right-0 leading-none font-black text-[#d4000a] select-none"
              style={{
                fontFamily: "var(--font-display), 'Impact', sans-serif",
                fontSize: "clamp(8rem, 14vw, 14rem)",
                lineHeight: 0.85,
              }}
            >
              01
            </span>
          </div>
        </div>
      </div>

      {/* Bottom-centre decorative panel (partially visible) */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          backgroundColor: "#4cff6e",
          width: "min(500px, 55%)",
          height: "80px",
          marginTop: "-1px",
        }}
        aria-hidden="true"
      >
        <StarShape className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#a8ff5a] w-64" />
      </div>
    </section>
  );
}
