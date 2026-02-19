"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { DatePicker } from "@heroui/date-picker";
import { cn } from "@/utils";
import { parseDate } from "@internationalized/date";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function DateFilter({
  classNames,
  dateProps,
  paramKey,
}: Pick<FilterProps, "classNames" | "dateProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.datePicker;

  const valueStr = getParam(paramKey);
  const value =
    valueStr && /^\d{4}-\d{2}-\d{2}$/.test(valueStr)
      ? parseDate(valueStr)
      : null;

  return (
    <DatePicker
      {...theme}
      {...dateProps}
      value={value}
      onChange={(date) =>
        setParams({
          params: {
            [paramKey]: date ? String(date) : undefined,
          },
        })
      }
      className={cn(filterClasses({ type: "date" }), classNames?.field)}
      classNames={{
        label: "font-semibold",
        ...theme?.classNames,
        ...dateProps?.classNames,
      }}
    />
  );
}
