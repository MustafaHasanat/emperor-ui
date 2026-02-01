import { Locale } from "@/i18n";

export type AppDirection = "ltr" | "rtl";

export type EmperorUILang = "en" | "ar";

export type EmperorUILocales = Record<
  EmperorUILang,
  Partial<{
    atoms?: {
      uploader?: Partial<Locale["atoms"]["uploader"]>;
    };
  }>
>;

export type EmperorUIInterLocalization = {
  lang?: EmperorUILang;
  languages?: EmperorUILang[];
  defaultLanguage?: EmperorUILang;
  isMultiLingual?: boolean;
  dir?: AppDirection;
  locales?: EmperorUILocales;
};
