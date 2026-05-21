"use client";

import { useLanguage } from "@/contexts/language-context";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const { t, locale } = useLanguage();

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  A
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Al Naseir</span>
                <span className="block text-xs text-muted-foreground -mt-1">
                  Business Solutions
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-background transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Business Bay, Dubai, UAE</li>
              <li>+971 4 XXX XXXX</li>
              <li>info@alnaseir.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Al Naseir Business Solutions.{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
