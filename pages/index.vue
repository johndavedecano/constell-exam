<script lang="ts" setup>
import type { User } from "~/types";

const user: User = {
  iri: "/api/staff/1000",
  id: 1000,
  fullName: "Staffy de Nielden",
  displayName: "Staffy",
  initials: "SN",
  email: "staff_1@venue.com",
  phoneNumber: "68872901",
  phoneCountryPrefix: "+31",
  teamIds: [1, 3],
  image: "https://mighty.tools/mockmind-api/content/human/44.jpg",
  address: {
    iri: "/api/user_address/1",
    id: 1,
    addressLineOne: "Fake Street 1",
    addressLineTwo: "Apt up",
    city: "Amsterdam",
    country: "NL",
    postalCode: "1010TD",
    state: null,
  },
  isEmployee: true,
  functionName: "1st Chef",
  userPermissions: [],
};
</script>

<template>
  <SectionTitle title="People"></SectionTitle>
  <ContactCardList />
  <NewAction label="New Item" />
</template>

<style lang="scss" scoped></style>
