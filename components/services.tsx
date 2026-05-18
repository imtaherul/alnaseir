'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { databases, DATABASE_ID, SERVICES_COLLECTION_ID, type Service } from '@/lib/appwrite';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Briefcase, FileText, Users, Building2, Shield, HeadphonesIcon, Scale, Globe2, Landmark, CreditCard, ClipboardCheck, Truck } from 'lucide-react';
import Link from 'next/link';

// Default services for demo/fallback
const defaultServices = [
  {
    $id: '1',
    title_en: 'Business Setup',
    title_ar: 'تأسيس الشركات',
    title_bn: 'ব্যবসা সেটআপ',
    description_en: 'Complete business setup services including company formation, licensing, and legal documentation.',
    description_ar: 'خدمات تأسيس شركات متكاملة تشمل تكوين الشركات والترخيص والتوثيق القانوني.',
    description_bn: 'কোম্পানি গঠন, লাইসেন্সিং এবং আইনি ডকুমেন্টেশন সহ সম্পূর্ণ ব্যবসা সেটআপ সেবা।',
    icon: 'building',
    order: 1,
  },
  {
    $id: '2',
    title_en: 'PRO Services',
    title_ar: 'خدمات العلاقات الحكومية',
    title_bn: 'PRO সেবা',
    description_en: 'Professional government relations services for visa processing, permits, and regulatory compliance.',
    description_ar: 'خدمات علاقات حكومية احترافية لمعالجة التأشيرات والتصاريح والامتثال التنظيمي.',
    description_bn: 'ভিসা প্রসেসিং, পারমিট এবং নিয়ন্ত্রক সম্মতির জন্য পেশাদার সরকারি সম্পর্ক সেবা।',
    icon: 'shield',
    order: 2,
  },
  {
    $id: '3',
    title_en: 'Market Entry Strategy',
    title_ar: 'استراتيجية دخول السوق',
    title_bn: 'বাজার প্রবেশ কৌশল',
    description_en: 'Strategic consulting for market analysis, entry planning, and business expansion.',
    description_ar: 'استشارات استراتيجية لتحليل السوق وتخطيط الدخول وتوسيع الأعمال.',
    description_bn: 'বাজার বিশ্লেষণ, প্রবেশ পরিকল্পনা এবং ব্যবসা সম্প্রসারণের জন্য কৌশলগত পরামর্শ।',
    icon: 'globe',
    order: 3,
  },
  {
    $id: '4',
    title_en: 'Legal & Compliance',
    title_ar: 'الشؤون القانونية والامتثال',
    title_bn: 'আইনি ও সম্মতি',
    description_en: 'Comprehensive legal advisory and compliance management services.',
    description_ar: 'خدمات استشارات قانونية شاملة وإدارة الامتثال.',
    description_bn: 'ব্যাপক আইনি পরামর্শ এবং সম্মতি ব্যবস্থাপনা সেবা।',
    icon: 'scale',
    order: 4,
  },
  {
    $id: '5',
    title_en: 'Banking & Finance',
    title_ar: 'الخدمات المصرفية والمالية',
    title_bn: 'ব্যাংকিং ও অর্থায়ন',
    description_en: 'Bank account opening, financial advisory, and funding solutions.',
    description_ar: 'فتح حسابات بنكية واستشارات مالية وحلول تمويل.',
    description_bn: 'ব্যাংক অ্যাকাউন্ট খোলা, আর্থিক পরামর্শ এবং তহবিল সমাধান।',
    icon: 'landmark',
    order: 5,
  },
  {
    $id: '6',
    title_en: 'HR & Recruitment',
    title_ar: 'الموارد البشرية والتوظيف',
    title_bn: 'HR ও নিয়োগ',
    description_en: 'Complete HR solutions including recruitment, payroll, and employee management.',
    description_ar: 'حلول موارد بشرية متكاملة تشمل التوظيف والرواتب وإدارة الموظفين.',
    description_bn: 'নিয়োগ, পে-রোল এবং কর্মচারী ব্যবস্থাপনা সহ সম্পূর্ণ HR সমাধান।',
    icon: 'users',
    order: 6,
  },
];

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  shield: Shield,
  globe: Globe2,
  scale: Scale,
  landmark: Landmark,
  users: Users,
  briefcase: Briefcase,
  file: FileText,
  headphones: HeadphonesIcon,
  card: CreditCard,
  clipboard: ClipboardCheck,
  truck: Truck,
};

export function Services() {
  const { locale, t, dir } = useLanguage();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        if (DATABASE_ID && SERVICES_COLLECTION_ID) {
          const response = await databases.listDocuments(
            DATABASE_ID,
            SERVICES_COLLECTION_ID
          );
          if (response.documents.length > 0) {
            setServices(response.documents as unknown as Service[]);
          } else {
            setServices(defaultServices);
          }
        } else {
          setServices(defaultServices);
        }
      } catch {
        console.log('Using default services');
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const getTitle = (service: Service) => {
    switch (locale) {
      case 'ar':
        return service.title_ar;
      case 'bn':
        return service.title_bn;
      default:
        return service.title_en;
    }
  };

  const getDescription = (service: Service) => {
    switch (locale) {
      case 'ar':
        return service.description_ar;
      case 'bn':
        return service.description_bn;
      default:
        return service.description_en;
    }
  };

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            {t.services.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-muted-foreground">{t.services.loading}</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t.services.noServices}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .sort((a, b) => a.order - b.order)
              .map((service) => {
                const IconComponent = iconMap[service.icon] || Briefcase;
                return (
                  <Link
                    key={service.$id}
                    href={`/services/${service.$id}`}
                    className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {getTitle(service)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {getDescription(service)}
                    </p>

                    {/* Learn More Link */}
                    <span className="inline-flex items-center gap-1 p-0 h-auto text-primary font-medium text-sm">
                      {t.services.viewAll}
                      {dir === 'rtl' ? (
                        <ArrowLeft className="h-4 w-4" />
                      ) : (
                        <ArrowRight className="h-4 w-4" />
                      )}
                    </span>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}
