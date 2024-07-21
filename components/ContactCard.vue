<script lang="ts" setup>
import type { User } from "~/types/index";

const teamStore = useTeamStore();

interface ContactCardProps extends User {}

const props = defineProps<{ user: ContactCardProps }>();

const emit = defineEmits(["destroy", "edit"]);

const { user } = props;

const teams = computed(() => teamStore.items.slice(0, 3));

const onEdit = () => emit("edit");

const onDestroy = () => {
  const conf = window.confirm("are you sure. you wanna delete this item?");
  if (conf) emit("destroy");
};
</script>
<template>
  <div class="contact-card">
    <div class="contact-card__detail" @click="onEdit">
      <Avatar :initial="user.initials" :src="user.image" :size="24" />
      <div class="contact-card__info">
        <div class="contact-card__info__name">
          {{ user.displayName }}
          <span class="contact-card__info__role">{{ user.functionName }}</span>
        </div>
        <div
          class="contact-card__info__phone"
          v-if="user.phoneCountryPrefix && user.phoneNumber"
        >
          +{{ user.phoneCountryPrefix }} {{ user.phoneNumber }}
        </div>
        <div class="contact-card__info__phone" v-else>
          {{ user.email }}
        </div>
      </div>
    </div>
    <div class="contact-card__teams">
      <Avatar
        v-for="team in teams"
        :initial="team.abbreviation"
        :size="24"
        customClass="stack"
        :color="team.color"
      />
    </div>
    <div class="contact-card__action">
      <IconButton
        element="button"
        name="delete"
        theme="transparent"
        :size="16"
        @click="onDestroy"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-card {
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: $color-gray-mild;
  border-radius: $border-radius;
  border: solid 1px $border;
  overflow: hidden;

  .stack {
    margin-left: -10px;
  }

  &__teams {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
  }

  &__detail {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 16px;
    cursor: pointer;
  }

  &__info {
    flex: 1;
    overflow: hidden;

    &__name {
      font-size: 11.22px;
      font-weight: 500;
      line-height: 16.83px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__role {
      font-size: 11.22px;
      font-weight: 300;
      line-height: 16.83px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__phone {
      font-size: 11.22px;
      font-weight: 300;
      line-height: 16.83px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
  }
}
</style>
