export const ALLOWED_IMAGES_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/bmp",
  "image/svg+xml",
  "image/tiff",
  "image/x-icon",
];

export const ALLOWED_PDF_TYPES = ["application/pdf"];

export const ALLOWED_DOC_TYPES = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const ONE_MEGABYTE = 1024;

export const fileTypesMapping: { [key: string]: string[] } = {
  image: [".jpg", ".jpeg", ".png"],
  doc: [".doc", ".docx"],
  pdf: [".pdf"],
  video: [".mp4"],
  sheet: [".xlsx", ".xlx"],
};
