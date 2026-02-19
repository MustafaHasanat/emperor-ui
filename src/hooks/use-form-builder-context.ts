import { FormBuilderContext } from "@/context";
import { FormBuilderValue } from "@/types";
import { useContext } from "react";
import { FieldValues } from "react-hook-form";

export function useFormBuilder<TSchema extends FieldValues>() {
  const context = useContext(FormBuilderContext) as FormBuilderValue<TSchema>;

  if (!context) {
    throw new Error(
      "'useFormBuilder' must be used within a 'FormBuilderProvider', make sure to wrap 'Field' components with 'FormBuilder' as well.",
    );
  }

  return context;
}
