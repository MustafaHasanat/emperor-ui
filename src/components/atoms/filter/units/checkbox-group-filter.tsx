"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { CheckboxGroup } from "@heroui/checkbox";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function CheckboxGroupFilter({
  classNames,
  checkboxGroupProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "checkboxGroupProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const valueStr = getParam(paramKey);
  const value = valueStr ? valueStr.split(",").filter(Boolean) : [];

  return (
    <CheckboxGroup
      value={value}
      onValueChange={(values) =>
        setParams({
          params: {
            [paramKey]: values.length > 0 ? values.join(",") : undefined,
          },
        })
      }
      {...checkboxGroupProps}
      {...props}
      className={cn(
        filterClasses({ type: "checkboxGroup" }),
        classNames?.field,
      )}
    />
  );
}
