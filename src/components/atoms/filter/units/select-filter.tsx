"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Select, SelectItem } from "@heroui/select";
import { cn } from "@/utils";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function SelectFilter({
  classNames,
  selectProps,
  selectItemProps,
  paramKey,
  options,
}: Pick<
  FilterProps,
  "classNames" | "selectProps" | "selectItemProps" | "paramKey" | "options"
>) {
  const { getParam, setParams } = useSearchParamsHandler();
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.select;
  const themeItem = config?.theme?.components?.selectItem;

  const key = paramKey ?? "select";
  const value = getParam(key);

  if (!options?.length)
    throw new Error("Filter with type 'select' must have 'options' property.");

  return (
    <Select
      {...theme}
      {...selectProps}
      selectedKeys={value ? [value] : []}
      onSelectionChange={(keys) => {
        const selectedKey = Array.from(keys)[0];
        setParams({
          params: { [key]: selectedKey ? String(selectedKey) : undefined },
        });
      }}
      className={cn(filterClasses({ type: "select" }), classNames?.field)}
      classNames={{
        trigger: "min-w-40",
        label: "font-semibold",
        ...theme?.classNames,
        ...selectProps?.classNames,
      }}
    >
      {options.map((option) => (
        <SelectItem key={option.key} {...themeItem} {...selectItemProps}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
