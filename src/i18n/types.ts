export type Locale = 'pt-br' | 'en' | 'es';

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  skip: string;
  menu: string;
  nav: {
    services: string;
    about: string;
    portfolio: string;
    contact: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  lang: {
    label: string;
    pt: string;
    en: string;
    es: string;
  };
  hero: {
    brand: string;
    headline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    body: string[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    cases: Array<{
      title: string;
      tag: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
};
