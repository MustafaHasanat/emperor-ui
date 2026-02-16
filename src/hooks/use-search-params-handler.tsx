"use client";

import { useCallback, useEffect, useState } from "react";

const URL_SEARCH_PARAMS_CHANGE_EVENT = "URLSearchParamsChange";

export function useSearchParamsHandler() {
  const getAllParams = useCallback((): Record<string, string> => {
    if (typeof window === "undefined") {
      return {};
    }

    const currentSearchParams = new URLSearchParams(window.location.search);

    return Array.from(currentSearchParams.entries()).reduce<
      Record<string, string>
    >((paramsRecord, [key, value]) => {
      paramsRecord[key] = value;
      return paramsRecord;
    }, {});
  }, []);

  const [allParams, setAllParams] = useState<Record<string, string>>(() =>
    getAllParams(),
  );

  const updateUrlSearchParams = useCallback(
    ({ searchParams }: { searchParams: URLSearchParams }) => {
      if (typeof window === "undefined") return;

      const searchParamsString = searchParams.toString();
      const searchPath = searchParamsString ? `?${searchParamsString}` : "";
      const newPath = `${window.location.pathname}${searchPath}${window.location.hash}`;
      const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;

      if (newPath === currentPath) return;

      window.history.replaceState(window.history.state, "", newPath);
      window.dispatchEvent(new Event(URL_SEARCH_PARAMS_CHANGE_EVENT));
    },
    [],
  );

  const setParams = useCallback(
    ({
      params,
      options = { replace: true },
    }: {
      params: Record<string, string | number | boolean | undefined | null>;
      options?: { replace?: boolean };
    }) => {
      if (typeof window === "undefined") return;

      const nextSearchParams = new URLSearchParams(window.location.search);
      let hasChanges = false;

      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") {
          const hasKey = nextSearchParams.has(key);
          nextSearchParams.delete(key);
          if (hasKey) {
            hasChanges = true;
          }
          return;
        }

        const serializedValue = String(value);

        if (options.replace) {
          const existingValues = nextSearchParams.getAll(key);
          const isAlreadyReplaced =
            existingValues.length === 1 &&
            existingValues[0] === serializedValue;

          if (isAlreadyReplaced) {
            return;
          }

          nextSearchParams.delete(key);
          nextSearchParams.append(key, serializedValue);
          hasChanges = true;
          return;
        }

        const existingValues = nextSearchParams.getAll(key);
        const hasMatchingValue = existingValues.some(
          (existingValue) => existingValue === serializedValue,
        );

        if (!hasMatchingValue) {
          nextSearchParams.append(key, serializedValue);
          hasChanges = true;
        }
      });

      if (!hasChanges) return;

      updateUrlSearchParams({ searchParams: nextSearchParams });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const deleteParam = useCallback(
    ({ key }: { key: string }) => {
      if (typeof window === "undefined") {
        return;
      }

      const nextSearchParams = new URLSearchParams(window.location.search);
      nextSearchParams.delete(key);
      updateUrlSearchParams({ searchParams: nextSearchParams });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const deleteParams = useCallback(
    ({ keys }: { keys: string[] }) => {
      if (typeof window === "undefined") return;

      const nextSearchParams = new URLSearchParams(window.location.search);
      let hasChanges = false;
      keys.forEach((key) => {
        const hasKey = nextSearchParams.has(key);
        nextSearchParams.delete(key);
        if (hasKey) {
          hasChanges = true;
        }
      });

      if (!hasChanges) {
        return;
      }

      updateUrlSearchParams({ searchParams: nextSearchParams });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const clearParams = useCallback(() => {
    if (typeof window === "undefined") return;

    if (!window.location.search) {
      return;
    }

    updateUrlSearchParams({ searchParams: new URLSearchParams() });
  }, [updateUrlSearchParams]);

  const getParam = useCallback((name: string) => {
    if (typeof window === "undefined") return null;

    const currentSearchParams = new URLSearchParams(window.location.search);
    return currentSearchParams.get(name);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncAllParams = () => {
      setAllParams(getAllParams());
    };

    syncAllParams();
    window.addEventListener("popstate", syncAllParams);
    window.addEventListener(URL_SEARCH_PARAMS_CHANGE_EVENT, syncAllParams);

    return () => {
      window.removeEventListener("popstate", syncAllParams);
      window.removeEventListener(URL_SEARCH_PARAMS_CHANGE_EVENT, syncAllParams);
    };
  }, [getAllParams]);

  return {
    getParam,
    allParams,
    setParams,
    deleteParam,
    deleteParams,
    clearParams,
  };
}
