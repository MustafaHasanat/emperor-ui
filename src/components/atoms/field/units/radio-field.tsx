"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Radio, RadioGroup } from "@heroui/radio";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function RadioField<TSchema extends FieldValues>({
  options,
  radioGroupProps,
  name,
}: Pick<FieldProps<TSchema>, "options" | "radioGroupProps" | "name">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.radio;

  const { control } = useFormBuilder<TSchema>();

  if (!options?.length) {
    throw new Error("Field with type 'radio' must include 'options'.");
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroup
          {...theme}
          {...radioGroupProps}
          value={field.value ? String(field.value) : ""}
          onValueChange={field.onChange}
        >
          {options.map((option) => (
            <Radio key={option.key} value={option.key}>
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      )}
    />
  );
}
