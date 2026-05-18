'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/language-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { databases, DATABASE_ID, SERVICES_COLLECTION_ID, type Service } from '@/lib/appwrite';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, Briefcase, Building2, Shield, Globe2, Scale, Landmark, Users, FileText, HeadphonesIcon, CreditCard, ClipboardCheck, Truck } from 'lucide-react';
import Link from 'next/link';

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

// Default services for demo/fallback
const defaultServices: Service[] = [
  {
    $id: '1',
    title_en: 'Business Setup',
    title_ar: 'تأسيس الشركات',
    title_bn: 'ব্যবসা সেটআপ',
    description_en: 'Complete business setup services including company formation, licensing, and legal documentation. We handle all the paperwork and regulatory requirements so you can focus on building your business.',
    description_ar: 'خدمات تأسيس شركات متكاملة تشمل تكوين الشركات والترخيص والتوثيق القانوني. نحن نتعامل مع جميع الأعمال الورقية والمتطلبات التنظيمية حتى تتمكن من التركيز على بناء عملك.',
    description_bn: 'কোম্পানি গঠন, লাইসেন্সিং এবং আইনি ডকুমেন্টেশন সহ সম্পূর্ণ ব্যবসা সেটআপ সেবা। আমরা সমস্ত কাগজপত্র এবং নিয়ন্ত্রক প্রয়োজনীয়তা সামলাই যাতে আপনি আপনার ব্যবসা গড়ে তোলায় মনোযোগ দিতে পারেন।',
    icon: 'building',
    order: 1,
  },
  {
    $id: '2',
    title_en: 'PRO Services',
    title_ar: 'خدمات العلاقات الحكومية',
    title_bn: 'PRO সেবা',
    description_en: 'Professional government relations services for visa processing, permits, and regulatory compliance. Our experienced team ensures smooth and efficient handling of all government-related matters.',
    description_ar: 'خدمات علاقات حكومية احترافية لمعالجة التأشيرات والتصاريح والامتثال التنظيمي. يضمن فريقنا ذو الخبرة معالجة سلسة وفعالة لجميع الأمور المتعلقة بالحكومة.',
    description_bn: 'ভিসা প্রসেসিং, পারমিট এবং নিয়ন্ত্রক সম্মতির জন্য পেশাদার সরকারি সম্পর্ক সেবা। আমাদের অভিজ্ঞ দল সমস্ত সরকার-সম্পর্কিত বিষয়গুলির মসৃণ এবং দক্ষ পরিচালনা নিশ্চিত করে।',
    icon: 'shield',
    order: 2,
  },
  {
    $id: '3',
    title_en: 'Market Entry Strategy',
    title_ar: 'استراتيجية دخول السوق',
    title_bn: 'বাজার প্রবেশ কৌশল',
    description_en: 'Strategic consulting for market analysis, entry planning, and business expansion. We help you understand the local market dynamics and develop winning strategies.',
    description_ar: 'استشارات استراتيجية لتحليل السوق وتخطيط الدخول وتوسيع الأعمال. نساعدك على فهم ديناميكيات السوق المحلية وتطوير استراتيجيات رابحة.',
    description_bn: 'বাজার বিশ্লেষণ, প্রবেশ পরিকল্পনা এবং ব্যবসা সম্প্রসারণের জন্য কৌশলগত পরামর্শ। আমরা আপনাকে স্থানীয় বাজারের গতিশীলতা বুঝতে এবং বিজয়ী কৌশল তৈরি করতে সাহায্য করি।',
    icon: 'globe',
    order: 3,
  },
  {
    $id: '4',
    title_en: 'Legal & Compliance',
    title_ar: 'الشؤون القانونية والامتثال',
    title_bn: 'আইনি ও সম্মতি',
    description_en: 'Comprehensive legal advisory and compliance management services. Stay compliant with local regulations while focusing on growing your business.',
    description_ar: 'خدمات استشارات قانونية شاملة وإدارة الامتثال. ابق متوافقًا مع اللوائح المحلية مع التركيز على تنمية أعمالك.',
    description_bn: 'ব্যাপক আইনি পরামর্শ এবং সম্মতি ব্যবস্থাপনা সেবা। আপনার ব্যবসা বাড়াতে মনোযোগ দেওয়ার সময় স্থানীয় প্রবিধানগুলির সাথে সম্মতি বজায় রাখুন।',
    icon: 'scale',
    order: 4,
  },
  {
    $id: '5',
    title_en: 'Banking & Finance',
    title_ar: 'الخدمات المصرفية والمالية',
    title_bn: 'ব্যাংকিং ও অর্থায়ন',
    description_en: 'Bank account opening, financial advisory, and funding solutions. We connect you with the right financial institutions and solutions for your business needs.',
    description_ar: 'فتح حسابات بنكية واستشارات مالية وحلول تمويل. نربطك بالمؤسسات والحلول المالية المناسبة لاحتياجات عملك.',
    description_bn: 'ব্যাংক অ্যাকাউন্ট খোলা, আর্থিক পরামর্শ এবং তহবিল সমাধান। আমরা আপনাকে আপনার ব্যবসায়িক চাহিদার জন্য সঠিক আর্থিক প্রতিষ্ঠান এবং সমাধানের সাথে সংযুক্ত করি।',
    icon: 'landmark',
    order: 5,
  },
  {
    $id: '6',
    title_en: 'HR & Recruitment',
    title_ar: 'الموارد البشرية والتوظيف',
    title_bn: 'HR ও নিয়োগ',
    description_en: 'Complete HR solutions including recruitment, payroll, and employee management. Build and manage your team effectively with our comprehensive HR services.',
    description_ar: 'حلول موارد بشرية متكاملة تشمل التوظيف والرواتب وإدارة الموظفين. بناء وإدارة فريقك بفعالية من خلال خدمات الموارد البشرية الشاملة لدينا.',
    description_bn: 'নিয়োগ, পে-রোল এবং কর্মচারী ব্যবস্থাপনা সহ সম্পূর্ণ HR সমাধান। আমাদের ব্যাপক HR সেবার মাধ্যমে আপনার দলকে কার্যকরভাবে তৈরি এবং পরিচালনা করুন।',
    icon: 'users',
    order: 6,
  },
];

function ServiceContent({ serviceId }: { serviceId: string }) {
  const { locale, t, dir } = useLanguage();
  const [service, setService] = useState<Service | null>(null);
  const [allServices, setAllServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      try {
        if (DATABASE_ID && SERVICES_COLLECTION_ID) {
          const response = await databases.listDocuments(
            DATABASE_ID,
            SERVICES_COLLECTION_ID
          );
          if (response.documents.length > 0) {
            const services = response.documents as unknown as Service[];
            setAllServices(services);
            setService(services.find((s) => s.$id === serviceId) || null);
          } else {
            setAllServices(defaultServices);
            setService(defaultServices.find((s) => s.$id === serviceId) || null);
          }
        } else {
          setAllServices(defaultServices);
          setService(defaultServices.find((s) => s.$id === serviceId) || null);
        }
      } catch {
        setAllServices(defaultServices);
        setService(defaultServices.find((s) => s.$id === serviceId) || null);
      } finally {
        setLoading(false);
      }
    }
    fetchService();
  }, [serviceId]);

  const getTitle = (s: Service) => {
    switch (locale) {
      case 'ar':
        return s.title_ar;
      case 'bn':
        return s.title_bn;
      default:
        return s.title_en;
    }
  };

  const getDescription = (s: Service) => {
    switch (locale) {
      case 'ar':
        return s.description_ar;
      case 'bn':
        return s.description_bn;
      default:
        return s.description_en;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-muted-foreground mb-4">Service not found</p>
        <Button asChild>
          <Link href="/#services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Briefcase;
  const otherServices = allServices.filter((s) => s.$id !== serviceId).slice(0, 3);

  const features = [
    locale === 'ar' ? 'استشارة مجانية' : locale === 'bn' ? 'বিনামূল্যে পরামর্শ' : 'Free Consultation',
    locale === 'ar' ? 'فريق خبراء متخصص' : locale === 'bn' ? 'বিশেষজ্ঞ দল' : 'Expert Team',
    locale === 'ar' ? 'دعم على مدار الساعة' : locale === 'bn' ? '২৪/৭ সহায়তা' : '24/7 Support',
    locale === 'ar' ? 'أسعار تنافسية' : locale === 'bn' ? 'প্রতিযোগিতামূলক মূল্য' : 'Competitive Pricing',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-6 gap-2">
                <Link href="/#services">
                  {dir === 'rtl' ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                  {locale === 'ar' ? 'العودة للخدمات' : locale === 'bn' ? 'সেবায় ফিরে যান' : 'Back to Services'}
                </Link>
              </Button>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {getTitle(service)}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {getDescription(service)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {locale === 'ar' ? 'ما نقدمه' : locale === 'bn' ? 'আমরা যা অফার করি' : 'What We Offer'}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-2">
                  {locale === 'ar' ? 'هل أنت مستعد للبدء؟' : locale === 'bn' ? 'শুরু করতে প্রস্তুত?' : 'Ready to Get Started?'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {locale === 'ar' ? 'تواصل معنا اليوم للحصول على استشارة مجانية' : locale === 'bn' ? 'বিনামূল্যে পরামর্শের জন্য আজই আমাদের সাথে যোগাযোগ করুন' : 'Contact us today for a free consultation'}
                </p>
                <Button size="lg" asChild>
                  <Link href="/#contact">
                    {locale === 'ar' ? 'تواصل معنا' : locale === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        {otherServices.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  {locale === 'ar' ? 'خدمات أخرى' : locale === 'bn' ? 'অন্যান্য সেবা' : 'Other Services'}
                </h2>

                <div className="grid sm:grid-cols-3 gap-6">
                  {otherServices.map((s) => {
                    const Icon = iconMap[s.icon] || Briefcase;
                    return (
                      <Link
                        key={s.$id}
                        href={`/services/${s.$id}`}
                        className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                          <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="font-bold mb-2">{getTitle(s)}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {getDescription(s)}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <LanguageProvider>
      <ServiceContent serviceId={resolvedParams.id} />
    </LanguageProvider>
  );
}
