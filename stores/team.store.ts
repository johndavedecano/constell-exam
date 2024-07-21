import axios from "axios";
import { defineStore } from "pinia";
import type { QueryFilter, Team } from "~/types";
import _ from "lodash";

export const useTeamStore = defineStore("team", () => {
  const items = ref<Team[]>([]);

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

  const update = async (id: string, team: Partial<Team> = {}) => {
    try {
      loading.value = true;

      items.value = items.value.map((v: Team) => {
        if (v._id === id) {
          return _.merge(v, team);
        }
        return v;
      });

      await axios.put(`/api/team/${id}`, team);
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    loading,
    fetch,
    create,
    update,
  };
});
