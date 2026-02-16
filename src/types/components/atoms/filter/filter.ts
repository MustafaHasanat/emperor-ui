import type { SelectFilterProps, SharedComponentProps } from "@/types";
import { AutocompleteProps } from "@heroui/autocomplete";
import { CheckboxGroupProps } from "@heroui/checkbox";
import { CheckboxProps } from "@heroui/checkbox";
import { DatePickerProps } from "@heroui/date-picker";
import { InputProps } from "@heroui/input";
import { RadioProps } from "@heroui/radio";
import { SelectProps } from "@heroui/select";
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

export type FilterProps = SharedComponentProps &
  SelectFilterProps & {
    classNames?: FilterClassnames;
    type: FilterType;
    paramKey: string;
    searchProps?: InputProps;
    selectProps?: Omit<SelectProps, "children">;
    autocompleteProps?: AutocompleteProps;
    dateProps?: DatePickerProps;
    numericProps?: InputProps;
    checkboxProps?: CheckboxProps;
    checkboxGroupProps?: CheckboxGroupProps;
    radioProps?: RadioProps;
    switchProps?: SwitchProps;
    rangeProps?: SliderProps;
  };
