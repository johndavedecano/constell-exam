<script lang="ts" setup>
import type { User } from "~/types";

import _ from "lodash";

useMobileNav(false);

usePageTitle("Edit User");

useHead({
  title: "Constell - Edit User",
});

const route = useRoute();
const router = useRouter();
const staffStore = useStaffStore();

const user = computed(() => staffStore.contact);

const onCreateNew = async (fields = {}) => {
  try {
    const params: Partial<User> = {
      fullName: _.get(fields, "fullName", ""),
      displayName: _.get(fields, "displayName", ""),
      initials: _.get(fields, "initials", ""),
      email: _.get(fields, "email", ""),
      phoneNumber: _.get(fields, "phone.phoneNumber"),
      phoneCountryPrefix: _.get(fields, "phone.phoneCountryPrefix"),
      image: _.get(fields, "image", ""),
      isEmployee: _.get(fields, "isEmployee", true),
      functionName: _.get(fields, "functionName", ""),
      address: {
        addressLineOne: _.get(fields, "addressLineOne", ""),
        addressLineTwo: _.get(fields, "addressLineTwo", ""),
        city: _.get(fields, "city", ""),
        country: _.get(fields, "country", ""),
        postalCode: _.get(fields, "postalCode", ""),
        state: _.get(fields, "state", ""),
      },
    };

    await staffStore.update(String(user.value?._id), params);

    router.push("/contacts");
  } catch (error) {
    console.error(error);
  }
};

const loadContact = async () => {
  try {
    await staffStore.show(String(route.params.id));
  } catch (error) {
    router.replace("/contacts");
  }
};

onMounted(() => {
  loadContact();
});
</script>

<template>
  <Container>
    <div class="page-section">
      <UserForm @submit="onCreateNew" :user="user" v-if="!staffStore.loading" />
    </div>
  </Container>
</template>
