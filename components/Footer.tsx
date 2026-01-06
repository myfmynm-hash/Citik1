import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Каталог товаров</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Смартфоны и гаджеты</a></li>
              <li><a href="#" className="hover:text-primary">Ноутбуки и компьютеры</a></li>
              <li><a href="#" className="hover:text-primary">Телевизоры и аудио</a></li>
              <li><a href="#" className="hover:text-primary">Бытовая техника</a></li>
              <li><a href="#" className="hover:text-primary">Строительство и ремонт</a></li>
              <li><a href="#" className="hover:text-primary">Дом и сад</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-primary">Кредит и рассрочка</a></li>
              <li><a href="#" className="hover:text-primary">Гарантия</a></li>
              <li><a href="#" className="hover:text-primary">Возврат товара</a></li>
              <li><a href="#" className="hover:text-primary">Сервисные центры</a></li>
              <li><a href="#" className="hover:text-primary">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">О компании</a></li>
              <li><a href="#" className="hover:text-primary">Новости</a></li>
              <li><a href="#" className="hover:text-primary">Партнерам</a></li>
              <li><a href="#" className="hover:text-primary">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary">Политика конфиденциальности</a></li>
            </ul>
          </div>

          {/* Column 4 - Contacts */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-600">
                 <Phone size={20} className="mt-0.5 text-primary" />
                 <div>
                   <p className="font-bold text-lg text-black">8 (800) 775-00-00</p>
                   <p className="text-xs">Круглосуточно, бесплатно</p>
                 </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-600">
                 <Mail size={20} className="mt-0.5 text-primary" />
                 <div>
                   <a href="mailto:info@cititech.ru" className="hover:text-primary">info@cititech.ru</a>
                   <p className="text-xs">Для корпоративных клиентов</p>
                 </div>
              </div>
              
              <div className="pt-4">
                 <p className="text-sm font-medium mb-2">Мы в соцсетях</p>
                 <div className="flex space-x-4">
                   <a href="#" className="text-gray-400 hover:text-[#1877f2] transition-colors"><Facebook size={24} /></a>
                   <a href="#" className="text-gray-400 hover:text-[#1da1f2] transition-colors"><Twitter size={24} /></a>
                   <a href="#" className="text-gray-400 hover:text-[#e1306c] transition-colors"><Instagram size={24} /></a>
                   <a href="#" className="text-gray-400 hover:text-[#ff0000] transition-colors"><Youtube size={24} /></a>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          <p>&copy; 2024 ООО «СитиТех». Все права защищены. Указанная стоимость товаров и условия их приобретения действительны на текущую дату.</p>
        </div>
      </div>
    </footer>
  );
};