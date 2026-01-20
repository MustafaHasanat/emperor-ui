"use client";

import { Spinner, cn } from "@heroui/react";
import { useEmperorUI, useUploaderContext } from "@hooks";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

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

          <p className="font-bold">{locale?.selectFile || ""}</p>
          <p className="opacity-70">{locale?.selectionTypes || ""}</p>

          {draggableMessage && (
            <p className="text-sm font-bold">{draggableMessage}</p>
          )}
        </div>
      )}
    </label>
  );
}
