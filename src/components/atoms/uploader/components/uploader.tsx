import type { UploaderProps } from "@/types";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";
import { UploaderProvider } from "@/providers";
import {
  AvatarLabel,
  UploadFileLabel,
  ViewImageModal,
  UploadFileListing,
  UploadFileErrorBox,
  UploadFileInput,
  UploaderTitle,
} from "@/components";

const uploaderStyles = cva(["w-full flex flex-col gap-2"], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

/**
 * @usage
 * ```
 * const uploadProps = useUpload({
     labelId: "uploaded-file",
     fileTypes: ["image", "pdf"],
     isRequired: true,
     isMulti: true,
   });
   
  <Uploader {...uploadProps} />
 * ```
 */
export const Uploader = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof uploaderStyles> & UploaderProps
>(({ className, ...props }, ref) => {
  const {
    isAvatar,
    hideListing,
    isFileViewable,
    hideErrorMessage,
    // Uploader API — must not be forwarded to a DOM element (React warns on unknown props).
    selectedFile,
    setSelectedFile,
    labelId,
    labelContent,
    avatarLabelContent,
    title,
    errorMessage,
    isRequired,
    isDraggable,
    isLoading,
    isMulti,
    placeholderImage,
    files,
    fileTypes,
    onInputChange,
    handleClearFile,
    modal,
    classNames,
    locales,
    setFiles,
    ...divProps
  } = props;

  return (
    <UploaderProvider {...props}>
      <div
        ref={ref}
        className={cn(uploaderStyles({ className }))}
        {...divProps}
      >
        <UploaderTitle />

        {isAvatar ? <AvatarLabel /> : <UploadFileLabel />}

        {!hideListing && <UploadFileListing />}

        {!hideErrorMessage && <UploadFileErrorBox />}

        <UploadFileInput />

        {isFileViewable && <ViewImageModal />}
      </div>
    </UploaderProvider>
  );
});
