"use client";

import { Image } from "@heroui/image";
import { Modal, ModalBody, ModalContent } from "@heroui/modal";
import { useEmperorUI, useUploaderContext } from "@/hooks";

export function ViewImageModal() {
  const { config } = useEmperorUI();
  const { modal, selectedFile } = useUploaderContext();

  const lang = config?.interLocalization?.lang || "en";

  const src = selectedFile?.view;
  const alt = selectedFile?.file?.name;

  if (!src || !alt) return null;

  return (
    <Modal
      placement="center"
      isOpen={modal?.isOpen}
      dir={lang === "ar" ? "rtl" : "ltr"}
      onClose={modal?.onClose}
      onOpenChange={modal?.onOpenChange}
      size="xl"
      {...modal}
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
