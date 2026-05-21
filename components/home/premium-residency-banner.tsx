import Image from "next/image";
import Link from "next/link";

export function PremiumResidencyBanner() {
  return (
    <section className="max-w-330 mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-amber-50 to-white border border-amber-200 flex flex-col md:flex-row items-center justify-between">
        {/* Content */}
        <div className="max-w-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Premium Residency in Saudi Arabia
          </h2>
          <p className="mt-3 text-gray-700">
            Established in January 2019, the Premium Residency Center offers
            long-term residency options for investors and exceptional talent.
          </p>
          <div className="mt-5">
            <Link
              href="/services/premium-residency-saudi-arabia"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-colors"
            >
              Apply for Residency
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 w-full md:mt-0 md:w-1/3 shrink-0 h-[min(300px,70vw)] max-h-75 md:h-75 overflow-hidden">
          <Image
            src="/pr.jpg"
            alt="Premium Residency in Saudi Arabia"
            width={650}
            height={440}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
