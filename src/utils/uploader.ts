import {
  ALLOWED_DOC_TYPES,
  ALLOWED_IMAGES_TYPES,
  ALLOWED_PDF_TYPES,
  ONE_MEGABYTE,
} from "@/constants";
import { FileObject, FileType } from "@/types";
import { addToast } from "@heroui/react";
import { compressImage } from "@/utils";
import { Dispatch, SetStateAction } from "react";

// get the corresponding FileType giving the extension of the uploaded file
export const mapFileType = (fileType: string): FileType | null => {
  if (ALLOWED_IMAGES_TYPES.includes(fileType)) return "image";
  if (ALLOWED_PDF_TYPES.includes(fileType)) return "pdf";
  if (ALLOWED_DOC_TYPES.includes(fileType)) return "doc";

  return null;
};

// get the allowed file types according to the specified types from the 'fileTypes' array
export const getAllowedTypes = (fileTypes: FileType[]): string[] => {
  const allowedTypes: string[] = [];

  fileTypes.forEach((fileType) => {
    if (fileType === "image") allowedTypes.push(...ALLOWED_IMAGES_TYPES);
    if (fileType === "doc") allowedTypes.push(...ALLOWED_DOC_TYPES);
    if (fileType === "pdf") allowedTypes.push(...ALLOWED_PDF_TYPES);
  });

  return allowedTypes;
};

export const isFileDuplicated = ({
  files,
  fileName,
}: {
  files: FileObject[];
  fileName: string;
}): boolean => files?.filter(({ file }) => file?.name === fileName)?.length > 0;

// check if the file size exceeds the maxFileSize
export const isMaxFileSizeExceeded = ({
  fileSize,
  maxFileSize,
}: {
  fileSize: number;
  maxFileSize: number;
}): boolean => fileSize > maxFileSize * 1024;

export async function validateUploadedFiles({
  uploadedFiles,
  maxFileSize = ONE_MEGABYTE * 10,
  compressFiles,
  locale,
  preventDuplicates,
  files,
}: {
  uploadedFiles: File[];
  maxFileSize?: number;
  compressFiles?: boolean;
  locale?: Record<string, string> | undefined;
  preventDuplicates?: boolean;
  files: FileObject[];
}) {
  let isInValid = false;

  const compressedFiles = await Promise.all(
    uploadedFiles?.map(async (file) => {
      if (isMaxFileSizeExceeded({ fileSize: file?.size, maxFileSize })) {
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

      if (
        preventDuplicates &&
        isFileDuplicated({ fileName: file?.name, files })
      ) {
        addToast({
          title: locale?.duplicatesDenied,
        });
        isInValid = true;
      }

      return file;
    }),
  );

  return {
    compressedFiles,
    isInValid,
  };
}

export async function refineUploadedFiles({
  uploadedFiles,
  locale,
  allowedTypes,
  isMulti,
  setFiles,
}: {
  uploadedFiles: (File | undefined)[];
  locale?: Record<string, string> | undefined;
  allowedTypes: string[];
  isMulti: boolean;
  setFiles: Dispatch<SetStateAction<FileObject[]>>;
}) {
  return uploadedFiles?.map((uploadedFile) => {
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
  });
}
