import { TeamCard } from "#components";
import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

describe("TeamCard.vue", () => {
  it("can mount some component", async () => {
    const component = await mountSuspended(TeamCard, {
      props: {
        team: {
          name: "test",
          abbreviation: "TS",
          color: "#FFF",
          _id: "test",
          teamPermissions: [],
        },
      },
    });
    await expect(component.html()).toMatchFileSnapshot(
      "./__snapshots__/TeamCard.vue.html"
    );
  });
});
