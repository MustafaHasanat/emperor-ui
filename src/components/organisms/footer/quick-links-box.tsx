import { cn, Link } from "@heroui/react";
import { FooterProps } from "@/types";
import { quickLinksClasses } from "./styles";

export function QuickLinksBox({ quickLinks, classNames }: FooterProps) {
  return (
    <section
      data-slot="emperor-footer-quick-links"
      className={cn(
        quickLinksClasses({
          className: cn(classNames?.quickLinksWrapper),
        }),
      )}
    >
      {quickLinks?.map(({ links, title }) => (
        <div
          key={title}
          className={cn("flex flex-col gap-4", classNames?.quickLinksItem)}
        >
          <h3
            className={cn("text-lg font-semibold", classNames?.quickLinksTitle)}
          >
            {title}
          </h3>

          <ul className={cn("flex flex-col gap-2", classNames?.quickLinksList)}>
            {links?.map(({ href, label, isExternal }) => (
              <Link
                key={href}
                href={href}
                target={isExternal ? "_blank" : "_self"}
                className={cn(
                  " text-gray-400 hover:text-white transition-all duration-300 ease-in-out",
                  classNames?.quickLinksLink,
                )}
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
