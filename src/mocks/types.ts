import { ItemChipProps } from "@/types";

export type MockItemCategory =
  | "laptops"
  | "desktops"
  | "monitors"
  | "keyboards"
  | "mice"
  | "headsets"
  | "printers"
  | "storage"
  | "components"
  | "networking";

export type MockColor =
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "purple"
  | "orange"
  | "pink"
  | "brown"
  | "gray"
  | "black"
  | "white";

export type MockItemBrand =
  | "Apple"
  | "Dell"
  | "HP"
  | "Lenovo"
  | "Asus"
  | "Acer"
  | "MSI"
  | "Razer"
  | "Samsung"
  | "Microsoft";

export type MockReview = {
  id: number; // unique and random UUID
  rating: number; // from 1 to 5 (float) rounded to 1 decimal place
  comment: string; // less than 50 characters
  author: string; // less than 100 characters
  createdAt: Date; // current date
  updatedAt: Date; // current date
};

export type MockItemType = {
  id: number; // unique and random UUID
  title: string; // less than 100 characters
  description: string; // less than 1000 characters
  image: string; // url (actual image url)
  price: number; // less than 10000
  categories: ItemChipProps[]; // from 1 to 5 categories
  isAvailable: boolean;
  isBestSeller: boolean;
  averageRating: number; // from 1 to 5 (float) rounded to 1 decimal place
  reviews: MockReview[]; // from 0 to 100
  brand: MockItemBrand;
  color: MockColor;
  createdAt: Date; // current date
  updatedAt: Date; // current date
};
