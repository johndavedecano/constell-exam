<script lang="ts" setup>
import type { User } from "~/types";

import _ from "lodash";

useMobileNav(false);

usePageTitle("New User");

useBackRoute("/contacts");

useHead({
  title: "Constell - New Contact",
});

const staffStore = useStaffStore();

const router = useRouter();

const user = {
  // fullName: "John Dave Decano",
  // displayName: "Dave",
  // initials: "J.D.D",
  // email: "johndavedecano@gmail.com",
  // phoneNumber: 645046370,
  // phoneCountryPrefix: 31,
  // image: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  // isEmployee: true,
  // functionName: "Software Engineer",
  // address: {
  //   addressLineOne: "Walenburgstraat 3",
  //   addressLineTwo: "",
  //   city: "Breda",
  //   country: "NL",
  //   postalCode: "4834RK",
  //   state: "North Brabant",
  // },
};

const onCreateNew = async (fields = {}) => {
  try {
    console.log(fields);
    const params: Partial<User> = {
      fullName: _.get(fields, "fullName", ""),
      displayName: _.get(fields, "displayName", ""),
      initials: _.get(fields, "initials", ""),
      email: _.get(fields, "email", ""),
      phoneNumber: Number(_.get(fields, "phone.phoneNumber")),
      phoneCountryPrefix: Number(_.get(fields, "phone.phoneCountryPrefix")),
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

    await staffStore.create(params);

    router.push("/contacts");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <Container>
    <div class="page-section">
      <UserForm
        @submit="onCreateNew"
        :user="user"
        :disabled="staffStore.loading"
      />
    </div>
  </Container>
</template>
