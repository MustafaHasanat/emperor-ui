"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Textarea } from "@heroui/input";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function TextareaField<TSchema extends FieldValues>({
  textareaProps,
  name,
}: Pick<FieldProps<TSchema>, "textareaProps" | "name">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.textarea;

  const { control } = useFormBuilder<TSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Textarea
          {...theme}
          {...textareaProps}
          value={field.value ? String(field.value) : ""}
          onBlur={field.onBlur}
          onValueChange={field.onChange}
          isInvalid={textareaProps?.isInvalid ?? Boolean(fieldState.error)}
          errorMessage={
            textareaProps?.errorMessage ?? fieldState.error?.message
          }
        />
      )}
    />
  );
}
