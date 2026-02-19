"use client";

import { Field } from "@/components";
import { FormBuilderProvider } from "@/providers";
import type { FormBuilderProps } from "@/types";
import { cn } from "@/utils";
import {
  Children,
  cloneElement,
  isValidElement,
  useMemo,
  type ReactElement,
} from "react";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { ZodType } from "zod";
import { z } from "zod";

export function FormBuilder<TSchema extends ZodType<any, any, any>>({
  children,
  className,
  classNames,
  formProps,
  onSubmit,
  onSuccess,
  onError,
  onValuesChange,
}: FormBuilderProps<TSchema>) {
  const { control, handleSubmit } = useForm<z.infer<TSchema>>(formProps);

  const emptyValues = useMemo(() => ({}), []);
  const formValues = useWatch({ control }) ?? emptyValues;

  const allChildren = Children.toArray(children);

  allChildren.forEach((child) => {
    if (!isValidElement(child) || child.type !== Field) {
      throw new Error(
        "FormBuilder accepts only 'Field' components as children.",
      );
    }
  });

  const formFields = allChildren.map((child) =>
    cloneElement(child as ReactElement),
  );

  useEffect(() => {
    onValuesChange?.(formValues);
  }, [formValues, onValuesChange]);

  const handleValidSubmit = async (values: z.infer<TSchema>) => {
    try {
      await onSubmit(values);
      onSuccess?.(values);
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <FormBuilderProvider<z.infer<TSchema>> value={{ control, formValues }}>
      <form
        className={cn(className, classNames?.base)}
        onSubmit={handleSubmit(handleValidSubmit, (errors) =>
          onError?.({
            errors,
          }),
        )}
      >
        {formFields}
      </form>
    </FormBuilderProvider>
  );
}
