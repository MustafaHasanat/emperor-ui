import type { SharedComponentProps } from "@types";

export type LandingPageClassnames = {
  base?: string;
};

export type LandingPageProps = SharedComponentProps & {
  classNames?: LandingPageClassnames;
  variant?: "default";
};
