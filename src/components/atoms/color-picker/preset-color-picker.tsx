"use client";

import { cn } from "@/utils";
import type { ColorPickerProps } from "@/types";
import { Select, SelectItem } from "@heroui/select";
import { CopyButton } from "@/components";

export function PresetColorPicker({
  className,
  classNames,
  value = "#000000",
  onChange,
  defaultValue,
  inputType,
  presets = [],
  ...props
}: ColorPickerProps) {
  if (inputType === "preset" && (!presets || presets?.length === 0))
    throw new Error(
      "Presets array is required in the ColorPicker when the input type is 'preset'.",
    );

  return (
    <Select
      labelPlacement="outside"
      variant="faded"
      className={cn(className)}
      classNames={{
        label: "font-bold",
        input: "h-12",
        trigger: "min-w-52",
        ...classNames,
      }}
      selectedKeys={value ? [value] : undefined}
      defaultSelectedKeys={defaultValue ? [defaultValue] : undefined}
      onSelectionChange={(value) => onChange?.(value?.currentKey ?? "")}
      endContent={<CopyButton value={value} />}
      renderValue={() => {
        return (
          <div className="flex items-center gap-2 text-gray-600">
            <div
              style={{ backgroundColor: value }}
              className="size-4 rounded-full border border-gray-300"
            />
            {value}
          </div>
        );
      }}
      {...props}
    >
      {Array.from(new Set(presets))?.map((preset) => (
        <SelectItem
          key={preset}
          startContent={
            <div
              style={{ backgroundColor: preset }}
              className="size-4 rounded-full border border-gray-300"
            />
          }
        >
          {preset}
        </SelectItem>
      ))}
    </Select>
  );
}
