'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export function Hero() {
  const { t, dir } = useLanguage();

  const features = [
    'Business Setup',
    'Consulting',
    'PRO Services',
    'Market Entry',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${dir === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Al Naseir Business Solutions
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t.hero.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full"
                >
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact" className="gap-2">
                  {t.hero.cta}
                  {dir === 'rtl' ? (
                    <ArrowLeft className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">{t.hero.learnMore}</a>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative ${dir === 'rtl' ? 'lg:order-1' : ''}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 rounded-3xl" />
              <div className="absolute top-8 left-8 right-8 bottom-8 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-full flex flex-col">
                  {/* Card Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-2xl">A</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Al Naseir</h3>
                        <p className="text-sm text-muted-foreground">Business Solutions</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-3xl font-bold text-primary">500+</p>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-3xl font-bold text-primary">15+</p>
                      <p className="text-sm text-muted-foreground">Years</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-3xl font-bold text-primary">98%</p>
                      <p className="text-sm text-muted-foreground">Success</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-4">
                      <p className="text-3xl font-bold text-primary">24/7</p>
                      <p className="text-sm text-muted-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
