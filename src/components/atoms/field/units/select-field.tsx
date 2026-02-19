"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Select, SelectItem } from "@heroui/select";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function SelectField<TSchema extends FieldValues>({
  options,
  selectItemProps,
  selectProps,
  name,
}: Pick<
  FieldProps<TSchema>,
  "options" | "selectItemProps" | "selectProps" | "name"
>) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.select;

  if (!options?.length) {
    throw new Error("Field with type 'select' must include 'options'.");
  }

  const { control } = useFormBuilder<TSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          {...theme}
          {...selectProps}
          selectedKeys={field.value ? [String(field.value)] : []}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0];
            field.onChange(selectedKey ? String(selectedKey) : "");
          }}
        >
          {options.map((option) => (
            <SelectItem key={option.key} {...selectItemProps}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
}
