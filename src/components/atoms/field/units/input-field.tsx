"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Input } from "@heroui/input";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function InputField<TSchema extends FieldValues>({
  inputProps,
  name,
}: Pick<FieldProps<TSchema>, "inputProps" | "name">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.input;

  const { control } = useFormBuilder<TSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          {...theme}
          {...inputProps}
          value={field.value ? String(field.value) : ""}
          onBlur={field.onBlur}
          onValueChange={field.onChange}
          isInvalid={inputProps?.isInvalid ?? Boolean(fieldState.error)}
          errorMessage={inputProps?.errorMessage ?? fieldState.error?.message}
        />
      )}
    />
  );
}
