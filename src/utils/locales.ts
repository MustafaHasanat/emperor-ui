import { Locale } from "@/i18n";

/**
 * Checks if a value is a plain object (not array, null, or other object types).
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/**
 * Deep-merges config locales into default locales. Default values are used as base,
 * and config values override only the keys they provide. Nested objects are merged
 * recursively so unrelated keys at any level remain unchanged.
 */
export const mergeLocales = ({
  defaultLocales,
  configLocales,
}: {
  defaultLocales: Locale;
  configLocales?: Partial<Locale>;
}): Locale => {
  const deepMerge = <T extends Record<string, unknown>>(
    defaultObj: T,
    configObj: Partial<T> | undefined,
  ): T => {
    if (configObj == null || Object.keys(configObj).length === 0) {
      return defaultObj;
    }

    const result = { ...defaultObj } as T;

    for (const key of Object.keys(configObj) as (keyof T)[]) {
      const configVal = configObj[key];
      const defaultVal = defaultObj[key];

      if (configVal === undefined) continue;

      if (isPlainObject(configVal) && isPlainObject(defaultVal as unknown)) {
        (result as Record<string, unknown>)[key as string] = deepMerge(
          defaultVal as Record<string, unknown>,
          configVal,
        );
      } else {
        (result as Record<string, unknown>)[key as string] = configVal;
      }
    }

    return result;
  };

  return deepMerge(
    defaultLocales as unknown as Record<string, unknown>,
    configLocales as Partial<Record<string, unknown>>,
  ) as Locale;
};
