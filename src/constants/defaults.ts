import { en, ar } from "@/i18n";
import type { EmperorUIConfig } from "@/types";

export const defaultEmperorUIConfig: EmperorUIConfig = {
  layout: {
    withScaffold: true,
  },
  interLocalization: {
    lang: "en",
    languages: ["en", "ar"],
    defaultLanguage: "en",
    dir: "ltr",
    isMultiLingual: false,
    locales: {
      en,
      ar,
    },
  },
};
