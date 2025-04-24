'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/lib/i18n';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { locale } = useLanguage();
  const t = getTranslations(locale);

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">Taны Incubator</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {locale === 'en' 
                ? 'Building Mongolia\'s startup ecosystem by connecting startups, investors, and mentors.'
                : 'Монголын стартапын экосистемийг стартап, хөрөнгө оруулагч, менторуудыг холбох замаар бүтээх.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{locale === 'en' ? 'Quick Links' : 'Холбоосууд'}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/startups" className="text-muted-foreground hover:text-primary transition-colors">
                {t.common.startups}
              </Link>
              <Link href="/investors" className="text-muted-foreground hover:text-primary transition-colors">
                {t.common.investors}
              </Link>
              <Link href="/mentors" className="text-muted-foreground hover:text-primary transition-colors">
                {t.common.mentors}
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                {t.common.about}
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{locale === 'en' ? 'Resources' : 'Материалууд'}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                {locale === 'en' ? 'Blog' : 'Блог'}
              </Link>
              <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                {locale === 'en' ? 'Events' : 'Арга хэмжээнүүд'}
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                {locale === 'en' ? 'FAQ' : 'Асуулт, Хариулт'}
              </Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                {locale === 'en' ? 'Privacy Policy' : 'Нууцлалын бодлого'}
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.common.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {locale === 'en' 
                    ? 'UFE Ulaanbaatar, Mongolia'
                    : 'СЭЗИС Улаанбаатар, Монгол'}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">+976 86546576</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <a href="mailto:info@tanyincubator.mn" className="text-muted-foreground hover:text-primary transition-colors">
                  info@tanyincubator.mn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Taны Incubator. {locale === 'en' ? 'All rights reserved.' : 'Бүх эрх хуулиар хамгаалагдсан.'}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              {locale === 'en' ? 'Terms of Service' : 'Үйлчилгээний нөхцөл'}
            </Link>
            <Link href="/privacy" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              {locale === 'en' ? 'Privacy Policy' : 'Нууцлалын бодлого'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}