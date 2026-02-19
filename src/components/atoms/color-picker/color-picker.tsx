"use client";

import type { ColorPickerProps } from "@/types";
import { FreeColorPicker, PresetColorPicker } from "@/components";

export function ColorPicker({ ...props }: ColorPickerProps) {
  if (props?.inputType === "preset") {
    return <PresetColorPicker {...props} />;
  }

  return <FreeColorPicker {...props} />;
}
