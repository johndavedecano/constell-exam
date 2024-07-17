<script lang="ts" setup>
import type { Team } from "~/types";

interface TeamCardProps extends Team {}

const { team } = defineProps<{ team: TeamCardProps }>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");
</script>
<template>
  <div class="team-card">
    <div class="team-card__detail">
      <Avatar :initial="team.abbreviation" :color="team.color" />
      <a
        :href="team.iri"
        class="team-card__title"
        v-text="team.name"
        @click.prevent="onClick"
      ></a>
    </div>
    <div class="team-card__action">
      <IconButton
        element="button"
        name="edit"
        theme="transparent"
        :size="16"
        @click.prevent="onClick"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-card {
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: $color-gray-mild;
  border-radius: $border-radius;
  box-shadow: $box-shadow;

  &__title {
    font-size: 12.77px;
    font-weight: 500;
    line-height: 19.15px;
    text-align: left;
  }

  &__detail {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    color: $text-body;
  }

  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
  }
}
</style>
