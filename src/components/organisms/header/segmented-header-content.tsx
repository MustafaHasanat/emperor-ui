import { SegmentedHeaderContentProps } from "@/types";
import { Children } from "react";
import { Row } from "@/components";
import { getGlassEffectStyles } from "./styles/styles";

export const SegmentedHeaderContent = ({
  children,
  glassEffect,
}: SegmentedHeaderContentProps) => {
  return (
    <Row className="w-full min-h-12 justify-between">
      {Children.toArray(children).map((child, index) => (
        <Row
          className="rounded-full min-h-12 px-5"
          key={index}
          style={{
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
