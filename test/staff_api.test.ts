import { describe, it, expect, vi } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";
import StaffRepo from "./../server/utils/staff_repo";

vi.mock("./../server/utils/staff_repo");

describe("Staff API", async () => {
  await setup({
    // test context options
  });

  describe("GET /api/staff", async () => {
    it("should be able to fetch results", async () => {});
  });
});
