"use client";

import { createContext, useContext, ReactNode } from "react";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

// Define a more specific type for the translation structure
interface TranslationData {
  contacts: Record<string, string>;
  experiences: Record<string, any>;
  footer: Record<string, any>;
  global: Record<string, any>;
  home: Record<string, any>;
  lodging: Record<string, any>;
  navigation: Record<string, string>;
  restaurant: Record<string, string>;
  terms: Record<string, any>;
}

const TranslationContext = createContext<TranslationData | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  locale: string;
}

export const TranslationProvider = ({ children, locale }: TranslationProviderProps) => {
  const t: TranslationData = locale === "pt" ? pt : en;

  return (
    <TranslationContext.Provider value={t}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationData => {
  const t = useContext(TranslationContext);
  if (!t) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return t;
};
