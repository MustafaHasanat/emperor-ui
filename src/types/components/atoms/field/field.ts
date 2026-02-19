import type { SharedComponentProps } from "@/types";
import type {
  AutocompleteItemProps,
  AutocompleteProps,
} from "@heroui/autocomplete";
import type { CheckboxProps } from "@heroui/checkbox";
import type { InputProps, TextAreaProps } from "@heroui/input";
import type { RadioGroupProps } from "@heroui/radio";
import type { SelectItemProps, SelectProps } from "@heroui/select";
import type { SwitchProps } from "@heroui/switch";
import type { FieldValues, Path } from "react-hook-form";

export type FieldClassnames = {
  base?: string;
  field?: string;
};

export type FieldType =
  | "input"
  | "textarea"
  | "checkbox"
  | "select"
  | "autocomplete"
  | "switch"
  | "radio";

export type FieldOption = {
  key: string;
  label: string;
};

type FieldTypesProps = {
  inputProps?: InputProps;
  textareaProps?: TextAreaProps;
  checkboxProps?: CheckboxProps;
  selectProps?: Omit<
    SelectProps,
    "children" | "selectedKeys" | "onSelectionChange"
  >;
  selectItemProps?: SelectItemProps;
  autocompleteProps?: Omit<
    AutocompleteProps,
    "children" | "selectedKey" | "onSelectionChange"
  >;
  autocompleteItemProps?: AutocompleteItemProps;
  switchProps?: SwitchProps;
  radioGroupProps?: Omit<
    RadioGroupProps,
    "children" | "value" | "onValueChange"
  >;
};

type SharedFieldProps<TFieldValues extends FieldValues> = {
  classNames?: FieldClassnames;
  type: FieldType;
  name: Path<TFieldValues>;
  options?: FieldOption[];
};

export type FieldProps<TFieldValues extends FieldValues = FieldValues> =
  SharedComponentProps & FieldTypesProps & SharedFieldProps<TFieldValues>;
