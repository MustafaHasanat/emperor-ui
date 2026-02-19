import type { SelectFilterProps, SharedComponentProps } from "@/types";
import { AutocompleteItemProps, AutocompleteProps } from "@heroui/autocomplete";
import { CheckboxGroupProps } from "@heroui/checkbox";
import { CheckboxProps } from "@heroui/checkbox";
import { DatePickerProps } from "@heroui/date-picker";
import { InputProps } from "@heroui/input";
import { RadioProps } from "@heroui/radio";
import { SelectItemProps, SelectProps } from "@heroui/select";
import { SliderProps } from "@heroui/slider";
import { SwitchProps } from "@heroui/switch";

export type FilterClassnames = {
  base?: string;
  field?: string;
};

export type FilterType =
  | "search"
  | "select"
  | "autocomplete"
  | "date"
  | "numeric"
  | "checkbox"
  | "checkboxGroup"
  | "switch"
  | "range";

type FilterTypesProps = {
  searchProps?: InputProps;
  selectProps?: Omit<SelectProps, "children">;
  selectItemProps?: SelectItemProps;
  autocompleteProps?: Omit<AutocompleteProps, "children">;
  autocompleteItemProps?: AutocompleteItemProps;
  dateProps?: DatePickerProps;
  numericProps?: InputProps;
  checkboxProps?: CheckboxProps;
  checkboxGroupProps?: Omit<CheckboxGroupProps, "children">;
  radioProps?: RadioProps;
  switchProps?: SwitchProps;
  rangeProps?: SliderProps;
};

type SharedFilterProps = {
  classNames?: FilterClassnames;
  type: FilterType;
  paramKey: string;
};

export type FilterProps = SharedComponentProps &
  SelectFilterProps &
  FilterTypesProps &
  SharedFilterProps;
