import {
  CopyRights,
  Contacts,
  QuickLink,
  QuickLinkCollection,
  SocialLink,
} from "@/types";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const quickLinks: QuickLinkCollection[] = [
  {
    title: "Products",
    links: [
      {
        label: "Product 1",
        href: "/product-1",
      },
      {
        label: "Product 2",
        href: "/product-2",
      },
      {
        label: "Product 3",
        href: "/product-3",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Service 1",
        href: "/service-1",
      },
      {
        label: "Service 2",
        href: "/service-2",
      },
      {
        label: "Service 3",
        href: "/service-3",
      },
      {
        label: "Service 4",
        href: "/service-4",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Resource 1",
        href: "/resource-1",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
];

export const policies: QuickLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy",
  },
];

export const copyRights: CopyRights = {
  year: 2026,
  text: "All rights reserved - Emperor UI",
};

export const contacts: Contacts = {
  mobile: "+964 770 000 0000",
  email: "contact@emperorui.com",
  website: "https://jsempire.com",
  workingHours: "Monday - Friday: 9:00 AM - 5:00 PM",
  addresses: [
    {
      country: "Jordan",
      street: "Amman, Jordan",
      city: "Amman",
      state: "Amman",
      zip: "11111",
    },
    {
      country: "Saudi Arabia",
      street: "Riyadh, Saudi Arabia",
      city: "Riyadh",
      state: "Riyadh",
      zip: "11111",
    },
  ],
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://facebook.com",
    icon: <FacebookIcon />,
  },
  {
    href: "https://twitter.com",
    icon: <TwitterIcon />,
  },
  {
    href: "https://instagram.com",
    icon: <InstagramIcon />,
  },
  {
    href: "https://linkedin.com",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://youtube.com",
    icon: <YoutubeIcon />,
  },
];
