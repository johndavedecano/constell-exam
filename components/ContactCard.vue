<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import type { User } from "~/types";

interface ContactCardProps extends User {}

const props = defineProps<{ user: ContactCardProps }>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");

const { user } = props;
</script>
<template>
  <div class="contact-card">
    <div class="contact-card__detail">
      <Avatar :initial="user.initials" :src="user.image" :size="24" />
      <div class="contact-card__info">
        <div class="contact-card__info__name">
          {{ user.displayName }}
          <span class="contact-card__info__role">{{ user.functionName }}</span>
        </div>
        <div class="contact-card__info__phone">
          {{ user.phoneCountryPrefix }} {{ user.phoneNumber }}
        </div>
      </div>
    </div>
    <div class="contact-card__teams">
      <Avatar :initial="user.initials" :size="24" customClass="stack" />
      <Avatar :initial="user.initials" :size="24" customClass="stack" />
      <Avatar :initial="user.initials" :size="24" customClass="stack" />
    </div>
    <div class="contact-card__action">
      <IconButton
        element="button"
        name="delete"
        theme="transparent"
        :size="16"
        @click.prevent="onClick"
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
  }

  &__info {
    flex: 1;

    &__name {
      font-size: 11.22px;
      font-weight: 500;
      line-height: 16.83px;
      text-align: left;
    }

    &__role {
      font-size: 11.22px;
      font-weight: 300;
      line-height: 16.83px;
      text-align: left;
    }

    &__phone {
      font-size: 11.22px;
      font-weight: 300;
      line-height: 16.83px;
      text-align: left;
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
