"use client";

import { Button, cn } from "@heroui/react";
import { useUploaderContext } from "@/hooks";
import { Eye, Trash2 } from "lucide-react";

export function UploadFileListing() {
  const { files, setSelectedFile, handleClearFile, classNames, modal } =
    useUploaderContext();

  return files?.map((file) => {
    const isFileViewable =
      modal?.onOpen && file?.view && file?.file?.name && file?.type === "image";

    if (file)
      return (
        <div
          key={file?.file?.name}
          className={cn(
            "flex justify-between items-center p-2 gap-2 w-full border border-black/30 rounded-lg",
            classNames?.listing,
          )}
        >
          <p className="w-full line-clamp-1 text-xs max-w-60">
            {file?.file?.name}
          </p>

          <Button
            isIconOnly
            variant="flat"
            className="size-8 min-w-8 rounded-full"
            color="danger"
            onPress={() => handleClearFile(file?.file?.name)}
            startContent={<Trash2 className="rounded-lg size-4" />}
          />

          {isFileViewable && (
            <Button
              isIconOnly
              variant="flat"
              className="size-8 min-w-8 rounded-full"
              color="primary"
              onPress={() => {
                setSelectedFile?.(file);
                modal?.onOpen?.();
              }}
              startContent={<Eye className="rounded-lg size-4" />}
            />
          )}
        </div>
      );

    return null;
  });
}
