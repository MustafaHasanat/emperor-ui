"use client";

import { useMemo } from "react";
import { Input } from "@heroui/input";
import { cn } from "@/utils";
import type { ColorPickerProps } from "@/types";
import { CopyButton } from "@/components";
import { useEmperorUI } from "@/hooks";

const HEX_COLOR_REGEX = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

export function FreeColorPicker({
  className,
  classNames,
  value = "#000000",
  onValueChange,
  inputType = "free",
  ...props
}: ColorPickerProps) {
  const { config } = useEmperorUI();

  const locales = config?.interLocalization?.locales;
  const lang = config?.interLocalization?.lang;
  const locale = locales?.[lang ?? "en"];
  const errorMessage = locale?.atoms?.colorPicker?.invalidColorFormat;

  const isInvalid = useMemo(() => {
    if (!value) return true;
    return HEX_COLOR_REGEX.test(value);
  }, [value]);

  const handleValueChange = (newValue: string) => {
    onValueChange?.(newValue);
  };

  return (
    <Input
      labelPlacement="outside"
      variant="faded"
      className={cn(className)}
      classNames={{ label: "font-bold", input: "h-12", ...classNames }}
      value={value}
      onValueChange={handleValueChange}
      isInvalid={isInvalid}
      errorMessage={isInvalid ? errorMessage : undefined}
      endContent={<CopyButton value={value} />}
      startContent={
        <input
          type="color"
          className="color-swatch"
          value={value}
          onChange={(e) => {
            handleValueChange(e.target.value);
          }}
        />
      }
      {...props}
    />
  );
}
