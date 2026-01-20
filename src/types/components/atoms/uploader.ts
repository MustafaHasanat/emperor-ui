import type { SharedComponentProps } from "@types";
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
) => Promise<void>;

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
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement> &
      React.DragEvent<HTMLLabelElement>,
  ) => Promise<void>;
};

export type UploaderContextState = {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onOpenChange?: (isOpen: boolean) => void;

  selectedFile?: FileObject | null;
  setSelectedFile?: (file: FileObject | null) => void;

  labelId: SharedLabelIdType;
  labelContent?: ReactNode;
  avatarLabelContent?: ReactNode;

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

  modal?: {
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onOpenChange?: (isOpen: boolean) => void;
  };
  classNames?: {
    label?: string;
    avatar?: string;
    listing?: string;
    error?: string;
    input?: string;
  };
};

export type UploaderProviderProps = UploaderContextState & {
  children: ReactNode;
};
