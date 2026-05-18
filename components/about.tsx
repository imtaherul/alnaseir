'use client';

import { useLanguage } from '@/contexts/language-context';
import { Target, Eye } from 'lucide-react';

export function About() {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            {t.about.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.about.description}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.about.mission}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.about.vision}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '500+', label: dir === 'rtl' ? 'مشروع' : dir === 'en' ? 'Projects' : 'প্রকল্প' },
            { value: '15+', label: dir === 'rtl' ? 'سنوات' : dir === 'en' ? 'Years' : 'বছর' },
            { value: '50+', label: dir === 'rtl' ? 'خبير' : dir === 'en' ? 'Experts' : 'বিশেষজ্ঞ' },
            { value: '98%', label: dir === 'rtl' ? 'رضا العملاء' : dir === 'en' ? 'Satisfaction' : 'সন্তুষ্টি' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
