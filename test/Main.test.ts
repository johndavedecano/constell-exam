import { Main } from "#components";
import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import path from "path";

describe("Main.vue", () => {
  it("can mount some component", async () => {
    const component = await mountSuspended(Main);
    await expect(component.html()).toMatchFileSnapshot(
      "./__snapshots__/Main.vue.html"
    );
  });
});
