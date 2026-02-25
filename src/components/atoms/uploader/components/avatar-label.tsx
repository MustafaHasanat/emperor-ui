"use client";

import { Placeholders } from "@/enums";
import { Avatar } from "@heroui/avatar";
import { Spinner } from "@heroui/spinner";
import { cn, mergeUploaderLocale } from "@/utils";
import { useEmperorUI, useUploaderContext } from "@/hooks";
import { useState } from "react";
import { getLocales, Locale } from "@/i18n";

export function AvatarLabel() {
  const { config } = useEmperorUI();
  const [draggableMessage, setDraggableMessage] = useState<string | null>(null);

  const {
    labelId,
    classNames,
    labelContent,
    isDraggable,
    onInputChange,
    avatarLabelContent,
    placeholderImage,
    files,
    isLoading,
    isMulti,
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
      <div className={cn("mx-auto", classNames?.label)}>
        <Spinner className="mx-auto" size="lg" />;
      </div>
    );

  return (
    <label
      className={cn(
        "w-full cursor-pointer mx-auto transition-opacity flex flex-col gap-5",
        draggableMessage && "opacity-60",
        classNames?.label,
      )}
      htmlFor={labelId}
      onDrop={isDraggable ? handleDrop : () => {}}
      onDragOver={isDraggable ? handleDragOver : () => {}}
      onDragLeave={isDraggable ? handleDragLeave : () => {}}
    >
      {avatarLabelContent}

      {labelContent || (
        <Avatar
          src={
            files?.[0]?.view ||
            placeholderImage ||
            Placeholders.PLACEHOLDER_MALE_AVATAR
          }
          alt="avatar"
          size="lg"
          className={cn("size-24", classNames?.avatar)}
        />
      )}
    </label>
  );
}
