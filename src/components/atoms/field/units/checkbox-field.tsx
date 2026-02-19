"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Checkbox } from "@heroui/checkbox";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function CheckboxField<TSchema extends FieldValues>({
  checkboxProps,
  name,
  children,
}: Pick<FieldProps<TSchema>, "checkboxProps" | "name" | "children">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.checkbox;

  const { control } = useFormBuilder<TSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Checkbox
          {...theme}
          {...checkboxProps}
          isSelected={Boolean(value)}
          onValueChange={onChange}
        >
          {children}
        </Checkbox>
      )}
    />
  );
}
