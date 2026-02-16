import type {
  UploaderProviderProps,
  UploaderContextState,
  FileObject,
} from "@/types";
import { useMemo, useState } from "react";
import { UploaderContext } from "@/context";
import { useDisclosure } from "@heroui/modal";

export function UploaderProvider({
  children,
  ...props
}: UploaderProviderProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedFile, setSelectedFile] = useState<FileObject | null>(null);

  const isFileViewable = useMemo(
    () =>
      !!selectedFile?.view &&
      !!selectedFile?.file?.name &&
      selectedFile?.type === "image",
    [selectedFile],
  );

  const uploaderProviderValue: UploaderContextState = useMemo(() => {
    return {
      isOpen,
      onOpen,
      onOpenChange,
      selectedFile,
      setSelectedFile,
      isFileViewable,
      ...props,
    };
  }, [
    isOpen,
    isFileViewable,
    selectedFile,
    onOpen,
    onOpenChange,
    setSelectedFile,
    props,
  ]);

  return (
    <UploaderContext.Provider
      value={uploaderProviderValue}
      data-slot="emperor-uploader-provider"
    >
      {children}
    </UploaderContext.Provider>
  );
}
