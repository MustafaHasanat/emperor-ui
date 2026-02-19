"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { cn } from "@/utils";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function AutocompleteFilter({
  classNames,
  autocompleteProps,
  autocompleteItemProps,
  paramKey,
  options,
}: Pick<
  FilterProps,
  | "classNames"
  | "autocompleteProps"
  | "autocompleteItemProps"
  | "paramKey"
  | "options"
>) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.autocomplete;
  const themeItem = config?.theme?.components?.autocompleteItem;

  const { getParam, setParams } = useSearchParamsHandler();
  const value = getParam(paramKey);

  if (!options?.length)
    throw new Error(
      "Filter with type 'autocomplete' must have 'options' property.",
    );

  return (
    <Autocomplete
      {...theme}
      {...autocompleteProps}
      selectedKey={value || null}
      onSelectionChange={(selectedKey) =>
        setParams({
          params: {
            [paramKey]: selectedKey ? String(selectedKey) : undefined,
          },
        })
      }
      className={cn(filterClasses({ type: "autocomplete" }), classNames?.field)}
      classNames={{
        base: "min-w-40",
        ...theme?.classNames,
        ...autocompleteProps?.classNames,
      }}
    >
      {(options || [])?.map((option) => (
        <AutocompleteItem
          key={option.key}
          {...themeItem}
          {...autocompleteItemProps}
        >
          {option.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
