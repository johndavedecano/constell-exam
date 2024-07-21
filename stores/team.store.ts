import axios from "axios";
import { defineStore } from "pinia";
import type { QueryFilter, Team } from "~/types";

export const useTeamStore = defineStore("team", () => {
  const items = ref([]);
  const loading = ref(false);

  const fetch = async (filter: QueryFilter) => {
    try {
      loading.value = true;

      const response = await axios.get("/api/team", { params: filter });

      console.log(response.data);

      items.value = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const create = async (team: Partial<Team> = {}) => {
    try {
      loading.value = true;

      await axios.post("/api/team", team);
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const update = async (id: string, team: Partial<Team> = {}) => {};

  const show = async (id: string) => {};

  const destroy = async (id: string) => {};

  return {
    items,
    loading,
    fetch,
    create,
    update,
    show,
    destroy,
  };
});
