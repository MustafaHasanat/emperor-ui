import type { FooterProps } from "@/types";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { contentClasses, footerClasses, footerStyles } from "./styles";
import {
  PoliciesBox,
  QuickLinksBox,
  SocialLinksBox,
  CopyRightsBox,
} from "@/components";
import { Divider } from "@heroui/react";

export const Footer = forwardRef<
  HTMLElement,
  ComponentProps<"footer"> & VariantProps<typeof footerClasses> & FooterProps
>(
  (
    {
      className,
      classNames,
      policies,
      copyRights,
      socialLinks,
      contacts,
      quickLinks,
      variant = "default",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        data-slot="emperor-ui-footer"
        className={cn(
          footerClasses({
            variant,
            className: cn(className, classNames?.base),
          }),
        )}
        style={footerStyles({})}
        {...props}
      >
        <div
          data-slot="emperor-footer-content"
          className={cn(
            contentClasses({
              className: cn(className, classNames?.content),
            }),
          )}
        >
          {children}
        </div>

        <QuickLinksBox quickLinks={quickLinks} classNames={classNames} />

        <Divider className="col-span-full bg-background/30" />

        <div
          className={cn(
            "col-span-full flex flex-col gap-4 justify-between items-center w-full",
            "md:flex-row",
          )}
        >
          <SocialLinksBox socialLinks={socialLinks} classNames={classNames} />
          <PoliciesBox policies={policies} classNames={classNames} />
        </div>

        <CopyRightsBox copyRights={copyRights} classNames={classNames} />
      </footer>
    );
  },
);
