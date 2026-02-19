import { InputProps } from "@heroui/input";
import { SelectProps } from "@heroui/select";

export type ColorPickerInputType = "free" | "preset";

export type ColorPickerProps = Omit<
  InputProps & SelectProps,
  | "onChange"
  | "onValueChange"
  | "onSelectionChange"
  | "children"
  | "selectedKeys"
  | "defaultSelectedKeys"
  | "value"
> & {
  inputType: ColorPickerInputType;
  presets?: string[];
  onChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
};
