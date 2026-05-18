import { Globe, Target, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Globe,
    title: "Strategic Gateway",
    description:
      "A hub linking Asia, Europe, and Africa—ideal for regional HQs, logistics, and export-led growth.",
    linkText: "Free Zones",
    href: "/services/free-zones-ksa",
  },
  {
    icon: Target,
    title: "Vision 2030 Reforms",
    description:
      "Ongoing regulatory modernization, privatization, and incentives that streamline setup and operations.",
    linkText: "See incentives",
    href: "/blog/vision-2030",
  },
  {
    icon: TrendingUp,
    title: "High-Growth Sectors",
    description:
      "From energy and mining to tourism, ICT, and manufacturing—the Kingdom offers diversified opportunities.",
    linkText: "Explore sectors",
    href: "/investment-opportunities",
  },
];

export function FeatureCards() {
  return (
    <div className="relative z-10">
      <div className="mx-auto max-w-[82.5rem] px-4 translate-y-12 sm:translate-y-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group h-full rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md hover:-translate-y-[2px] focus-within:shadow-md focus-within:-translate-y-[2px]"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="grid place-items-center h-16 w-16 rounded-xl bg-teal-50 ring-1 ring-teal-200">
                  <feature.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="mt-2 inline-flex items-center gap-1 text-teal-600 font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded"
                >
                  {feature.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Spacer to offset translated cards */}
      <div className="h-24 sm:h-28" />
    </div>
  );
}
