import { createContext, useContext } from 'react';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children, locale }) => {
  const t = locale === 'pt' ? pt : en;

  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const t = useContext(TranslationContext);

  return t;
};
