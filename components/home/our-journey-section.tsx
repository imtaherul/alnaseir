export function OurJourneySection() {
  return (
    <section className="w-full  py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" /> */}

        <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm border border-[#e8e0d8]">
          {/* Left: Image */}
          <div className="w-full md:w-[55%] relative min-h-[360px] md:min-h-[480px]">
            <img
              src="/images/aerial-architecture.jpg"
              alt="Aerial view of an architectural complex with egg-shaped domed structures surrounded by trees"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-[45%]  flex items-center px-10 py-14 lg:px-16">
            <div className="max-w-md">
              {/* Label */}
              <p className="text-[#4a7c6f] text-xs font-semibold uppercase tracking-[0.18em] mb-6">
                Our Journey
              </p>

              {/* Heading */}
              <h2 className="text-[#1a1a2e] text-3xl lg:text-4xl font-bold leading-tight mb-6 text-balance">
                From national champion to global investor
              </h2>

              {/* Body text */}
              <p className="text-[#4a4a5a] text-sm leading-relaxed">
                In recent years, PIF has transformed from a national leader into
                a global investment powerhouse, guided by clear investment
                beliefs that shape how opportunities are identified, evaluated,
                and prioritized. This evolution reflects PIF&apos;s role in
                catalyzing new sectors, nurturing national champions, and
                building partnerships that strengthen Saudi Arabia&apos;s
                position in the global economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
