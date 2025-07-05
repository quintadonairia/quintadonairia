"use client";

import { createContext, useContext, ReactNode } from "react";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

type TranslationKeys = typeof en;

const TranslationContext = createContext<TranslationKeys | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  locale: string;
}

export const TranslationProvider = ({ children, locale }: TranslationProviderProps) => {
  const t: TranslationKeys = locale === "pt" ? pt : en;

  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationKeys => {
  const t = useContext(TranslationContext);
  if (!t) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return t;
};
