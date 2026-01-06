import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* Main Banner - Takes 3 cols */}
      <div className="lg:col-span-3 bg-white rounded-lg shadow-sm overflow-hidden relative h-[300px] md:h-[400px] group cursor-pointer">
        <img 
          src="https://picsum.photos/1000/500?grayscale&blur=2" 
          alt="Big Sale" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-center px-8 md:px-16 text-white">
          <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded w-fit mb-4 uppercase tracking-wider">Акция</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Техника для <br/> твоих побед</h1>
          <p className="text-gray-200 mb-8 max-w-md">Собери свой идеальный сетап. Скидки на игровые ноутбуки и периферию до конца месяца.</p>
          <button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded w-fit transition-colors">
            Перейти в каталог
          </button>
        </div>
      </div>

      {/* Side Banners - Takes 1 col */}
      <div className="hidden lg:flex flex-col gap-4 h-[400px]">
        <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden relative group cursor-pointer">
          <img src="https://picsum.photos/400/300?random=20" alt="Promo 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-white font-bold text-lg mb-1">Рассрочка 0%</span>
              <div className="flex items-center text-primary text-sm font-medium">
                Подробнее <ChevronRight size={16} />
              </div>
           </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden relative group cursor-pointer">
          <img src="https://picsum.photos/400/300?random=21" alt="Promo 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-white font-bold text-lg mb-1">Бонусы за отзыв</span>
              <div className="flex items-center text-primary text-sm font-medium">
                Подробнее <ChevronRight size={16} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};