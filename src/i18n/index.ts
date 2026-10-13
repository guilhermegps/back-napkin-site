import { en } from './en';
import { es } from './es';
import { ptBr } from './pt-br';
import type { Dictionary, Locale } from './types';

export type { Dictionary, Locale };

export const locales: Locale[] = ['pt-br', 'en', 'es'];

export const dictionaries: Record<Locale, Dictionary> = {
  'pt-br': ptBr,
  en,
  es,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localePath(locale: Locale, hash = ''): string {
  const base = locale === 'pt-br' ? '/' : `/${locale}/`;
  return hash ? `${base}${hash}` : base;
}

export function htmlLang(locale: Locale): string {
  if (locale === 'pt-br') return 'pt-BR';
  return locale;
}
