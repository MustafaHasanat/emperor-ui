import { toastsAr, toastsEn } from "@/i18n";

export type ToastKey = keyof typeof toastsAr & keyof typeof toastsEn;
