"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CopyState = "copy" | "loading" | "success";

export function CopyButton({ value }: { value: string }) {
  const [state, setState] = useState<CopyState>("copy");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = () => {
    if (state !== "copy") return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    navigator.clipboard.writeText(value);
    setState("loading");

    timeoutRef.current = setTimeout(() => {
      setState("success");
      timeoutRef.current = setTimeout(() => setState("copy"), 2000);
    }, 500);
  };

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  return (
    <Button
      variant="light"
      size="sm"
      isIconOnly
      onPress={handleCopy}
      disabled={state !== "copy"}
      startContent={
        <span className="relative size-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={state}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {state === "copy" && <Copy className="size-4" />}

              {state === "loading" && (
                <Spinner
                  size="sm"
                  classNames={{
                    circle1: "border-b-current",
                    circle2: "border-current",
                  }}
                />
              )}

              {state === "success" && <Check className="size-4 text-success" />}
            </motion.span>
          </AnimatePresence>
        </span>
      }
    />
  );
}
