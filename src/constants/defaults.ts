import type { ColorsPalette, EmperorUIConfig } from "@types";

export const defaultColorsPalette: ColorsPalette = {
  primary: "#006FEE",
  secondary: "#9353d3",
  background: "#3f3f46",
  foreground: "#ECEDEE",
  success: "#17c964",
  warning: "#f5a524",
  danger: "#f31260",
  info: "#3B82F6",
};

export const defaultEmperorUIConfig: EmperorUIConfig = {
  theme: {
    mode: "dark",
    colors: defaultColorsPalette,
  },
  layout: {
    withScaffold: true,
  },
  interLocalization: {
    lang: "en",
    languages: ["en", "ar"],
    defaultLanguage: "en",
    dir: "ltr",
    isMultiLingual: false,
    locales: {
      en: {
        dropHere: "Drop file here",
        selectFile: "Select a file or drag and drop here",
        selectionTypes: "JPG, PNG or PDF, file size no more than 10MB",
        selectBtn: "Select file",
        errorUploadingFile: "No file was uploaded",
        maxNumImages: "Maximum number of uploaded images exceeded: ",
        errorUploadedTypes: "You can only upload files within these types: ",
        maxSizeExceededError:
          "You can only upload files/images with less than MAX_FILE_SIZE Mega Bytes, you're file's size is UPLOADED_FILE_SIZE Mega Bytes",
        duplicatesDenied:
          "You can't upload images with duplicate names, you may rename them before the upload process",
      },
      ar: {
        dropHere: "أسقط الملف هنا",
        selectFile: "حدد ملفًا أو اسحبه وأفلته هنا",
        selectionTypes: "JPG, PNG أو PDF، حجم الملف لا يزيد عن 10MB",
        selectBtn: "حدد ملف",
        errorUploadingFile: "لم يتم تحميل أي ملف",
        maxNumImages: "تم تجاوز الحد الأقصى للصور المرفوعة: ",
        errorUploadedTypes: "يمكنك فقط تحميل الملفات من الأنواع التالية: ",
        maxSizeExceededError:
          "يمكنك فقط رفع ملفات/صور بحجم أقل من MAX_FILE_SIZE ميغابايت، بينما حجم الملف الذي رفعته هو UPLOADED_FILE_SIZE ميغابايت",
        duplicatesDenied:
          "لا يمكنك رفع صور تحمل نفس الاسم، يمكنك إعادة تسميتها قبل عملية الرفع",
      },
    },
  },
};
