"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Input } from "@heroui/input";
import { cn } from "@/utils";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function NumericFilter({
  classNames,
  numericProps,
  paramKey,
}: Pick<FilterProps, "classNames" | "numericProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.input;

  const value = getParam(paramKey);

  return (
    <Input
      {...theme}
      {...numericProps}
      type="number"
      value={value ?? ""}
      onValueChange={(v) =>
        setParams({
          params: { [paramKey]: v || undefined },
        })
      }
      className={cn(filterClasses({ type: "numeric" }), classNames?.field)}
      classNames={{
        input: "min-w-40",
        label: "font-semibold",
        ...theme?.classNames,
        ...numericProps?.classNames,
      }}
    />
  );
}
