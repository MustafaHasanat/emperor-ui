import { Variants } from "framer-motion";

/**
 * ? In order to work, the parent container must have the blinkContainer variants
 * ? and each of the children must have the blinkItem variants
 */

export const blinkContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const blinkItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
