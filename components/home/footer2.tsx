import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const ourServices = [
  { label: "Business Incubators", href: "/services/business-incubators" },
  { label: "Business Setup in Saudi Arabia", href: "/services/business-setup" },
  { label: "Consultation", href: "/services/consultation-services" },
  { label: "Coworking", href: "/services/coworking-spaces" },
  { label: "Free Zone", href: "/services/free-zones-ksa" },
  { label: "HR Services", href: "/services/hr-services" },
  {
    label: "Premium Residency",
    href: "/services/premium-residency-saudi-arabia",
  },
  { label: "Saudi Partner", href: "/services/saudi-partners" },
  { label: "Translation Services", href: "/services/translation-services" },
];

const usefulResources = [
  { label: "About Kingdom", href: "/about-kingdom" },
  { label: "Life in Saudi Arabia", href: "/blog/Life-in-Saudi-Arabia" },
  { label: "HR Packages", href: "/hr-packages" },
  { label: "Vision 2030", href: "/blog/vision-2030" },
  { label: "2034 World Cup", href: "/blog/2034-World-Cup" },
  { label: "NEOM", href: "/blog/what-neom" },
];

const legalPages = [
  { label: "Legal Policy", href: "/legal-policy" },
  { label: "Other Legal Information", href: "/other-legal-information" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/@MotadedConsultancy",
    label: "Youtube Channel",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/motaded_consultancy/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://www.x.com/MotadedConsult",
    label: "X (Twitter)",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/motaded-consultancy",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/MotadedConsultancy/",
    label: "Facebook",
  },
];

export function FooterTwo() {
  const { t, locale } = useLanguage();

  return (
    <footer className="bg-teal-700 text-white">
      <div className="mx-auto max-w-[1320px] px-4 py-16">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo column */}
          <div className="text-white">
            <Link href="/" className="mb-6 inline-block">
              <div className="flex h-12 w-32 items-center justify-center rounded bg-white/20 text-sm font-semibold">
                Logo
              </div>
            </Link>
            <p className="text-sm text-white/80">
              Your trusted partner for business setup and consultancy services
              in Saudi Arabia.
            </p>
          </div>

          {/* Our Services column */}
          <div className="text-white">
            <p className="mb-3 text-base font-semibold leading-relaxed">
              Our Services
            </p>
            <div className="mb-3 h-px w-full bg-white/30" />
            <div className="grid grid-cols-1 gap-1.5">
              {ourServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-white hover:underline"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Useful Resources column */}
          <div className="hidden text-white md:block">
            <p className="mb-3 text-base font-semibold leading-relaxed">
              Useful Resources
            </p>
            <div className="mb-3 h-px w-full bg-white/30" />
            <div className="flex flex-col gap-1.5">
              {usefulResources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="text-sm text-white hover:underline"
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Pages column */}
          <div className="hidden text-white md:block">
            <p className="mb-3 text-base font-semibold leading-relaxed">
              Legal Pages
            </p>
            <div className="mb-3 h-px w-full bg-white/30" />
            <div className="flex flex-col gap-1.5">
              {legalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="text-sm text-white hover:underline"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 text-white">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm font-normal underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal-policy"
                className="text-sm font-normal underline"
              >
                Legal Policy
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-sm font-normal underline"
              >
                Sitemap
              </Link>
            </div>

            <p className="text-sm font-medium leading-relaxed">
              © {new Date().getFullYear()} Al Naseir Business Solutions.{" "}
              {t.footer.rights}
            </p>
          </div>

          <div className="flex flex-col items-end">
            {/* Vision 2030 logo placeholder */}
            <div className="mb-3 flex h-14 w-24 items-center justify-center rounded  text-xs">
              <img
                src="/Vision 2030.svg"
                alt="Vision 2030"
                className="object-contain  text-white"
              />
            </div>

            {/* Social links */}
            <ul className="flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-white/20 transition hover:bg-white/30"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
