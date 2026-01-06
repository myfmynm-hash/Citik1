import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, BarChart2, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 text-xs py-1.5 border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-gray-600">
          <div className="flex items-center space-x-6">
            <button className="flex items-center hover:text-primary transition-colors">
              <MapPin size={14} className="mr-1" />
              <span>Москва</span>
            </button>
            <span className="hover:text-black cursor-pointer">Магазины</span>
            <span className="hover:text-black cursor-pointer">Для бизнеса</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:88001234567" className="flex items-center font-bold text-gray-800 hover:text-primary">
              <Phone size={14} className="mr-1" />
              <span>+7 (800) 123-45-67</span>
            </a>
            <span className="hover:text-black cursor-pointer">Личный кабинет</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="text-2xl font-bold tracking-tight text-secondary">
                cititech
              </span>
            </a>
          </div>

          {/* Catalog Button */}
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded font-bold transition-colors shadow-sm active:scale-95">
            <Menu size={20} />
            <span>Каталог</span>
          </button>

          {/* Search Bar */}
          <div className="flex-grow relative hidden md:block">
            <input 
              type="text" 
              placeholder="Поиск по товарам..." 
              className="w-full border-2 border-primary rounded px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 bg-transparent text-primary hover:text-primary-hover flex items-center justify-center">
              <Search size={20} />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 lg:space-x-6 flex-shrink-0">
            <ActionIcon icon={<User size={24} />} label="Войти" />
            <ActionIcon icon={<BarChart2 size={24} />} label="Сравнить" count={0} />
            <ActionIcon icon={<Heart size={24} />} label="Избранное" count={12} />
            <ActionIcon icon={<ShoppingCart size={24} />} label="Корзина" count={cartCount} active />
          </div>
        </div>
        
        {/* Mobile Search (visible only on small screens) */}
        <div className="mt-3 md:hidden relative">
          <input 
              type="text" 
              placeholder="Поиск..." 
              className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 outline-none focus:border-primary text-sm"
          />
          <Search size={18} className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

const ActionIcon: React.FC<{ icon: React.ReactNode; label: string; count?: number; active?: boolean }> = ({ icon, label, count, active }) => (
  <button className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-colors group relative">
    <div className={`relative ${active ? 'text-primary' : ''} group-hover:scale-110 transition-transform`}>
      {icon}
      {count !== undefined && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
          {count}
        </span>
      )}
    </div>
    <span className="text-[10px] sm:text-xs mt-1 font-medium hidden sm:block">{label}</span>
  </button>
);