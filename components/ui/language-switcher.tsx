"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { getTranslations } from '@/lib/i18n';
import { type Language } from '@/lib/types';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const t = getTranslations(locale);

  const languages = [
    { code: 'en', label: t.common.english },
    { code: 'mn', label: t.common.mongolian },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t.common.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code as Language)}
            className={locale === language.code ? 'bg-accent font-medium' : ''}
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}