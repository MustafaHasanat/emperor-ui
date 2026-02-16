"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Switch } from "@heroui/switch";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function SwitchFilter({
  classNames,
  switchProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "switchProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();

  const value = getParam(paramKey);
  const isSelected = value === "true" || value === "1" || value === "yes";

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={(selected) =>
        setParams({
          params: { [paramKey]: selected ? "true" : undefined },
        })
      }
      {...switchProps}
      {...props}
      className={cn(filterClasses({ type: "switch" }), classNames?.field)}
    />
  );
}
