export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Brand {
  name: string;
  tagline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface MetaData {
  brand: Brand;
  stats: Stat[];
  offices: { city: string; region: string; }[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  publishedAt: string;
}

export interface Program {
  title: string;
  description: string;
  features: string[];
}
