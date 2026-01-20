"use client";

import { cn } from "@heroui/react";
import { useUploaderContext } from "@hooks";
import { fileTypesMapping } from "@constants";

export function UploadFileInput() {
  const {
    fileTypes = [],
    isMulti,
    labelId,
    onInputChange,
    classNames,
  } = useUploaderContext();

  const getFileAccepts = (): string => {
    const acceptedTypes: string[] = [];

    fileTypes?.forEach((fileType) => {
      acceptedTypes.push(...(fileTypesMapping?.[fileType] || []));
    });

    return acceptedTypes.join(", ");
  };

  return (
    <input
      id={labelId}
      type="file"
      accept={getFileAccepts()}
      className={cn("hidden", classNames?.input)}
      onChange={onInputChange}
      multiple={isMulti}
    />
  );
}
