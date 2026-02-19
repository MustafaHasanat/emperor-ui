"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { cn } from "@/utils";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";
import { useMemo } from "storybook/internal/preview-api";

export function CheckboxGroupFilter({
  classNames,
  checkboxGroupProps,
  paramKey,
  options,
}: Pick<
  FilterProps,
  "classNames" | "checkboxGroupProps" | "paramKey" | "options"
>) {
  const { config } = useEmperorUI();

  const themeCheckboxGroup = config?.theme?.components?.checkboxGroup;
  const themeCheckbox = config?.theme?.components?.checkbox;

  const { getParam, setParams } = useSearchParamsHandler();

  const { value } = useMemo(() => {
    const valueStr = getParam(paramKey);
    const value = valueStr ? valueStr.split(",").filter(Boolean) : [];

    return { value };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramKey]);

  if (!options?.length)
    throw new Error(
      "Filter with type 'checkboxGroup' must have 'options' property.",
    );

  return (
    <CheckboxGroup
      {...themeCheckboxGroup}
      {...checkboxGroupProps}
      value={value}
      onValueChange={(values) =>
        setParams({
          params: {
            [paramKey]: values.length > 0 ? values.join(",") : undefined,
          },
        })
      }
      classNames={{
        label: "font-semibold",
        ...themeCheckboxGroup?.classNames,
        ...checkboxGroupProps?.classNames,
      }}
      className={cn(
        filterClasses({ type: "checkboxGroup" }),
        classNames?.field,
      )}
    >
      {options.map((option) => (
        <Checkbox key={option.key} {...themeCheckbox} value={option.key}>
          {option.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}
