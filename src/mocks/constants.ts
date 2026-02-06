import { MockItemCategory, MockItemBrand, MockColor } from "@/mocks/types";

export const MOCK_ITEM_CATEGORIES: MockItemCategory[] = [
  "laptops",
  "desktops",
  "monitors",
  "keyboards",
  "mice",
  "headsets",
  "printers",
  "storage",
  "components",
  "networking",
];

export const MOCK_ITEM_BRANDS: MockItemBrand[] = [
  "Apple",
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "MSI",
  "Razer",
  "Samsung",
  "Microsoft",
];

export const MOCK_COLORS: MockColor[] = [
  "black",
  "gray",
  "white",
  "silver" as MockColor,
  "blue",
  "red",
];

export const MOCK_BASE_DATE = new Date("2026-02-04T00:00:00.000Z");

export const MOCK_REVIEW_COMMENTS: readonly string[] = [
  "Excellent performance for the price.",
  "Very quiet and fast machine.",
  "Solid build quality and screen.",
  "Battery life could be better.",
  "Perfect for gaming and streaming.",
  "Great value, highly recommended.",
  "Runs cool even under heavy load.",
  "Keyboard and trackpad feel premium.",
  "Display is bright and color-accurate.",
  "Setup was easy and straightforward.",
];

export const MOCK_REVIEW_AUTHORS: string[] = [
  "Ahmed K.",
  "Sara M.",
  "Omar A.",
  "Lina H.",
  "Mohammed S.",
  "Nour E.",
  "Youssef R.",
  "Fatima D.",
  "Hassan T.",
  "Mona L.",
];

export const MOCK_LISTING_TITLES: string[] = [
  'Ultrabook Pro 14" Laptop',
  "Gaming Beast RTX Desktop",
  "Office Essential Mini PC",
  'Curved 27" 2K Monitor',
  "Mechanical RGB Gaming Keyboard",
  "Wireless Silent Mouse",
  "Studio USB-C Headset",
  "All-in-One Color Printer",
  "1TB NVMe PCIe 4.0 SSD",
  "High-Airflow ATX Case",
];

export const MOCK_LISTING_DESCRIPTIONS: string[] = [
  "Powerful and lightweight device ideal for productivity, study, and everyday use.",
  "High-end desktop designed for 1440p and 4K gaming with excellent cooling.",
  "Compact form factor PC optimized for office applications and web browsing.",
  "High refresh rate display with vivid colors and thin bezels for immersive work.",
  "Durable keyboard with customizable RGB lighting and fast mechanical switches.",
  "Ergonomic wireless mouse with precise sensor and long battery life.",
  "Comfortable over-ear headset with crystal-clear microphone and rich sound.",
  "Fast wireless printer with automatic duplex printing and mobile support.",
  "Next-generation SSD with blazing read and write speeds for fast boot times.",
  "Spacious case with optimized airflow, cable management, and tempered glass.",
];

export const MOCK_LISTING_IMAGES: string[] = [
  "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
  "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg",
  "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
  "https://images.pexels.com/photos/163117/keyboard-black-notebook-input-163117.jpeg",
  "https://images.pexels.com/photos/3829246/pexels-photo-3829246.jpeg",
  "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg",
  "https://images.pexels.com/photos/3996439/pexels-photo-3996439.jpeg",
  "https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg",
  "https://images.pexels.com/photos/3945650/pexels-photo-3945650.jpeg",
];
