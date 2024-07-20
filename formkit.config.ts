import { defineFormKitConfig } from "@formkit/vue";
import { generateClasses } from "@formkit/themes";

export default defineFormKitConfig({
  config: {
    classes: generateClasses({
      global: {
        // applies to all input types
        label: "$reset form-label",
        outer: "$reset form-outer",
        wrapper: "$reset form-group",
        help: "$reset form-help",
        input: "$reset form-control",
      },
      button: {
        input: "$reset btn",
      },
    }),
  },
});
