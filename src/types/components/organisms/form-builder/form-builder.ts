import type { SharedComponentProps } from "@/types";
import { ReactNode } from "react";
import type {
  FieldErrors,
  FieldValues,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import type { ZodType } from "zod";
import { z } from "zod";

export type FormBuilderSubmitArgs<TFieldValues extends FieldValues> = {
  values: TFieldValues;
  form: UseFormReturn<TFieldValues>;
};

export type FormBuilderSuccessArgs<TFieldValues extends FieldValues> = {
  values: TFieldValues;
  form: UseFormReturn<TFieldValues>;
};

export type FormBuilderErrorArgs<TFieldValues extends FieldValues> = {
  error?: unknown;
  errors?: FieldErrors<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
};

export type FormBuilderProps<TSchema extends ZodType<any, any, any>> = Omit<
  SharedComponentProps,
  "children"
> & {
  children: ReactNode;
  formProps?: UseFormProps<z.infer<TSchema>>;
  onSubmit: (values: z.infer<TSchema>) => Promise<unknown> | unknown;
  onSuccess?: (values: z.infer<TSchema>) => void;
  onError?: (error: unknown) => void;
  /** Called whenever form values change. Use this to read values outside FormBuilder (e.g. in parent state). */
  onValuesChange?: (values: Partial<z.infer<TSchema>>) => void;
};
