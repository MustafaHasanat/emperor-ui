"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Slider } from "@heroui/slider";
import { cn } from "@/utils";
import { useMemo } from "react";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function RangeFilter({
  classNames,
  rangeProps,
  paramKey,
}: Pick<FilterProps, "classNames" | "rangeProps" | "paramKey">) {
  const { getParam, setParams, allParams } = useSearchParamsHandler();
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.slider;

  const minVal = rangeProps?.minValue ?? 0;
  const maxVal = rangeProps?.maxValue ?? 100;

  const value = useMemo(() => {
    const valueStr = getParam(paramKey);
    const defaultRange: [number, number] = [minVal, maxVal];

    if (valueStr == null) return defaultRange;

    const [a, b] = valueStr.split(",").map(Number);
    if (!Number.isNaN(a) && !Number.isNaN(b) && a <= b) {
      return [a, b];
    }
    return defaultRange;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramKey, minVal, maxVal, allParams]);

  return (
    <Slider
      {...theme}
      {...rangeProps}
      value={value}
      onChange={(value) => {
        const range = Array.isArray(value) ? value : [value];
        const isFullRange =
          range.length === 2 && range[0] === minVal && range[1] === maxVal;

        setParams({
          params: {
            [paramKey]:
              range.length === 2 && !isFullRange
                ? `${range[0]},${range[1]}`
                : undefined,
          },
        });
      }}
      classNames={{
        base: "min-w-40",
        label: "font-semibold",
        ...theme?.classNames,
        ...rangeProps?.classNames,
      }}
      className={cn(filterClasses({ type: "range" }), classNames?.field)}
    />
  );
}
