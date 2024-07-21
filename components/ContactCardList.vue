<script lang="ts" setup>
import type { User } from "~/types/index";

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
  <div class="contact-card-list animate__animated animate__fadeInDown">
    <slot />
  </div>
</template>

<style lang="scss">
.contact-card-list {
  display: flex;
  flex-direction: column;

  padding-left: 16px;
  padding-right: 16px;

  @include respond-to(lg) {
    padding-left: 32px;
    padding-right: 32px;
  }
}

.contact-card-list .contact-card {
  border-radius: 0px;
  border-bottom: none;
}

.contact-card-list .contact-card:first-child {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

.contact-card-list .contact-card:last-child {
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
  border-bottom: solid 1px $border;
}
</style>
