"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function AutocompleteField<TSchema extends FieldValues>({
  autocompleteItemProps,
  autocompleteProps,
  options,
  name,
}: Pick<
  FieldProps<TSchema>,
  "autocompleteItemProps" | "autocompleteProps" | "options" | "name"
>) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.autocomplete;

  if (!options?.length) {
    throw new Error("Field with type 'autocomplete' must include 'options'.");
  }

  const { control } = useFormBuilder<TSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Autocomplete
          {...theme}
          {...autocompleteProps}
          selectedKey={field.value ? String(field.value) : null}
          onSelectionChange={(selectedKey) =>
            field.onChange(selectedKey ? String(selectedKey) : "")
          }
        >
          {options.map((option) => (
            <AutocompleteItem key={option.key} {...autocompleteItemProps}>
              {option.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      )}
    />
  );
}
