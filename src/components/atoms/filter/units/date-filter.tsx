"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { DatePicker } from "@heroui/date-picker";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";
import { parseDate, type DateValue } from "@internationalized/date";
import { useMemo } from "react";

export function DateFilter({
  classNames,
  dateProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "dateProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const valueStr = getParam(paramKey);

  const value = useMemo(() => {
    if (!valueStr) return null;

    try {
      return parseDate(valueStr);
    } catch {
      return null;
    }
  }, [valueStr]);

  return (
    <DatePicker
      labelPlacement="outside-top"
      variant="faded"
      radius="sm"
      value={value}
      onChange={(date: DateValue | null) =>
        setParams({
          params: {
            [paramKey]: date
              ? `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`
              : undefined,
          },
        })
      }
      {...dateProps}
      {...props}
      className={cn(filterClasses({ type: "date" }), classNames?.field)}
    />
  );
}
