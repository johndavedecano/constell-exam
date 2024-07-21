<script lang="ts" setup>
import type { Team, User } from "~/types/index";

useHead({
  title: "Constell - Home",
});

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

const team: Team = {
  iri: "/api/teams/1",
  id: 1,
  name: "Front-enders",
  color: "#C1E0B9",
  abbreviation: "F",
  teamPermissions: [],
};
</script>

<template>
  <Container>
    <div class="pt32"></div>
    <div class="page-section">
      <SectionTitle title="Teams" />
    </div>
    <TeamCardList>
      <TeamCard :team="team" />
      <TeamCard :team="team" />
      <TeamCard :team="team" />
      <TeamCard :team="team" />
    </TeamCardList>
    <div class="page-section">
      <NewAction label="New Team" />
    </div>
    <div class="pt32"></div>
    <div class="page-section">
      <SectionTitle title="People" />
    </div>
    <ContactCardList>
      <ContactCard :user="user" />
      <ContactCard :user="user" />
      <ContactCard :user="user" />
      <ContactCard :user="user" />
      <ContactCard :user="user" />
    </ContactCardList>
    <div class="page-section">
      <NewAction label="New User" />
    </div>
    <div class="pt32"></div>
  </Container>
</template>
