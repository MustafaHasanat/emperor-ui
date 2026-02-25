"use client";

import { addToast } from "@heroui/toast";
import { FileObject, UseUploadFileProps, UseUploadFileReturn } from "@/types";
import { useState } from "react";
import { useEmperorUI } from "@/hooks";
import {
  validateUploadedFiles,
  getAllowedTypes,
  refineUploadedFiles,
  mergeUploaderLocale,
} from "@/utils";
import { ONE_MEGABYTE } from "@/constants";
import { Locale, getLocales } from "@/i18n";

export const useUploader = ({
  labelContent,
  labelId,
  fileTypes,
  isRequired = false,
  isDraggable = true,
  isMulti = false,
  preventDuplicates = true,
  maxCount = 10,
  maxFileSize = ONE_MEGABYTE * 10,
  compressFiles = false,
  onChange = () => {},
  locales,
}: UseUploadFileProps): UseUploadFileReturn => {
  const { config } = useEmperorUI();
  const [files, setFiles] = useState<FileObject[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const configLocales = config?.interLocalization?.locales;
  const lang =
    config?.interLocalization?.lang ||
    config?.interLocalization?.defaultLanguage ||
    "en";

  const defaultLocale = getLocales(lang);
  const uploaderLocale = mergeUploaderLocale({
    defaultUploaderLocale: defaultLocale.atoms.uploader,
    configUploaderLocale: (configLocales?.[lang] as Locale | undefined)?.atoms
      ?.uploader,
    contextUploaderLocale: locales,
  });

  // remove a specific uploaded file
  const handleClearFile = (fileName?: string) => {
    setFiles((prev) => prev?.filter((file) => file?.file?.name !== fileName));

    // Reset the input value to allow re-uploading the same file
    if (labelId) {
      const input = document.getElementById(labelId) as HTMLInputElement;
      if (input) {
        input.value = "";
      }
    }
  };

  // handle the uploading process including the window upload and the drag-and-drop upload
  const onInputChange = async (
    event: React.ChangeEvent<HTMLInputElement> &
      React.DragEvent<HTMLLabelElement>,
  ): Promise<void | string | null> => {
    console.log("files: ", event.target.files);

    if (
      (!event.target.files || !event.target.files?.[0]) &&
      (!event?.dataTransfer?.files || !event?.dataTransfer?.files[0])
    ) {
      return addToast({
        title: uploaderLocale.errorUploadingFile,
      });
    }

    // validate the file type according to the given allowed types
    const allowedTypes = getAllowedTypes(fileTypes);

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
        title: `${uploaderLocale.maxNumImages} ${maxCount}`,
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
        title: uploaderLocale.errorUploadedTypes,
      });
      return;
    }

    // validate the files' sizes if none of them exceeds the maximum allowed size
    // validate files' names to ensure there are no duplicates if specified
    const { compressedFiles, isInValid } = await validateUploadedFiles({
      uploadedFiles,
      maxFileSize,
      compressFiles,
      preventDuplicates,
      files,
      uploaderLocale,
    });

    if (isInValid) return;

    setIsLoading(true);

    await Promise.all(
      await refineUploadedFiles({
        uploadedFiles: compressedFiles,
        uploaderLocale,
        allowedTypes,
        isMulti,
        setFiles,
      }),
    ).finally(() => {
      setIsLoading(false);
    });

    setTimeout(() => {
      onChange();
    }, 200);

    // Reset the input value to allow re-uploading the same file
    // Only reset for input change events, not drag events
    if (event.target && "value" in event.target && event.target.files) {
      (event.target as HTMLInputElement).value = "";
    }
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
    locales,
  };
};
