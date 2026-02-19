import type { FieldValues } from "react-hook-form";
import type { ReactNode } from "react";
import { FormBuilderValue } from "@/types";
import { FormBuilderContext } from "@/context";

export function FormBuilderProvider<TSchema extends FieldValues>({
  children,
  value,
}: {
  children: ReactNode;
  value: FormBuilderValue<TSchema>;
}) {
  return (
    <FormBuilderContext.Provider value={value as FormBuilderValue<FieldValues>}>
      {children}
    </FormBuilderContext.Provider>
  );
}
