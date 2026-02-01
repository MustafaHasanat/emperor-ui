import { LangKey } from "@/i18n/constants/locales"; //! never change this until you solve the circular dependency issue

export const i18n = {
  defaultLocale: "en",
  locales: [LangKey.ARABIC, LangKey.ENGLISH],
  localDetection: true,
};
