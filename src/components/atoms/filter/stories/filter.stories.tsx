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

const filterOptions = [
  { key: "option-key-1", label: "Option 1" },
  { key: "option-key-2", label: "Option 2" },
  { key: "option-key-3", label: "Option 3" },
];

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

export const AutocompleteFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      autocomplete: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="autocomplete"
          paramKey="autocomplete"
          autocompleteProps={{ label: "Autocomplete" }}
          options={filterOptions}
        />

        <p className="text-gray-500 text-xs">
          {filters?.autocomplete || "No filter applied"}
        </p>
      </section>
    );
  },
};

export const DateFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      date: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="date"
          paramKey="date"
          dateProps={{ label: "Select date" }}
        />

        <p className="text-gray-500 text-xs">
          {filters?.date || "No filter applied"}
        </p>
      </section>
    );
  },
};

export const NumericFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      numeric: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="numeric"
          paramKey="numeric"
          numericProps={{ label: "Enter number", placeholder: "0" }}
        />

        <p className="text-gray-500 text-xs">
          {filters?.numeric || "No filter applied"}
        </p>
      </section>
    );
  },
};

export const CheckboxGroupFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      categories: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="checkboxGroup"
          paramKey="categories"
          checkboxGroupProps={{ label: "Categories" }}
          options={filterOptions}
        />

        <p className="text-gray-500 text-xs">
          {filters?.categories || "No filter applied"}
        </p>
      </section>
    );
  },
};

export const SwitchFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      enabled: boolean;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="switch"
          paramKey="enabled"
          switchProps={{ children: "Enabled ?" }}
        />

        <p className="text-gray-500 text-xs">
          <span>Result: </span>
          <span className="text-gray-500">
            {filters?.enabled ? "Yes" : "No"}
          </span>
        </p>
      </section>
    );
  },
};

export const RangeFilter: Story = {
  render: () => {
    const { filters } = useFilters<{
      range: string;
    }>();

    return (
      <section className="flex flex-col gap-2">
        <Filter
          type="range"
          paramKey="range"
          rangeProps={{
            label: "Value",
            minValue: 0,
            maxValue: 100,
            step: 1,
          }}
        />

        <p className="text-gray-500 text-xs">
          {filters?.range ?? "No filter applied"}
        </p>
      </section>
    );
  },
};
