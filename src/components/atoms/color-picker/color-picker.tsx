"use client";

import type { ColorPickerProps } from "@/types";
import { FreeColorPicker, PresetColorPicker } from "@/components";
import "./styles/color-picker.css";

export function ColorPicker({ ...props }: ColorPickerProps) {
  if (props?.inputType === "preset") {
    return <PresetColorPicker {...props} />;
  }

  return <FreeColorPicker {...props} />;
}
