"use client";

import { addToast } from "@heroui/react";
import {
  FileObject,
  FileType,
  UseUploadFileProps,
  UseUploadFileReturn,
} from "@types";
import { useState } from "react";
import { useEmperorUI } from "@hooks";
import { compressImage } from "@utils";
import {
  ALLOWED_IMAGES_TYPES,
  ALLOWED_PDF_TYPES,
  ALLOWED_DOC_TYPES,
  ONE_MEGABYTE,
} from "@constants";

export const useUploader = ({
  labelContent,
  labelId,
  fileTypes,
  isRequired = true,
  isDraggable = true,
  isMulti = false,
  preventDuplicates = true,
  maxCount = 5,
  maxFileSize = ONE_MEGABYTE * 10,
  compressFiles = false,
  onChange = () => {},
}: UseUploadFileProps): UseUploadFileReturn => {
  const { config } = useEmperorUI();
  const [files, setFiles] = useState<FileObject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const locales = config?.interLocalization?.locales;
  const lang = config?.interLocalization?.lang;

  const locale = locales?.[lang || "en"];

  // remove all uploaded files
  const handleClearFile = (fileName?: string) => {
    setFiles((prev) => prev?.filter((file) => file?.file?.name !== fileName));
  };

  // get the corresponding FileType giving the extension of the uploaded file
  const mapFileType = (fileType: string): FileType | null => {
    if (ALLOWED_IMAGES_TYPES.includes(fileType)) return "image";
    if (ALLOWED_PDF_TYPES.includes(fileType)) return "pdf";
    if (ALLOWED_DOC_TYPES.includes(fileType)) return "doc";

    return null;
  };

  // get the allowed file types according to the specified types from the 'fileTypes' array
  const getAllowedTypes = (): string[] => {
    const allowedTypes: string[] = [];

    fileTypes.forEach((fileType) => {
      if (fileType === "image") allowedTypes.push(...ALLOWED_IMAGES_TYPES);
      if (fileType === "doc") allowedTypes.push(...ALLOWED_DOC_TYPES);
      if (fileType === "pdf") allowedTypes.push(...ALLOWED_PDF_TYPES);
    });

    return allowedTypes;
  };

  // check if the file size exceeds the maxFileSize
  const isMaxFileSizeExceeded = (fileSize: number): boolean =>
    fileSize > maxFileSize * 1024;

  const isDuplicated = (name: string): boolean =>
    files?.filter(({ file }) => file?.name === name)?.length > 0;

  // handle the uploading process including the window upload and the drag-and-drop upload
  const onInputChange = async (
    event: React.ChangeEvent<HTMLInputElement> &
      React.DragEvent<HTMLLabelElement>,
  ): Promise<void> => {
    if (
      (!event.target.files || !event.target.files?.[0]) &&
      (!event?.dataTransfer?.files || !event?.dataTransfer?.files[0])
    ) {
      addToast({
        title: locale?.errorUploadingFile,
      });
      return;
    }

    // validate the file type according to the given allowed types
    const allowedTypes = getAllowedTypes();

    // verify if the files exist
    if (!event.target.files && !event.dataTransfer.files) return;

    // get the uploaded files
    const uploadedFiles = Array.from(
      event.target.files || event.dataTransfer.files,
    );

    // validate the files' length and prevent exceeded files only in the multiple-mode
    if (
      isMulti &&
      (uploadedFiles?.length > maxCount ||
        files?.length + uploadedFiles?.length > maxCount)
    ) {
      addToast({
        title: `${locale?.maxNumImages} ${maxCount}`,
      });
      return;
    }

    // validate the files' types according to the given allowed types
    if (
      !uploadedFiles
        ?.map((file) => file?.type)
        ?.every((type) => allowedTypes.includes(type))
    ) {
      addToast({
        title: `${locale?.errorUploadedTypes} ${allowedTypes.join(", ")}`,
      });
      return;
    }

    // validate the files' sizes if none of them exceeds the maximum allowed size
    // validate files' names to ensure there are no duplicates if specified
    let isInValid = false;

    const compressedFiles = await Promise.all(
      uploadedFiles?.map(async (file) => {
        if (isMaxFileSizeExceeded(file?.size)) {
          addToast({
            title: locale?.maxSizeExceededError
              .replace("MAX_FILE_SIZE", (maxFileSize / 1024 || 0)?.toString())
              .replace(
                "UPLOADED_FILE_SIZE",
                (file?.size / 1024 / 1024 || 0)?.toFixed(1)?.toString(),
              ),
          });

          if (compressFiles) {
            return (await compressImage({ file }))?.file;
          } else {
            isInValid = true;
            return file;
          }
        }

        if (preventDuplicates && isDuplicated(file?.name)) {
          addToast({
            title: locale?.duplicatesDenied,
          });
          isInValid = true;
        }

        return file;
      }),
    );

    if (isInValid) return;

    setIsLoading(true);

    await Promise.all(
      compressedFiles?.map((uploadedFile) => {
        if (uploadedFile) {
          // validate the file extension according to the allowed extensions
          const fileType = mapFileType(uploadedFile?.type);
          if (!fileType) {
            addToast({
              title: `${locale?.errorUploadedTypes} ${allowedTypes.join(", ")}`,
            });
            return;
          }

          // set the file to be utilized, and the image to be viewed
          const reader = new FileReader();
          reader.onload = () => {
            setFiles((prevFiles) => [
              ...(isMulti ? prevFiles : []),
              {
                file: uploadedFile,
                view: reader.result as string,
                type: fileType,
                url: URL.createObjectURL(uploadedFile),
              },
            ]);
          };
          reader.readAsDataURL(uploadedFile);
        }
      }),
    ).finally(() => {
      setIsLoading(false);
    });

    setTimeout(() => {
      onChange();
    }, 200);
  };

  return {
    files,
    fileTypes,
    labelId,
    isRequired,
    labelContent,
    isDraggable,
    isMulti,
    handleClearFile,
    onInputChange,
    setFiles,
    isLoading,
  };
};
