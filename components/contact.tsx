'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const { t, dir, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert(locale === 'ar' ? 'تم إرسال رسالتك بنجاح!' : locale === 'bn' ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' : 'Your message has been sent successfully!');
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressText,
    },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      value: '+971 4 XXX XXXX',
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: 'info@alnaseir.com',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            {t.contact.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t.contact.subtitle}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.name}</label>
                  <Input
                    type="text"
                    required
                    placeholder={t.contact.name}
                    dir={dir}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.contact.email}</label>
                  <Input
                    type="email"
                    required
                    placeholder={t.contact.email}
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.contact.phone}</label>
                <Input
                  type="tel"
                  placeholder={t.contact.phone}
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.contact.message}</label>
                <Textarea
                  required
                  placeholder={t.contact.message}
                  rows={5}
                  dir={dir}
                />
              </div>

              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contact.submit}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-64">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Business Bay, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
