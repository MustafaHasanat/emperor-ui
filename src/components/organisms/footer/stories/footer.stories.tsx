import type { Meta, StoryObj } from "@storybook/react-vite";
import { Brand, Footer } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { FooterProps } from "@/types";
import {
  FAKE_PARAGRAPH,
  FAKE_SENTENCE,
  quickLinks,
  policies,
  copyRights,
  contacts,
  socialLinks,
} from "@/constants";
import { Button } from "@heroui/react";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: getStorybookDecorators({}),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quickLinks,
    policies,
    copyRights,
    contacts,
    socialLinks,
  },
  render: (args: FooterProps) => {
    return (
      <div className="flex flex-col gap-6">
        <main className="w-full container mx-auto p-5 flex flex-col gap-6">
          <p>{FAKE_PARAGRAPH}</p>
        </main>

        <Footer
          classNames={{
            content: "p-5 gap-8 items-center md:items-start",
          }}
          {...args}
        >
          <Brand />
          <p className="text-center md:text-left">{FAKE_SENTENCE}</p>

          <Button color="primary" className="w-fit">
            Join now
          </Button>
        </Footer>
      </div>
    );
  },
};
