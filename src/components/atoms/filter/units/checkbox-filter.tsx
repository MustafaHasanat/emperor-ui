"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Checkbox } from "@heroui/checkbox";
import { cn } from "@/utils";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";
import { useMemo } from "react";

export function CheckboxFilter({
  classNames,
  checkboxProps,
  paramKey,
}: Pick<FilterProps, "classNames" | "checkboxProps" | "paramKey">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.checkbox;

  const { getParam, setParams } = useSearchParamsHandler();

  const { isSelected } = useMemo(() => {
    const value = getParam(paramKey);
    const isSelected = value === "true" || value === "1" || value === "yes";

    return { value, isSelected };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramKey]);

  return (
    <Checkbox
      {...theme}
      {...checkboxProps}
      isSelected={isSelected}
      onValueChange={(selected) =>
        setParams({
          params: { [paramKey]: selected ? "true" : undefined },
        })
      }
      className={cn(filterClasses({ type: "checkbox" }), classNames?.field)}
    />
  );
}
