"use client";

import { FileObject } from "@/types";
/**
 * Compress an image to reduce its size
 *
 * ! NOTE: This function should ONLY run on CLIENT side
 */
import imageCompression from "browser-image-compression";

export async function compressImage(
  fileObject: FileObject,
  maxSizeMB?: number,
): Promise<FileObject | null> {
  try {
    if (!fileObject?.file) return null;

    const blob = await imageCompression(fileObject?.file, {
      maxSizeMB: maxSizeMB || 2,
      useWebWorker: true, // Optimize performance
      initialQuality: 0.8, // Adjust the compression quality (0.1 to 1)
    });

    const compressedFile = new File([blob], fileObject?.file?.name, {
      type: blob.type,
    });

    return {
      ...fileObject,
      file: compressedFile,
    };
  } catch (error) {
    console.error("Image compression failed:", error);
    return null;
  }
}
