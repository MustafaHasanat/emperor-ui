import { forwardRef, ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@utils";
import { LandingPageProps } from "@types";
import { landingPageClasses } from "./styles";
import { Brand, Header, NavBar } from "@components";
import { MOCK_HEADER_ITEMS_WITH_SUB_ITEMS } from "@mocks";
import { FAKE_PARAGRAPH } from "@constants";

const GLASS_EFFECT_CONFIG = {
  enabled: true,
  blur: 10,
  backgroundColor: "#006fed",
  foregroundColor: "#fff",
  opacity: 40,
};

/**
 * This component is not for general use nor it is reusable, it is intended to be used as a demo page.
 */
export const LandingPage = forwardRef<
  HTMLDivElement,
  ComponentProps<"main"> &
    VariantProps<typeof landingPageClasses> &
    LandingPageProps
>(({ className, variant = "default", children, ...props }, ref) => {
  return (
    <main
      ref={ref}
      data-slot="emperor-landing-page"
      className={cn(landingPageClasses({ className }))}
      {...props}
    >
      <Header variant="floating" glassEffect={GLASS_EFFECT_CONFIG}>
        <Brand />

        <NavBar
          items={MOCK_HEADER_ITEMS_WITH_SUB_ITEMS}
          hoverEffect="none"
          variant="default"
          className="hidden md:flex"
          subItemsColumns={4}
        />
      </Header>

      <main className="w-full container mx-auto p-5 pt-24 flex flex-col gap-6">
        <p>{FAKE_PARAGRAPH}</p>
        <p>{FAKE_PARAGRAPH}</p>
        <p>{FAKE_PARAGRAPH}</p>
        <p>{FAKE_PARAGRAPH}</p>
        <p>{FAKE_PARAGRAPH}</p>
      </main>

      {children}
    </main>
  );
});
