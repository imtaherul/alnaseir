"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Globe,
  Mouse,
  Target,
  TrendingUp,
} from "lucide-react";
import { FeatureCards } from "./home/feature-cards";
import { useLanguage } from "@/contexts/language-context";
import {
  ArchShape,
  CodeBrackets,
  QuarterCircle,
  SaudiLogo,
  StarShape,
} from "./shape-svg";
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
export function HeroSectionOld() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28">
        <div className=" text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className=" font-semibold leading-tight text-[clamp(1.2rem,2vw,2.0rem)]">
              Business Setup in Saudi Arabia Is Super Easy
            </h1>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-none text-balance">
              {t.hero.title}
            </h1>

            <p className="mt-10 text-lg md:text-xl text-muted-foreground  text-pretty">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services/business-setup"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md active:translate-y-0"
              >
                Explore Opportunities
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-4 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/80 active:translate-y-0"
              >
                Talk to an Advisor
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="translate-y-12 sm:translate-y-16">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group h-full rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md hover:-translate-y-0.5 focus-within:shadow-md focus-within:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
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

          {/* Scroll indicator */}
          <div className="mt-40 hidden items-center justify-center motion-safe:animate-bounce sm:flex">
            <span className="sr-only">Scroll</span>
            <Mouse className="h-5 w-5" />
          </div>
          {/* <Mouse className="animate-bounce" /> */}
        </div>
      </div>
      <SaudiLogo className="absolute top-30 left-100 -translate-x-1/2 text-[#b4b4b41c] w-100" />
      <SaudiLogo className="absolute top-30 right-10 -translate-x-1/2 text-[#b4b4b41c] w-100" />

      <StarShape className="absolute bottom-1 left-50 -translate-x-1/4 text-[#6a85821a] w-50" />
      <ArchShape className="absolute bottom-1 left-50 -translate-x-1/4 text-[#8d78781a] w-104" />
      <StarShape className="absolute -bottom-20 right-1 -translate-x-1/2 text-[#b4b4b418] w-100" />
      <QuarterCircle className="absolute bottom-1 right-10 -translate-x-1/4 text-[#787b8d17] w-104" />
    </section>
  );
}
