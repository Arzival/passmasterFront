import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
    >
      {language.toUpperCase()}
    </button>
  );
}