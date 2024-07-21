import { defineStore } from "pinia";
import type { QueryFilter, User } from "~/types";

export const useStaffStore = defineStore("staff", () => {
  const items = ref([]);
  const loading = ref(false);
  const loaded = ref(false);

  const fetch = async (filter: QueryFilter) => {};

  const create = async (user: Partial<User> = {}) => {};

  const update = async (id: string, user: Partial<User> = {}) => {};

  const show = async (id: string) => {};

  const destroy = async (id: string) => {};

  return {
    items,
    loading,
    loaded,
  };
});
