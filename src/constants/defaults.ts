import { en, ar } from "@/i18n";
import type { EmperorUIConfig } from "@/types";

export const defaultEmperorUIConfig: EmperorUIConfig = {
  layout: {
    withScaffold: true,
  },
  interLocalization: {
    lang: "en",
    languages: ["en", "ar"],
    defaultLanguage: "en",
    dir: "ltr",
    isMultiLingual: false,
    locales: {
      en,
      ar,
    },
  },
  theme: {
    components: {
      input: {
        variant: "faded",
        labelPlacement: "outside",
        size: "sm",
      },
      textarea: {
        variant: "faded",
        labelPlacement: "outside",
        size: "sm",
      },
      button: {
        variant: "faded",
        size: "sm",
      },
      select: {
        variant: "faded",
        labelPlacement: "outside",
        placeholder: "Select an option",
        size: "sm",
      },
      selectItem: {
        variant: "faded",
      },
      autocomplete: {
        variant: "faded",
        labelPlacement: "outside",
        size: "sm",
      },
      autocompleteItem: {
        variant: "faded",
      },
      datePicker: {
        variant: "faded",
        labelPlacement: "outside",
        size: "sm",
      },
    },
  },
};
