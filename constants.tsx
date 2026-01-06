import React from 'react';
import { Product, Category } from './types';
import { Laptop, Smartphone, Tv, Headphones, Watch, Camera, Gamepad, WashingMachine } from 'lucide-react';

// Use picsum for placeholder, but these keys represent files intended for public folder
// In a real scenario, you would replace these URLs with '/images/product-1.jpg' etc.
const IMAGE_BASE = 'https://picsum.photos';

export const POPULAR_CATEGORIES: Category[] = [
  { id: '1', name: 'Ноутбуки', icon: <Laptop size={32} /> },
  { id: '2', name: 'Смартфоны', icon: <Smartphone size={32} /> },
  { id: '3', name: 'Телевизоры', icon: <Tv size={32} /> },
  { id: '4', name: 'Бытовая техника', icon: <WashingMachine size={32} /> },
  { id: '5', name: 'Наушники', icon: <Headphones size={32} /> },
  { id: '6', name: 'Умные часы', icon: <Watch size={32} /> },
];

export const HIT_PRODUCTS: Product[] = [
  {
    id: '101',
    title: 'Ноутбук ASUS Vivobook Go 15 E1504FA-BQ674, 15.6", IPS, AMD Ryzen 5',
    price: 45990,
    oldPrice: 52990,
    rating: 4.8,
    reviewsCount: 142,
    imageUrl: `${IMAGE_BASE}/300/300?random=1`,
    isHit: true,
    specs: ['15.6" 1920x1080', 'Ryzen 5 7520U', '8GB RAM', '512GB SSD']
  },
  {
    id: '102',
    title: 'Смартфон Xiaomi Redmi Note 13 8/256GB, черный',
    price: 19990,
    oldPrice: 24990,
    rating: 4.9,
    reviewsCount: 856,
    imageUrl: `${IMAGE_BASE}/300/300?random=2`,
    isHit: true,
    specs: ['6.67" AMOLED', '108MP Camera', '5000mAh']
  },
  {
    id: '103',
    title: 'Монитор LG UltraGear 27GN800-B 27", IPS, 144Hz',
    price: 28490,
    rating: 4.7,
    reviewsCount: 54,
    imageUrl: `${IMAGE_BASE}/300/300?random=3`,
    specs: ['27" 2560x1440', '144Hz', '1ms', 'G-Sync']
  },
  {
    id: '104',
    title: 'Видеокарта Palit NVIDIA GeForce RTX 4060 Dual 8GB',
    price: 34990,
    oldPrice: 38990,
    rating: 4.5,
    reviewsCount: 23,
    imageUrl: `${IMAGE_BASE}/300/300?random=4`,
    isHit: true
  },
  {
    id: '105',
    title: 'SSD накопитель Kingston NV2 SNV2S/1000G 1ТБ',
    price: 7490,
    rating: 4.8,
    reviewsCount: 312,
    imageUrl: `${IMAGE_BASE}/300/300?random=5`,
  }
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: '201',
    title: 'Игровая консоль Sony PlayStation 5 Slim',
    price: 54990,
    rating: 5.0,
    reviewsCount: 12,
    imageUrl: `${IMAGE_BASE}/300/300?random=6`,
    isNew: true
  },
  {
    id: '202',
    title: 'Телевизор Samsung UE50CU7100UXRU, 50", 4K UHD',
    price: 41990,
    oldPrice: 47990,
    rating: 4.6,
    reviewsCount: 44,
    imageUrl: `${IMAGE_BASE}/300/300?random=7`,
  },
  {
    id: '203',
    title: 'Умная колонка Яндекс Станция Миди с Zigbee',
    price: 14990,
    rating: 4.9,
    reviewsCount: 89,
    imageUrl: `${IMAGE_BASE}/300/300?random=8`,
    isNew: true
  },
  {
    id: '204',
    title: 'Робот-пылесос Roborock Q7 Max, белый',
    price: 32990,
    oldPrice: 39990,
    rating: 4.8,
    reviewsCount: 156,
    imageUrl: `${IMAGE_BASE}/300/300?random=9`,
  },
  {
    id: '205',
    title: 'Кофемашина DeLonghi Magnifica S ECAM 22.110.B',
    price: 39990,
    rating: 4.9,
    reviewsCount: 543,
    imageUrl: `${IMAGE_BASE}/300/300?random=10`,
  }
];