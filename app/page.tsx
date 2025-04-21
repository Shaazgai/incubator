"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';
import { ArrowRight, Building2, Users, GraduationCap, TrendingUp, 
  BarChart3, Lightbulb, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { locale } = useLanguage();
  const t = getTranslations(locale);

  const stats = [
    { name: t.home.stats.startups, value: '150+', icon: Building2 },
    { name: t.home.stats.investors, value: '50+', icon: Users },
    { name: t.home.stats.mentors, value: '75+', icon: GraduationCap },
    { name: t.home.stats.funding, value: '₮5B+', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Building2,
      title: locale === 'en' ? 'Startup Showcase' : 'Стартапын Танилцуулга',
      description: locale === 'en' 
        ? 'Create a professional profile to showcase your startup to potential investors and partners.'
        : 'Стартапаа хөрөнгө оруулагч, түншүүдэд танилцуулах мэргэжлийн профайл үүсгэнэ.',
    },
    {
      icon: Users,
      title: locale === 'en' ? 'Investor Network' : 'Хөрөнгө Оруулагчдын Сүлжээ',
      description: locale === 'en' 
        ? 'Connect with investors interested in Mongolian startups across various sectors.'
        : 'Монголын стартапуудад хөрөнгө оруулахыг хүсэж буй хөрөнгө оруулагчидтай холбогдоно.',
    },
    {
      icon: GraduationCap,
      title: locale === 'en' ? 'Expert Mentorship' : 'Мэргэжлийн Зөвлөгөө',
      description: locale === 'en' 
        ? 'Book sessions with experienced mentors to get guidance on your startup journey.'
        : 'Туршлагатай менторуудтай уулзаж стартапын аялалдаа зөвлөгөө авна.',
    },
    {
      icon: BarChart3,
      title: locale === 'en' ? 'Growth Analytics' : 'Өсөлтийн Аналитик',
      description: locale === 'en' 
        ? 'Track your startup\'s progress and gain insights with our analytics dashboard.'
        : 'Стартапын хөгжил, өсөлтийг аналитик самбар ашиглан хянана.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"
          aria-hidden="true"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl mb-6">
              {t.home.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  {t.home.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/startups">
                  {locale === 'en' ? 'Explore Startups' : 'Стартапуудыг Харах'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.name} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary md:text-4xl mb-4">
              {locale === 'en' ? 'Empower Your Startup Journey' : 'Стартапын Аялалаа Хүчирхэгжүүл'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {locale === 'en' 
                ? 'Taны Incubator provides all the tools and connections you need to grow your startup in Mongolia.'
                : 'Таны Инкубатор нь Монголд стартапаа хөгжүүлэхэд шаардагдах бүх хэрэгсэл, холбоосоор хангана.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center text-primary md:text-4xl mb-12">
            {locale === 'en' ? 'Success Stories' : 'Амжилтын Түүхүүд'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg border p-6 relative">
              <div className="absolute -top-4 left-6 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-muted-foreground mb-4 mt-4">
                {locale === 'en' 
                  ? "Taны Incubator helped us connect with our lead investor who understood our vision. We've now raised ₮500 million for our fintech solution."
                  : "Таны Инкубатор бидэнд манай алсын хараа ойлгодог үндсэн хөрөнгө оруулагчтай холбогдоход тусалсан. Одоо бид финтек шийдэлдээ 500 сая төгрөг босгосон."}
              </p>
              <div className="flex items-center">
                <div className="mr-4 bg-secondary/20 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-primary font-bold">BG</span>
                </div>
                <div>
                  <p className="font-medium">Bat-Erdene Ganzorig</p>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'en' ? 'CEO, PayMongolia' : 'Гүйцэтгэх захирал, PayMongolia'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg border p-6 relative">
              <div className="absolute -top-4 left-6 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-muted-foreground mb-4 mt-4">
                {locale === 'en' 
                  ? "The mentors at Taны Incubator provided invaluable guidance that helped us refine our business model. Our user base has grown 500% since joining."
                  : "Таны Инкубаторын менторууд бидний бизнес загварыг сайжруулахад үнэтэй зөвлөгөө өгсөн. Нэгдсэнээс хойш манай хэрэглэгчдийн тоо 500% өссөн."}
              </p>
              <div className="flex items-center">
                <div className="mr-4 bg-secondary/20 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-primary font-bold">TO</span>
                </div>
                <div>
                  <p className="font-medium">Tserenpuntsag Otgonbayar</p>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'en' ? 'Founder, EduMongolia' : 'Үүсгэн байгуулагч, EduMongolia'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-lg border p-6 relative">
              <div className="absolute -top-4 left-6 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <p className="text-muted-foreground mb-4 mt-4">
                {locale === 'en' 
                  ? "As an investor, Taны Incubator has given me access to the most promising startups in Mongolia. I've made three investments through the platform."
                  : "Хөрөнгө оруулагчийн хувьд Таны Инкубатор надад Монголын хамгийн ирээдүйтэй стартапуудад хандах боломж олгосон. Би платформоор дамжуулан гурван хөрөнгө оруулалт хийсэн."}
              </p>
              <div className="flex items-center">
                <div className="mr-4 bg-secondary/20 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-primary font-bold">SB</span>
                </div>
                <div>
                  <p className="font-medium">Saraa Batbold</p>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'en' ? 'Angel Investor' : 'Анхны хөрөнгө оруулагч'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-card rounded-xl overflow-hidden border shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {locale === 'en' 
                    ? 'Ready to grow your startup in Mongolia?'
                    : 'Монголд стартапаа өсгөхөд бэлэн үү?'}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {locale === 'en' 
                    ? 'Join Taны Incubator today and connect with investors, mentors, and resources to take your startup to the next level.'
                    : 'Өнөөдөр Таны Инкубаторт нэгдэж, хөрөнгө оруулагч, ментор, нөөцтэй холбогдон стартапаа дараагийн түвшинд хүргээрэй.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      {locale === 'en' ? 'Join as a Startup' : 'Стартапаар Нэгдэх'}
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/signup">
                      {locale === 'en' ? 'Join as an Investor' : 'Хөрөнгө Оруулагчаар Нэгдэх'}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div 
                  className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/70 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}