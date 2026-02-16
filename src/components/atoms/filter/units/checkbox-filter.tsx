"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Checkbox } from "@heroui/checkbox";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function CheckboxFilter({
  classNames,
  checkboxProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "checkboxProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const value = getParam(paramKey);
  const isSelected = value === "true" || value === "1" || value === "yes";

  return (
    <Checkbox
      isSelected={isSelected}
      onValueChange={(selected) =>
        setParams({
          params: { [paramKey]: selected ? "true" : undefined },
        })
      }
      {...checkboxProps}
      {...props}
      className={cn(filterClasses({ type: "checkbox" }), classNames?.field)}
    />
  );
}
