"use client";

import type { FieldProps } from "@/types";
import { Controller, type FieldValues } from "react-hook-form";
import { Switch } from "@heroui/switch";
import { useEmperorUI, useFormBuilder } from "@/hooks";

export function SwitchField<TSchema extends FieldValues>({
  switchProps,
  name,
  children,
}: Pick<FieldProps<TSchema>, "switchProps" | "name" | "children">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.switch;

  const { control } = useFormBuilder<TSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          {...theme}
          {...switchProps}
          isSelected={Boolean(field.value)}
          onValueChange={field.onChange}
        >
          {children}
        </Switch>
      )}
    />
  );
}
