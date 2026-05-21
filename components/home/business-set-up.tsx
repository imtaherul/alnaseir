import Image from "next/image";
import Link from "next/link";

export function BusinessSetUp() {
  return (
    <section className="max-w-330 mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-amber-50 to-white border border-amber-200 flex flex-col md:flex-row items-center justify-between">
        {/* Image */}
        <div className="mt-6 w-full md:mt-0 md:w-1/3 shrink-0 h-[min(300px,70vw)] max-h-75 md:h-75 overflow-hidden">
          <Image
            src="/BusinessSetUpstartup.jpg"
            alt="Business Set Up in Saudi Arabia"
            width={650}
            height={440}
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Content */}
        <div className="max-w-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Business Set Up in Saudi Arabia
          </h2>
          <p className="mt-3 text-gray-700">
            Company Formation in Saudi Arabia is a strategic opportunity for
            every Investor aiming to grow in the region's largest economy.
            Starting a business requires obtaining a license from the Ministry
            of Investment to ensure compliance, followed by issuing a Commercial
            Register and activating Government Services to build a strong legal
            entity that supports the General Manager's vision for expansion and
            success.
          </p>
          <div className="mt-5">
            <Link
              href="/services/business-setup-saudi-arabia"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-colors"
            >
              Start Your Setup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
