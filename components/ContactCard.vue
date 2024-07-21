<script lang="ts" setup>
import type { User } from "~/types/index";

const router = useRouter();

interface ContactCardProps extends User {}

const props = defineProps<{ user: ContactCardProps }>();

const { user } = props;

const onClick = () => router.push({ path: `/contacts/${user._id}` });
</script>
<template>
  <div class="contact-card">
    <div class="contact-card__detail" @click="onClick">
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
      <Avatar
        :initial="user.initials"
        :size="24"
        customClass="stack"
        color="error"
      />
      <Avatar
        :initial="user.initials"
        :size="24"
        customClass="stack"
        color="success"
      />
      <Avatar
        :initial="user.initials"
        :size="24"
        customClass="stack"
        color="info"
      />
    </div>
    <div class="contact-card__action">
      <IconButton
        element="button"
        name="delete"
        theme="transparent"
        :size="16"
        @click.prevent="() => {}"
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
