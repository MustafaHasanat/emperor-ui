import { cn } from "@/utils";
import { FilterProps, FilterType } from "@/types";
import { filterClasses } from "./styles";
import { ReactNode } from "react";
import {
  SearchFilter,
  SelectFilter,
  AutocompleteFilter,
  DateFilter,
  NumericFilter,
  CheckboxFilter,
  CheckboxGroupFilter,
  SwitchFilter,
  RangeFilter,
} from "@/components";

export function Filter({
  className,
  type,
  searchProps,
  selectProps,
  autocompleteProps,
  dateProps,
  numericProps,
  checkboxProps,
  checkboxGroupProps,
  radioProps,
  switchProps,
  rangeProps,
  paramKey,
  options,
  ...props
}: FilterProps) {
  const sharedProps = { paramKey };

  const components: Record<FilterType, ReactNode> = {
    search: (
      <SearchFilter searchProps={searchProps} {...sharedProps} {...props} />
    ),
    select: (
      <SelectFilter
        selectProps={selectProps}
        options={options}
        {...sharedProps}
        {...props}
      />
    ),
    autocomplete: (
      <AutocompleteFilter
        autocompleteProps={autocompleteProps}
        options={options}
        {...sharedProps}
        {...props}
      />
    ),
    date: <DateFilter dateProps={dateProps} {...sharedProps} {...props} />,
    numeric: (
      <NumericFilter numericProps={numericProps} {...sharedProps} {...props} />
    ),
    checkbox: (
      <CheckboxFilter
        checkboxProps={checkboxProps}
        {...sharedProps}
        {...props}
      />
    ),
    checkboxGroup: (
      <CheckboxGroupFilter
        checkboxGroupProps={checkboxGroupProps}
        options={options}
        {...sharedProps}
        {...props}
      />
    ),
    switch: (
      <SwitchFilter switchProps={switchProps} {...sharedProps} {...props} />
    ),
    range: <RangeFilter rangeProps={rangeProps} {...sharedProps} {...props} />,
  };

  return (
    <div
      data-slot="emperor-ui-filter"
      className={cn(
        filterClasses({ type }),
        className,
        props?.classNames?.base,
      )}
    >
      {components[type]}
    </div>
  );
}
