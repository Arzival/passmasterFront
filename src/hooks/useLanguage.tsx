import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import en from '../lang/en.json';
import es from '../lang/es.json';

type LanguageStore = {
  language: 'en' | 'es';
  translations: typeof en;
  toggleLanguage: () => void;
};

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'es',
      translations: es,
      toggleLanguage: () => 
        set((state) => ({
          language: state.language === 'en' ? 'es' : 'en',
          translations: state.language === 'en' ? es : en,
        })),
    }),
    {
      name: 'language-storage',
    }
  )
);