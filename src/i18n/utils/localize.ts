import { Lang } from "@/i18n";

export const localize = ({
  object,
  lang,
  key,
}: {
  lang: Lang;
  key: string;
  object?: Record<string, string> | undefined;
}): string | null | undefined =>
  ({
    ar: object?.[key],
    en: object?.[key],
  })[lang] || null;
