import type { Meta, StoryObj } from "@storybook/react";
import { Brand, Header, NavBar } from "@components";
import { getStorybookDecorators } from "@utils";
import { FAKE_PARAGRAPH } from "@constants";
import { MOCK_HEADER_ITEMS } from "@mocks";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: getStorybookDecorators({}),
};

export default meta;

type Story = StoryObj<typeof meta>;

const GLASS_EFFECT_CONFIG = {
  enabled: true,
  blur: 10,
  backgroundColor: "#006fed",
  foregroundColor: "#fff",
  opacity: 40,
};

export const Default: Story = {
  args: {},
};

export const Floating: Story = {
  args: {
    variant: "floating",
  },
  render: (args) => {
    return (
      <div>
        <Header {...args} />

        <main className="w-full container mx-auto p-5 pt-24 flex flex-col gap-6">
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
        </main>
      </div>
    );
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const WithGlassEffect: Story = {
  args: {
    variant: "floating",
    glassEffect: GLASS_EFFECT_CONFIG,
  },
  render: (args) => {
    return (
      <div>
        <Header {...args} />

        <main className="w-full container mx-auto p-5 pt-24 flex flex-col gap-6">
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
          <p>{FAKE_PARAGRAPH}</p>
        </main>
      </div>
    );
  },
};

export const SegmentedFloating: Story = {
  args: {
    variant: "segmented-floating",
  },
  render: (args) => {
    return (
      <div>
        <Header {...args}>
          <Brand />

          <NavBar
            items={MOCK_HEADER_ITEMS}
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
      </div>
    );
  },
};

export const SegmentedFloatingWithGlassEffect: Story = {
  args: {
    variant: "segmented-floating",
    glassEffect: GLASS_EFFECT_CONFIG,
  },
  render: (args) => {
    return (
      <div>
        <Header {...args}>
          <Brand />

          <NavBar
            items={MOCK_HEADER_ITEMS}
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
      </div>
    );
  },
};
