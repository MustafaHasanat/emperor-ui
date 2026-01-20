import { SegmentedHeaderContentProps } from "@types";
import { Children } from "react";
import { Row } from "@components";
import { useEmperorUI } from "@hooks";
import { getGlassEffectStyles } from "./styles/styles";

export const SegmentedHeaderContent = ({
  children,
  glassEffect,
}: SegmentedHeaderContentProps) => {
  const { config } = useEmperorUI();

  const primaryColor = config?.theme?.colors?.primary;
  const foregroundColor = config?.theme?.colors?.foreground;

  return (
    <Row className="w-full min-h-12 justify-between">
      {Children.toArray(children).map((child, index) => (
        <Row
          className="rounded-full min-h-12 px-5"
          key={index}
          style={{
            backgroundColor: primaryColor,
            color: foregroundColor,
            ...(glassEffect
              ? getGlassEffectStyles({
                  glassEffect,
                })
              : {}),
          }}
        >
          {child}
        </Row>
      ))}
    </Row>
  );
};
