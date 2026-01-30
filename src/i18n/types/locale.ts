import { ar, en, i18n } from "@/i18n";

export type Lang = (typeof i18n)["locales"][number];

export type Locale = typeof ar | typeof en;
