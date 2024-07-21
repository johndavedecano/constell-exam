<script lang="ts" setup>
import { useModal } from "vue-final-modal";

import TeamModal from "~/components/TeamModal.vue";

import type { Team, User } from "~/types/index";

useHead({
  title: "Constell - Home",
});

const teamModal = useModal({
  component: TeamModal,
  attrs: {},
});

const onTeamAdd = () => teamModal.open();
</script>

<template>
  <Container>
    <div class="pt32"></div>
    <div class="page-section">
      <SectionTitle title="Teams" />
    </div>
    <TeamCardList> </TeamCardList>
    <div class="page-section">
      <NewAction label="New Team" @click="onTeamAdd" />
    </div>
    <div class="pt32"></div>
    <div class="page-section">
      <SectionTitle title="People" />
    </div>
    <ContactCardList> </ContactCardList>
    <div class="page-section">
      <NewAction label="New User" />
    </div>
    <div class="pt32"></div>
  </Container>
</template>
