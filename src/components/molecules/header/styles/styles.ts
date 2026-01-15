import { CSSProperties } from "react";
import { HeaderGlassEffect, HeaderStylesProps } from "@types";

export const getGlassEffectStyles = ({
  glassEffect,
}: {
  glassEffect: HeaderGlassEffect;
}): CSSProperties => ({
  backgroundColor: glassEffect?.backgroundColor
    ? `${glassEffect?.backgroundColor}${glassEffect?.opacity ?? 30}`
    : "transparent",
  backdropFilter: `blur(${glassEffect?.blur ?? 0}px)`,
  color: glassEffect?.foregroundColor,
});

export const headerStyles = ({
  primaryColor,
  foregroundColor,
  variant,
  glassEffect,
}: HeaderStylesProps): CSSProperties => {
  if (glassEffect?.enabled && variant !== "segmented-floating") {
    return getGlassEffectStyles({
      glassEffect: {
        ...glassEffect,
        foregroundColor: glassEffect?.foregroundColor ?? foregroundColor,
      },
    });
  }

  if (["default", "floating"].includes(variant ?? "")) {
    return {
      backgroundColor: primaryColor,
      color: foregroundColor,
    };
  }

  return {};
};
