<script lang="ts" setup>
import { useModal } from "vue-final-modal";

import _ from "lodash";

import TeamModal from "~/components/TeamModal.vue";

import type { Team, User } from "~/types";

useMobileNav(true);
usePageTitle("");
useBackRoute("/");

const teamStore = useTeamStore();
const staffStore = useStaffStore();

const teams: ComputedRef<Team[]> = computed(() => teamStore.items);
const contacts: ComputedRef<User[]> = computed(() => staffStore.items);

const router = useRouter();

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

const onUserEdit = (user: User) => {
  router.push(`/contacts/${user._id}`);
};

const onUserDestroy = (user: User) => {
  try {
    staffStore.destroy(user._id);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  teamStore.fetch({ limit: 12, skip: 0 });
  staffStore.fetch({ limit: 1000, skip: 0 });
});
</script>

<template>
  <Container>
    <div class="pt32"></div>

    <div class="page-section">
      <div class="page-title mb32">Venue People</div>

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
    <ContactCardList>
      <ContactCard
        v-for="user in contacts"
        :user="user"
        :key="user._id"
        @edit="() => onUserEdit(user)"
        @destroy="() => onUserDestroy(user)"
      />
    </ContactCardList>
    <div class="page-section">
      <NewAction
        label="New User"
        @click="() => $router.push('/contacts/new')"
      />
    </div>
    <div class="pt32"></div>
  </Container>
</template>
