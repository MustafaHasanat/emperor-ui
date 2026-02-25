"use client";

import { Spinner } from "@heroui/spinner";
import { cn, mergeUploaderLocale } from "@/utils";
import { useEmperorUI, useUploaderContext } from "@/hooks";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import { getLocales, Locale } from "@/i18n";

export function UploadFileLabel() {
  const { config } = useEmperorUI();
  const [draggableMessage, setDraggableMessage] = useState("");
  const {
    labelId,
    classNames,
    labelContent,
    isDraggable,
    onInputChange,
    isLoading,
    isMulti,
    files,
    locales,
  } = useUploaderContext();

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

  const handleDrop = (
    event: React.ChangeEvent<HTMLInputElement> &
      React.DragEvent<HTMLLabelElement>,
  ) => {
    event.preventDefault();
    if (onInputChange) onInputChange(event);
  };

  const handleDragOver = (
    event: React.ChangeEvent<HTMLInputElement> &
      React.DragEvent<HTMLLabelElement>,
  ) => {
    event.preventDefault();
    setDraggableMessage(uploaderLocale.dropHere);
  };

  const handleDragLeave = () => {
    setDraggableMessage("");
  };

  if (!isMulti && files?.length > 0) {
    return null;
  }

  if (isLoading)
    return (
      <div className={cn("w-full flex mx-auto", classNames?.label)}>
        <Spinner className="mx-auto" size="lg" />;
      </div>
    );

  return (
    <label
      className={cn("w-full cursor-pointer mx-auto", classNames?.label)}
      htmlFor={labelId}
      onDrop={isDraggable ? handleDrop : () => {}}
      onDragOver={isDraggable ? handleDragOver : () => {}}
      onDragLeave={isDraggable ? handleDragLeave : () => {}}
    >
      {labelContent || (
        <div className="pointer-events-none flex size-full flex-col items-center justify-center gap-2 rounded-md border border-dashed bg-primary/10 px-2 py-8 text-xs">
          <UploadCloud className="size-10 text-primary" />

          <p className="font-bold">{uploaderLocale.selectFile}</p>
          <p className="opacity-70">{uploaderLocale.selectionTypes}</p>

          {draggableMessage && (
            <p className="text-sm font-bold">{draggableMessage}</p>
          )}
        </div>
      )}
    </label>
  );
}
