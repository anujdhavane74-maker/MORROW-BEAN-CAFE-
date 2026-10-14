export type MenuCategoryId = 'all' | 'espresso' | 'iced' | 'matcha' | 'pastries';

export interface MenuItem {
  id: string;
  name: string;
  price: number; // in INR (₹)
  description: string;
  category: MenuCategoryId;
  tags?: string[];
  notes?: string;
  isSignature?: boolean;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  alt: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
}

export interface BrandPillar {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface OperatingHours {
  day: string;
  time: string;
  isClosed?: boolean;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}
