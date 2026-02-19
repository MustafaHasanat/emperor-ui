import { Control, FieldValues } from "react-hook-form";

export type FormBuilderValue<TSchema extends FieldValues> = {
  control: Control<TSchema, any, TSchema>;
  formValues: Partial<TSchema>;
};
