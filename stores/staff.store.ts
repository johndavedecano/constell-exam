import axios from "axios";
import { defineStore } from "pinia";
import type { QueryFilter, User } from "~/types";
import _ from "lodash";

export const useStaffStore = defineStore("staff", () => {
  const items = ref<User[]>([]);

  const loading = ref(false);

  const contact = ref<User>();

  const fetch = async (filter: QueryFilter) => {
    try {
      loading.value = true;

      const response = await axios.get("/api/staff", { params: filter });

      console.log(response.data);

      items.value = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const create = async (staff: Partial<User> = {}) => {
    try {
      loading.value = true;

      await axios.post("/api/staff", staff);
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const update = async (id: string, staff: Partial<User> = {}) => {
    try {
      loading.value = true;

      items.value = items.value.map((v: User) => {
        if (v._id === id) {
          return _.merge(v, staff);
        }
        return v;
      });

      await axios.put(`/api/staff/${id}`, staff);
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const show = async (id: string) => {
    try {
      loading.value = true;

      const response = await axios.get(`/api/staff/${id}`);

      contact.value = response.data;
    } catch (error) {
      throw new Error();
    } finally {
      loading.value = false;
    }
  };

  const destroy = async (id: string) => {
    try {
      loading.value = true;

      items.value = items.value.filter((u) => u._id !== id);

      await axios.delete(`/api/staff/${id}`);
    } catch (error) {
      throw new Error();
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
    show,
    destroy,
  };
});
