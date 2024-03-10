import { createContext, useContext } from "react";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

const TranslationContext = createContext();

export const TranslationProvider = ({ children, locale }) => {
  const t = locale === "pt" ? pt : en;

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
