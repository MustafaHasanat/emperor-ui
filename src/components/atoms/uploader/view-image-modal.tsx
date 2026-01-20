"use client";

import { Image, Modal, ModalBody, ModalContent } from "@heroui/react";
import { useEmperorUI, useUploaderContext } from "@hooks";

export function ViewImageModal() {
  const { config } = useEmperorUI();
  const { isOpen, onClose, onOpenChange, selectedFile } = useUploaderContext();

  const lang = config?.interLocalization?.lang || "en";

  const src = selectedFile?.view;
  const alt = selectedFile?.file?.name;

  if (!src || !alt) return null;

  return (
    <Modal
      placement="center"
      isOpen={isOpen}
      dir={lang === "ar" ? "rtl" : "ltr"}
      onClose={onClose}
      onOpenChange={onOpenChange}
      size="xl"
    >
      <ModalContent className="px-5">
        <ModalBody className="h-[60vh]">
          <Image
            className="size-full rounded-md object-cover"
            src={src}
            alt={alt}
            width={500}
            height={500}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
