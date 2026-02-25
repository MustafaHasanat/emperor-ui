import { LangKey, Locale } from "@/i18n";

export const uploaderLocalesMock: Record<
  LangKey,
  Partial<Locale["atoms"]["uploader"]>
> = {
  [LangKey.ENGLISH]: {
    dropHere: "Drop your custom file here",
    selectFile: "Choose a custom file or drag it here",
    selectionTypes: "PNG, JPG or PDF, max size 5MB (custom localized)",
    selectBtn: "Browse custom files",
    errorUploadingFile: "Custom error: please upload at least one file",
    maxNumImages: "Custom limit reached for uploaded images: ",
    errorUploadedTypes: "Custom error: allowed file types are only: ",
    maxSizeExceededError:
      "Custom error: maximum allowed size is MAX_FILE_SIZE MB, but your file is UPLOADED_FILE_SIZE MB",
    duplicatesDenied:
      "Custom error: duplicate file names are not allowed, please rename before uploading",
  },
  [LangKey.ARABIC]: {
    dropHere: "أسقط الملف المخصص هنا",
    selectFile: "اختر ملفًا مخصصًا أو اسحبه إلى هنا",
    selectionTypes: "PNG، JPG أو PDF، الحجم الأقصى 5MB (نص مخصص)",
    selectBtn: "استعراض الملفات المخصصة",
    errorUploadingFile: "خطأ مخصص: يرجى رفع ملف واحد على الأقل",
    maxNumImages: "خطأ مخصص: تم الوصول إلى الحد الأقصى للصور المرفوعة: ",
    errorUploadedTypes: "خطأ مخصص: يمكنك فقط رفع الملفات من الأنواع التالية: ",
    maxSizeExceededError:
      "خطأ مخصص: الحد الأقصى المسموح هو MAX_FILE_SIZE ميغابايت، بينما حجم ملفك هو UPLOADED_FILE_SIZE ميغابايت",
    duplicatesDenied:
      "خطأ مخصص: لا يمكنك رفع ملفات بأسماء مكررة، يرجى إعادة تسميتها قبل الرفع",
  },
};
