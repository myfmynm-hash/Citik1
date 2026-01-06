import React from 'react';
import { ShoppingCart, Heart, BarChart2, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative border border-transparent hover:border-gray-200">
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            -{discount}%
          </span>
        )}
        {product.isHit && (
          <span className="bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded">
            ХИТ
          </span>
        )}
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
            NEW
          </span>
        )}
      </div>

      {/* Action Overlay (Desktop) */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
         <button className="bg-white/90 p-1.5 rounded-full text-gray-500 hover:text-red-500 shadow-sm border border-gray-100">
           <Heart size={18} />
         </button>
         <button className="bg-white/90 p-1.5 rounded-full text-gray-500 hover:text-blue-500 shadow-sm border border-gray-100">
           <BarChart2 size={18} />
         </button>
      </div>

      {/* Image */}
      <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
           <div className="flex text-orange-400">
             {[...Array(5)].map((_, i) => (
               <Star 
                  key={i} 
                  size={12} 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
               />
             ))}
           </div>
           <span className="text-xs text-gray-400">{product.reviewsCount} отзывов</span>
        </div>

        {/* Title */}
        <a href={`/product/${product.id}`} className="text-sm font-medium text-gray-800 hover:text-primary mb-3 line-clamp-3 leading-snug">
          {product.title}
        </a>

        {/* Specs (Compact) */}
        {product.specs && (
          <ul className="text-[10px] text-gray-500 mb-3 space-y-0.5 hidden group-hover:block transition-all">
            {product.specs.slice(0, 3).map((spec, i) => (
              <li key={i}>• {spec}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-3">
             <span className="text-xl font-bold text-gray-900">{product.price.toLocaleString('ru-RU')} ₽</span>
             {product.oldPrice && (
               <span className="text-xs text-gray-400 line-through decoration-red-500">{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
             )}
          </div>

          {/* Cart Button */}
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-gray-100 hover:bg-primary hover:text-white text-gray-800 font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};