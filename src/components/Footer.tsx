import React from 'react';
import { Coffee } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Footer() {
  const { translations: t } = useLanguage();

  return (
    <footer className="bg-white shadow-inner py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center space-x-2 text-gray-600">
        <span>{t.footer.madeBy}</span>
        <span>{t.footer.with}</span>
        <Coffee className="w-4 h-4 text-brown-600" />
      </div>
    </footer>
  );
}