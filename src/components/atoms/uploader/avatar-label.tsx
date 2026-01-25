"use client";

import { Placeholders } from "@/enums";
import { Avatar, Spinner, cn } from "@heroui/react";
import { useEmperorUI, useUploaderContext } from "@/hooks";
import { useState } from "react";

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
  } = useUploaderContext();

  const locales = config?.interLocalization?.locales;
  const lang = config?.interLocalization?.lang;

  const locale = locales?.[lang || "en"];

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
    setDraggableMessage(locale?.dropHere || "");
  };

  const handleDragLeave = () => {
    setDraggableMessage("");
  };

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
