import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ProductCard } from './components/ProductCard';
import { POPULAR_CATEGORIES, HIT_PRODUCTS, NEW_ARRIVALS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(3);

  const handleAddToCart = (product: Product) => {
    console.log(`Added ${product.title} to cart`);
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2f2] text-[#333]">
      <Header cartCount={cartCount} />
      
      <main className="flex-grow container mx-auto px-4 py-6 space-y-8">
        {/* Hero Section */}
        <Hero />

        {/* Popular Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Популярные категории</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {POPULAR_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center text-center h-32 group"
              >
                <div className="mb-2 text-primary group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-sm font-medium leading-tight">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hit Products */}
        <Section title="Хиты продаж" actionText="Смотреть все">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {HIT_PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </Section>

        {/* Promo Banner */}
        <div className="w-full h-40 rounded-xl overflow-hidden relative shadow-sm group">
           <img 
              src="https://picsum.photos/1200/400?grayscale" 
              alt="Promo" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-10">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">Распродажа ноутбуков</h3>
                <p className="mb-4">Скидки до 40% на избранные модели</p>
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded font-medium transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
        </div>

        {/* New Arrivals */}
        <Section title="Новинки" actionText="Все новинки">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {NEW_ARRIVALS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </Section>
        
        {/* SEO Text Block */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-xl font-bold mb-3">Интернет-магазин электроники СитиТех</h2>
           <p className="text-sm text-gray-600 mb-2">
             Мы рады приветствовать вас в нашем интернет-магазине. Здесь вы найдете широкий ассортимент компьютерной техники, 
             электроники и бытовых приборов по самым выгодным ценам. Наш каталог постоянно обновляется, чтобы предложить 
             вам самые современные и актуальные решения.
           </p>
           <p className="text-sm text-gray-600">
             Покупая у нас, вы получаете гарантию качества, быструю доставку и профессиональную поддержку. 
             Следите за нашими акциями и специальными предложениями!
           </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;