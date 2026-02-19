import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FormBuilder } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const meta: Meta<typeof FormBuilder> = {
  title: "Organisms/Form Builder",
  component: FormBuilder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: getStorybookDecorators({
    config: {
      layout: {
        withScaffold: false,
      },
    },
  }),
};

export default meta;

type Story = StoryObj<typeof meta>;

const schema = z.object({
  fullName: z.string({ error: "Full name is required" }),
  description: z.string({ error: "Description is required" }),
  status: z.enum(["active", "inactive"], { error: "Status is required" }),
  isActive: z.boolean({ error: "Is active is required" }),
  isAvailable: z.boolean({ error: "Is available is required" }),
});

type SchemaValues = z.infer<typeof schema>;

export const Default: Story = {
  render: () => {
    const [formValues, setFormValues] = useState<Partial<SchemaValues>>({});

    return (
      <div className="w-full max-w-2xl flex flex-col gap-5">
        <h3 className="font-bold text-lg">Form Builder</h3>

        <FormBuilder<typeof schema>
          className="grid grid-cols-2 gap-5 p-4 rounded-md border"
          formProps={{
            mode: "all",
            resolver: zodResolver(schema),
          }}
          onValuesChange={setFormValues}
          onSubmit={() => {
            alert("Form submitted");
          }}
        >
          <Field
            type="input"
            name="fullName"
            inputProps={{
              label: "Full Name",
              placeholder: "Type your name",
            }}
          />

          <Field
            type="select"
            name="status"
            options={[
              { key: "active", label: "Active" },
              { key: "inactive", label: "Inactive" },
            ]}
            selectProps={{
              label: "Status",
            }}
          />

          <Field
            type="autocomplete"
            name="tags"
            options={[
              { key: "tag1", label: "Tag 1" },
              { key: "tag2", label: "Tag 2" },
              { key: "tag3", label: "Tag 3" },
            ]}
            autocompleteProps={{
              label: "Tags",
              placeholder: "Type your tags",
            }}
          />

          <Field type="checkbox" name="isActive">
            Is Active?
          </Field>

          <Field type="switch" name="isAvailable">
            Is Available?
          </Field>

          <Field
            type="textarea"
            name="description"
            className="col-span-2"
            textareaProps={{
              label: "Description",
              placeholder: "Type your description",
            }}
          />
        </FormBuilder>

        <section className="flex flex-col gap-2 rounded-md border p-4">
          <h3 className="font-bold text-lg">Summary: </h3>

          <p className="flex items-center gap-2">
            <span className="font-medium">Full Name:</span>
            <span className="text-gray-500">{formValues.fullName ?? "—"}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Description:</span>
            <span className="text-gray-500">
              {formValues.description ?? "—"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Status:</span>
            <span className="text-gray-500">{formValues.status ?? "—"}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Is Active:</span>
            <span className="text-gray-500">
              {formValues.isActive ? "Selected" : "Not Selected"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium">Is Available:</span>
            <span className="text-gray-500">
              {formValues.isAvailable ? "Selected" : "Not Selected"}
            </span>
          </p>
        </section>
      </div>
    );
  },
};
