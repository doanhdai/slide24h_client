// Common types used across the application

export interface Card {
  id: string;
  title: string;
  image?: string;
  href: string;
}

export interface Slide {
  id: string;
  title: string;
  image?: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  views: number;
  downloads: number;
  href: string;
  isFree?: boolean;
  category?: string;
  description?: string;
  thumbnails?: string[]; // Array of thumbnail image URLs for detail page
}

export interface Poster {
  id: string;
  image?: string;
  href: string;
  category?: string;
  originalPrice?: number;
  discountedPrice?: number;
  discountPercent?: number;
  views?: number;
  downloads?: number;
}

export interface Category {
  title: string;
  count: string;
  href: string;
  gradient: string;
  iconUrl?: string;
  bgImageUrl?: string;
}

export interface AISoftware {
  id: string;
  title: string;
  image?: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  views: number;
  downloads: number;
  href: string;
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  image?: string;
  price: number; // Final price (discounted price)
  quantity: number;
}

