import type { SharedComponentProps } from "@/types";
import { ModalProps } from "@heroui/modal";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type UploaderProps = SharedComponentProps &
  UploaderContextState & {
    className?: string;
    hideListing?: boolean;
    isAvatar?: boolean;
  };

export type FileType = "image" | "doc" | "pdf" | "video" | "sheet";

export type FileObject = {
  view?: string;
  type?: FileType;
  file?: File;
  url?: string;
};

export type SharedFilesType = FileObject[];

export type SharedLabelIdType = string;

export type SharedOnInputChangeType = (
  event: React.ChangeEvent<HTMLInputElement> &
    React.DragEvent<HTMLLabelElement>,
) => Promise<void | string | null>;

export type UseUploadFileProps = {
  labelId: string;
  fileTypes: FileType[];
  labelContent?: ReactNode;
  isRequired?: boolean;
  isMulti?: boolean;
  isDraggable?: boolean;
  maxCount?: number;
  maxFileSize?: number; // in Kilobytes
  compressFiles?: boolean;
  preventDuplicates?: boolean;
  onChange?: () => void;
};

export type UseUploadFileReturn = {
  files: FileObject[];
  fileTypes: FileType[];
  labelId: string;
  isRequired: boolean;
  labelContent: ReactNode;
  isDraggable: boolean;
  isMulti: boolean;
  isLoading: boolean;
  setFiles: Dispatch<SetStateAction<FileObject[]>>;
  handleClearFile: (fileName?: string) => void;
  onInputChange: SharedOnInputChangeType;
};

export type UploaderContextState = {
  selectedFile?: FileObject | null;
  setSelectedFile?: (file: FileObject | null) => void;

  labelId: SharedLabelIdType;
  labelContent?: ReactNode;
  avatarLabelContent?: ReactNode;
  title?: ReactNode;
  errorMessage?: ReactNode;

  isFileViewable?: boolean;
  isRequired?: boolean;
  isDraggable?: boolean;
  isLoading: boolean;
  hideErrorMessage?: boolean;
  isMulti: boolean;

  placeholderImage?: string;
  files: SharedFilesType;
  fileTypes: FileType[];

  onInputChange: SharedOnInputChangeType;
  handleClearFile: (fileName?: string) => void;

  modal?: Omit<ModalProps, "children"> & {
    onOpen?: () => void;
  };
  classNames?: {
    label?: string;
    avatar?: string;
    listing?: string;
    listingItem?: string;
    error?: string;
    input?: string;
    title?: string;
  };
};

export type UploaderProviderProps = UploaderContextState & {
  children: ReactNode;
};
