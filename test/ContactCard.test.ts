import { ContactCard } from "#components";
import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

describe("ContactCard.vue", () => {
  it("can mount some component", async () => {
    const component = await mountSuspended(ContactCard, {
      props: {
        user: {
          fullName: "John Dave Decano",
          displayName: "Dave",
          initials: "J.D.D",
          email: "johndavedecano@gmail.com",
          phoneNumber: 645046370,
          phoneCountryPrefix: 31,
          image: "https://mighty.tools/mockmind-api/content/human/65.jpg",
          isEmployee: true,
          functionName: "Software Engineer",
          address: {
            addressLineOne: "Walenburgstraat 3",
            addressLineTwo: "",
            city: "Breda",
            country: "NL",
            postalCode: "4834RK",
            state: "North Brabant",
          },
          _id: "",
          teamIds: [],
          userPermissions: [],
        },
      },
    });
    await expect(component.html()).toMatchFileSnapshot(
      "./__snapshots__/ContactCard.vue.html"
    );
  });
});
