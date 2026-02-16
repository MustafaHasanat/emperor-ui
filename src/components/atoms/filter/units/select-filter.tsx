"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Select, SelectItem } from "@heroui/select";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function SelectFilter({
  classNames,
  selectProps,
  paramKey,
  options,
  ...props
}: Pick<FilterProps, "classNames" | "selectProps" | "paramKey" | "options">) {
  const { getParam, setParams } = useSearchParamsHandler();
  const key = paramKey ?? "select";
  const value = getParam(key);

  if (!options?.length)
    throw new Error("Filter with type 'select' must have 'options' property.");

  return (
    <Select
      labelPlacement="outside-top"
      variant="faded"
      radius="sm"
      selectedKeys={value ? [value] : []}
      onSelectionChange={(keys) => {
        const selectedKey = Array.from(keys)[0];
        setParams({
          params: { [key]: selectedKey ? String(selectedKey) : undefined },
        });
      }}
      {...selectProps}
      {...props}
      className={cn(filterClasses({ type: "select" }), classNames?.field)}
      classNames={{
        trigger: "min-w-40",
        label: "font-semibold",
        ...selectProps?.classNames,
      }}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
