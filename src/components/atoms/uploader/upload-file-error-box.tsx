"use client";

import { cn } from "@heroui/react";
import { useEmperorUI, useUploaderContext } from "@/hooks";
import { useMemo } from "react";

export function UploadFileErrorBox() {
  const { config } = useEmperorUI();
  const { files, isRequired, classNames, errorMessage } = useUploaderContext();

  const locales = config?.interLocalization?.locales;
  const lang = config?.interLocalization?.lang;

  const locale = locales?.[lang || "en"];

  const isError = useMemo(
    () => files?.length === 0 && isRequired,
    [files, isRequired],
  );

  if (isError)
    return (
      <p className={cn("text-[14px] text-danger", classNames?.error)}>
        {errorMessage || locale?.errorUploadingFile}
      </p>
    );

  return null;
}
