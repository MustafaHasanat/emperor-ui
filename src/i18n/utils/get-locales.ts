import { Lang, Locale, ar, en } from "@/i18n";

export const getLocales = (lang: string | Lang): Locale =>
  (lang === "en" ? en : ar) as Locale;
