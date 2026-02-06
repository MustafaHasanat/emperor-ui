/* eslint-disable no-empty-pattern */
import { ItemCardHoverEffect } from "@/types";
import { MotionProps } from "framer-motion";

export const getCardMotion = ({}: {
  hoverEffect: ItemCardHoverEffect;
}): MotionProps => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" as const },
  whileHover: {
    y: -4,
  },
});
