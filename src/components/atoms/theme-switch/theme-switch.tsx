import { cn } from "@/utils";
import { themeSwitcherClasses } from "./styles";
import { ThemeSwitchProps } from "@/types";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeSwitch({
  className,
  classNames,
  ...props
}: ThemeSwitchProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      data-slot="emperor-ui-theme-knob"
      className={cn(themeSwitcherClasses(), className, classNames?.base)}
      onClick={handleThemeToggle}
      initial={false}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{
        type: "spring" as const,
        stiffness: 500,
        damping: 28,
      }}
      {...props}
    >
      <span className="relative flex size-5 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={resolvedTheme ?? "loading"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {resolvedTheme === "dark" ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.button>
  );
}
