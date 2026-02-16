import type { Meta, StoryObj } from "@storybook/react-vite";
import { Filter } from "@/components";
import { useFilters } from "@/hooks";

const meta: Meta<typeof Filter> = {
  title: "Atoms/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      search: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="search"
          paramKey="search"
          searchProps={{ label: "Search" }}
        />

        <p className="text-gray-500 text-xs">
          {filters?.search || "No filter applied"}
        </p>
      </section>
    );
  },
};

export const SelectFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      select: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="select"
          paramKey="select"
          selectProps={{ label: "Select an option" }}
          options={[
            { key: "option-key-1", label: "Option 1" },
            { key: "option-key-2", label: "Option 2" },
            { key: "option-key-3", label: "Option 3" },
          ]}
        />

        <p className="text-gray-500 text-xs">
          {filters?.select || "No filter applied"}
        </p>
      </section>
    );
  },
};

export const DateFilter: Story = {
  args: {
    type: "date",
    paramKey: "date",
  },
};

export const CheckboxFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      isChecked: boolean;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="checkbox"
          paramKey="isChecked"
          checkboxProps={{ children: "Is Checked ?" }}
        />

        <p className="text-gray-500 text-xs">
          <span>Result: </span>
          <span className="text-gray-500">
            {filters?.isChecked ? "Yes" : "No"}
          </span>
        </p>
      </section>
    );
  },
};
