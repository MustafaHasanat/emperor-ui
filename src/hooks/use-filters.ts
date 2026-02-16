"use client";

import { useMemo } from "react";
import { useSearchParamsHandler } from "@/hooks";

export function useFilters<
  FiltersType extends Record<string, string | number | boolean>,
>() {
  const { allParams } = useSearchParamsHandler();

  const filters = useMemo(() => {
    if (!Object.keys(allParams).length) {
      return null;
    }

    return allParams as unknown as FiltersType;
  }, [allParams]);

  return { filters };
}
