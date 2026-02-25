"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Trash2 } from "lucide-react";
import { Locale } from "@/i18n";
import { useEmperorUI } from "@/hooks";
import { cn } from "@/utils";
import type { DeletionConfirmorProps } from "@/types";
import {
  deletionConfirmorBodyClasses,
  deletionConfirmorContentClasses,
  deletionConfirmorFooterClasses,
  deletionConfirmorHeaderClasses,
} from "./styles";

export function DeletionConfirmor({
  isOpen,
  onClose,
  title,
  description,
  className,
  classNames,
  confirmProps,
  declineProps,
}: DeletionConfirmorProps) {
  const { config } = useEmperorUI();

  const lang = config?.interLocalization?.lang ?? "en";
  const locale = config?.interLocalization?.locales?.[lang] as
    | Locale
    | undefined;
  const deletionConfirmorLocale = locale?.organisms?.deletionConfirmor;

  const handleDecline = (e?: unknown) => {
    if (typeof declineProps?.onPress === "function") {
      (declineProps.onPress as (e?: unknown) => void)(e);
    }
    onClose();
  };

  return (
    <Modal
      placement="center"
      isOpen={isOpen}
      onClose={onClose}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      dir={lang === "ar" ? "rtl" : "ltr"}
      classNames={
        className || classNames?.base
          ? { base: cn(className, classNames?.base) }
          : undefined
      }
    >
      <ModalContent
        className={cn(deletionConfirmorContentClasses(), classNames?.content)}
      >
        <ModalHeader
          className={cn(deletionConfirmorHeaderClasses(), classNames?.header)}
        >
          {title}
        </ModalHeader>

        <ModalBody
          className={cn(deletionConfirmorBodyClasses(), classNames?.body)}
        >
          {description}
        </ModalBody>

        <ModalFooter
          className={cn(deletionConfirmorFooterClasses(), classNames?.footer)}
        >
          <Button
            variant="flat"
            size="sm"
            {...declineProps}
            onPress={handleDecline}
            className={cn(declineProps?.className, classNames?.declineButton)}
          >
            {declineProps?.children ??
              deletionConfirmorLocale?.decline ??
              "Decline"}
          </Button>

          <Button
            color="danger"
            size="sm"
            {...confirmProps}
            className={cn(confirmProps?.className, classNames?.confirmButton)}
            startContent={
              confirmProps?.isLoading
                ? undefined
                : (confirmProps?.startContent ?? (
                    <Trash2 className="size-4" aria-hidden />
                  ))
            }
          >
            {confirmProps?.children ??
              deletionConfirmorLocale?.confirm ??
              "Confirm"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
