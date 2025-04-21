"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { locales, defaultLocale } from '@/lib/i18n';
import { type Language } from '@/lib/types';

interface LanguageContextType {
  locale: Language;
  setLocale: (locale: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale as Language,
  setLocale: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Language>(
    (typeof window !== 'undefined'
      ? (localStorage.getItem('locale') as Language) || defaultLocale
      : defaultLocale) as Language
  );

  useEffect(() => {
    if (locale) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}