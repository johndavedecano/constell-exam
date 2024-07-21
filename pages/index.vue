<script lang="ts" setup>
import { useModal } from "vue-final-modal";

import TeamModal from "~/components/TeamModal.vue";

import type { Team } from "~/types";

import _ from "lodash";

const teamStore = useTeamStore();

const teams: ComputedRef<Team[]> = computed(() => teamStore.items);

useHead({
  title: "Constell - Home",
});

const teamModal = useModal({
  component: TeamModal,
  attrs: {
    onClose() {
      teamModal.close();
    },
    async onCreate(fields) {
      try {
        await teamStore.create(fields);

        await teamStore.fetch({ limit: 100000, skip: 0 });

        teamModal.close();
      } catch (error) {
        console.error(error);
      }
    },
    async onUpdate(fields) {
      try {
        await teamStore.update(fields._id, _.omit(fields, ["_id"]));
        teamModal.close();
      } catch (error) {
        console.error(error);
      }
    },
  },
});

const onTeamAdd = () => {
  teamModal.patchOptions({
    attrs: {},
  });
  teamModal.open();
};

const onTeamEdit = (team: Team) => {
  teamModal.patchOptions({
    attrs: {
      ...team,
    },
  });
  teamModal.open();
};

onMounted(() => {
  teamStore.fetch({ limit: 12, skip: 0 });
});
</script>

<template>
  <Container>
    <div class="pt32"></div>
    <div class="page-section">
      <SectionTitle title="Teams" />
    </div>
    <TeamCardList>
      <TeamCard
        v-for="team in teams"
        :team="team"
        :key="team._id"
        @click="() => onTeamEdit(team)"
      />
    </TeamCardList>
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
