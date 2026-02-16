import { cva } from "class-variance-authority";

export const filterClasses = cva([""], {
  variants: {
    type: {
      search: "",
      select: "",
      autocomplete: "",
      date: "",
      numeric: "",
      checkbox: "",
      checkboxGroup: "",
      radio: "",
      switch: "",
      range: "",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});
