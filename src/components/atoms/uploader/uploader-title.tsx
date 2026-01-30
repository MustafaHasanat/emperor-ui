"use client";

import { useUploaderContext } from "@/hooks";
import { ComponentProps } from "react";
import { cn } from "@/utils";

export function UploaderTitle({ ...props }: ComponentProps<"h3">) {
  const { title, classNames } = useUploaderContext();

  if (!title) return null;

  return (
    <h3
      className={cn("text-lg font-bold", classNames?.title)}
      data-slot="emperor-uploader-title"
      {...props}
    >
      {title}
    </h3>
  );
}
