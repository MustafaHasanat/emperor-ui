"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Slider } from "@heroui/slider";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function RangeFilter({
  classNames,
  rangeProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "rangeProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();

  const valueStr = getParam(paramKey);
  const value = valueStr != null ? Number(valueStr) : undefined;
  const numValue = value != null && !Number.isNaN(value) ? value : undefined;

  return (
    <Slider
      value={numValue}
      onChange={(v) =>
        setParams({
          params: {
            [paramKey]: v != null ? String(v) : undefined,
          },
        })
      }
      {...rangeProps}
      {...props}
      className={cn(filterClasses({ type: "range" }), classNames?.field)}
    />
  );
}
