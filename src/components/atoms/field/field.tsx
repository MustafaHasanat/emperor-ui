import {
  AutocompleteField,
  CheckboxField,
  InputField,
  RadioField,
  SelectField,
  SwitchField,
  TextareaField,
  fieldClasses,
} from "@/components";
import type { FieldProps, FieldType } from "@/types";
import { cn } from "@/utils";
import type { FieldValues } from "react-hook-form";
import type { ReactNode } from "react";

export function Field<TSchema extends FieldValues>({
  className,
  classNames,
  name,
  type,
  inputProps,
  textareaProps,
  checkboxProps,
  selectProps,
  selectItemProps,
  autocompleteProps,
  autocompleteItemProps,
  switchProps,
  radioGroupProps,
  options,
  children,
}: FieldProps<TSchema>) {
  const components: Record<FieldType, ReactNode> = {
    input: <InputField<TSchema> name={name} inputProps={inputProps} />,
    textarea: (
      <TextareaField<TSchema> name={name} textareaProps={textareaProps} />
    ),
    checkbox: (
      <CheckboxField<TSchema> name={name} checkboxProps={checkboxProps}>
        {children}
      </CheckboxField>
    ),
    select: (
      <SelectField<TSchema>
        name={name}
        options={options}
        selectProps={selectProps}
        selectItemProps={selectItemProps}
      />
    ),
    autocomplete: (
      <AutocompleteField<TSchema>
        name={name}
        options={options}
        autocompleteProps={autocompleteProps}
        autocompleteItemProps={autocompleteItemProps}
      />
    ),
    switch: (
      <SwitchField<TSchema> name={name} switchProps={switchProps}>
        {children}
      </SwitchField>
    ),
    radio: (
      <RadioField<TSchema>
        name={name}
        options={options}
        radioGroupProps={radioGroupProps}
      />
    ),
  };

  return (
    <div
      data-slot="emperor-ui-field"
      className={cn(fieldClasses({}), className, classNames?.base)}
    >
      {components[type]}
    </div>
  );
}
