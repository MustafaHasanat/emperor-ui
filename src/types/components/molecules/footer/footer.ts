import type { SharedComponentProps } from "@/types";
import { ReactNode } from "react";

export type FooterClassnames = {
  base?: string;
  content?: string;
  policiesWrapper?: string;
  policy?: string;
  quickLinksWrapper?: string;
  quickLinksTitle?: string;
  quickLinksList?: string;
  quickLinksItem?: string;
  quickLinksLink?: string;
  socialLinksWrapper?: string;
  socialLink?: string;
  copyRightsWrapper?: string;
  copyRightsText?: string;
  contactsWrapper?: string;
  contact?: string;
};

export type QuickLink = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type QuickLinkCollection = {
  title?: string;
  links: QuickLink[];
};

export type SocialLink = {
  label?: string;
  href: string;
  icon?: ReactNode;
  isExternal?: boolean;
};

export type Address = {
  country?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export type CopyRights = {
  year: number;
  text: string;
};

export type Contacts = {
  mobile?: string;
  email?: string;
  addresses?: Address[];
  website?: string;
  workingHours?: string;
};

export type FooterProps = SharedComponentProps & {
  classNames?: FooterClassnames;
  policies?: QuickLink[];
  quickLinks?: QuickLinkCollection[];
  socialLinks?: SocialLink[];
  copyRights?: CopyRights;
  contacts?: Contacts;
};
