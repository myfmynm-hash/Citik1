import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionProps {
  title: string;
  children: ReactNode;
  actionText?: string;
  onAction?: () => void;
}

export const Section: React.FC<SectionProps> = ({ title, children, actionText, onAction }) => {
  return (
    <section className="bg-transparent">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {actionText && (
          <button 
            onClick={onAction} 
            className="flex items-center text-primary hover:text-primary-hover font-medium text-sm transition-colors"
          >
            {actionText}
            <ChevronRight size={16} className="ml-1" />
          </button>
        )}
      </div>
      {children}
    </section>
  );
};