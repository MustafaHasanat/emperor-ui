import { SideBarAction, NavigationItem } from "@types";
import {
  HelpCircleIcon,
  HomeIcon,
  InfoIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MailIcon,
  ServerIcon,
  SettingsIcon,
} from "lucide-react";

export const MOCK_HEADER_SUB_ITEMS: NavigationItem[] = [
  {
    id: "info",
    label: "Info",
    href: "#info",
    Icon: InfoIcon,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    Icon: MailIcon,
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
    Icon: ServerIcon,
  },
  {
    id: "settings",
    label: "Settings",
    href: "#settings",
    Icon: SettingsIcon,
  },
  {
    id: "help",
    label: "Help",
    href: "#help",
    Icon: HelpCircleIcon,
  },
  {
    id: "support",
    label: "Support",
    href: "#support",
    Icon: LifeBuoyIcon,
  },
];

export const MOCK_HEADER_ITEMS: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "#home",
    Icon: HomeIcon,
  },
  {
    id: "about",
    label: "About",
    href: "#about",
    Icon: InfoIcon,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    Icon: MailIcon,
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
    Icon: ServerIcon,
  },
];

export const MOCK_HEADER_ITEMS_WITH_SUB_ITEMS: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "#home",
    Icon: HomeIcon,
    subItems: MOCK_HEADER_SUB_ITEMS,
  },
  {
    id: "about",
    label: "About",
    href: "#about",
    Icon: InfoIcon,
    subItems: MOCK_HEADER_SUB_ITEMS,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    Icon: MailIcon,
    subItems: MOCK_HEADER_SUB_ITEMS,
  },
  {
    id: "services",
    label: "Services",
    href: "#services",
    Icon: ServerIcon,
    subItems: MOCK_HEADER_SUB_ITEMS,
  },
];

export const MOCK_HEADER_ACTIONS: SideBarAction[] = [
  {
    key: "logout",
    label: "Logout",
    color: "danger",
    onPress: () => console.log("logout"),
    startContent: <LogOutIcon />,
  },
];
