import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", () => {
  const items = ref([]);
  const loading = ref(false);
  const loaded = ref(false);

  return {
    items,
    loading,
    loaded,
  };
});
