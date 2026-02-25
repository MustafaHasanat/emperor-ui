"use client";

import { cn, mergeUploaderLocale } from "@/utils";
import { useEmperorUI, useUploaderContext } from "@/hooks";
import { useMemo } from "react";
import { getLocales, Locale } from "@/i18n";

export function UploadFileErrorBox() {
  const { config } = useEmperorUI();
  const { files, isRequired, classNames, errorMessage, locales } =
    useUploaderContext();

  const configLocales = config?.interLocalization?.locales;
  const lang =
    config?.interLocalization?.lang ||
    config?.interLocalization?.defaultLanguage ||
    "en";

  const defaultLocale = getLocales(lang);
  const uploaderLocale = mergeUploaderLocale({
    defaultUploaderLocale: defaultLocale.atoms.uploader,
    configUploaderLocale: (configLocales?.[lang] as Locale | undefined)?.atoms
      ?.uploader,
    contextUploaderLocale: locales,
  });

  const isError = useMemo(
    () => files?.length === 0 && isRequired,
    [files, isRequired],
  );

  if (isError)
    return (
      <p className={cn("text-[14px] text-danger", classNames?.error)}>
        {errorMessage ?? uploaderLocale.errorUploadingFile}
      </p>
    );

  return null;
}
