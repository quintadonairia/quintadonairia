import en from '@/locales/en.json';
import pt from '@/locales/pt.json';
import { createContext, useContext } from 'react';

type Translations = typeof en;

const TranslationContext = createContext<Translations | undefined>(undefined);

interface TranslationProviderProps {
  children: React.ReactNode;
  locale: string;
}

export function TranslationProvider({
  children,
  locale,
}: TranslationProviderProps) {
  const t = locale === 'pt' ? pt : en;

  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation(): Translations {
  const t = useContext(TranslationContext);

  if (t === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return t;
}
