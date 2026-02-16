"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Input } from "@heroui/input";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function NumericFilter({
  classNames,
  numericProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "numericProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();

  const value = getParam(paramKey);

  return (
    <Input
      type="number"
      labelPlacement="outside-top"
      variant="faded"
      radius="sm"
      value={value ?? ""}
      onValueChange={(v) =>
        setParams({
          params: { [paramKey]: v || undefined },
        })
      }
      {...numericProps}
      {...props}
      className={cn(filterClasses({ type: "numeric" }), classNames?.field)}
    />
  );
}
