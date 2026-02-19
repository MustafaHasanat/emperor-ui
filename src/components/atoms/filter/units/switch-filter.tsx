"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Switch } from "@heroui/switch";
import { cn } from "@/utils";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function SwitchFilter({
  classNames,
  switchProps,
  paramKey,
}: Pick<FilterProps, "classNames" | "switchProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.switch;

  const value = getParam(paramKey);
  const isSelected = value === "true" || value === "1" || value === "yes";

  return (
    <Switch
      {...theme}
      {...switchProps}
      isSelected={isSelected}
      onValueChange={(selected) =>
        setParams({
          params: { [paramKey]: selected ? "true" : undefined },
        })
      }
      className={cn(filterClasses({ type: "switch" }), classNames?.field)}
    />
  );
}
