import { ReactNode } from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  isHit?: boolean;
  isNew?: boolean;
  specs?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon?: ReactNode;
}