export type PageId = 'home' | 'products' | 'services' | 'contact';

export interface ProductItem {
  sno: number | string;
  name: string;
  cas: string;
  hasCas: boolean;
  intermediateOf: string;
  category: string;
  structureImage?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  paragraphs: string[];
  capabilities: string[];
  highlight?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}
