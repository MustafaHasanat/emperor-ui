import { cn } from "@/utils";
import { Link } from "@heroui/link";
import { FooterProps } from "@/types";
import { socialLinksClasses } from "./styles";

export function SocialLinksBox({ socialLinks, classNames }: FooterProps) {
  return (
    <section
      data-slot="emperor-footer-social-links"
      className={cn(
        socialLinksClasses({
          className: cn(classNames?.socialLinksWrapper),
        }),
      )}
    >
      {socialLinks?.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300 ease-in-out",
            classNames?.socialLink,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
          {label}
        </Link>
      ))}
    </section>
  );
}
