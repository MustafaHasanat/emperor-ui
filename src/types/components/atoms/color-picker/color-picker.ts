import { InputProps } from "@heroui/input";
import { SelectProps } from "@heroui/select";

export type ColorPickerInputType = "free" | "preset";

export type ColorPickerProps = Omit<
  InputProps & SelectProps,
  "onChange" | "children"
> & {
  inputType: ColorPickerInputType;
  presets?: string[];
};
