import { InputProps, TextAreaProps } from "@heroui/input";
import { ButtonProps } from "@heroui/button";
import { CardProps } from "@heroui/card";
import { DropdownProps } from "@heroui/dropdown";
import { ModalProps } from "@heroui/modal";
import { CheckboxGroupProps, CheckboxProps } from "@heroui/checkbox";
import { AutocompleteItemProps, AutocompleteProps } from "@heroui/autocomplete";
import { SelectProps, SelectItemProps } from "@heroui/select";
import { RadioProps } from "@heroui/radio";
import { SwitchProps } from "@heroui/switch";
import { DatePickerProps } from "@heroui/date-picker";
import { SliderProps } from "@heroui/slider";

export type EmperorUITheme = {
  components?: {
    input?: InputProps;
    textarea?: TextAreaProps;
    button?: ButtonProps;
    card?: CardProps;
    dropdown?: DropdownProps;
    modal?: ModalProps;
    checkbox?: CheckboxProps;
    checkboxGroup?: CheckboxGroupProps;
    autocomplete?: Omit<AutocompleteProps, "children">;
    autocompleteItem?: Omit<AutocompleteItemProps, "children">;
    radio?: Omit<RadioProps, "children">;
    select?: Omit<SelectProps, "children">;
    selectItem?: Omit<SelectItemProps, "children">;
    switch?: SwitchProps;
    datePicker?: DatePickerProps;
    slider?: SliderProps;
  };
};
