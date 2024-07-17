<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";

interface AvatarProps {
  src?: string;
  initial: string;
  color?: string;
  size?: number;
  customClass?: string;
}

const {
  src,
  customClass = "",
  initial = "",
  color = "white",
  size = 40,
} = defineProps<AvatarProps>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");

const avatarsize = computed(() => `${size}px`);

const source = computed(() => (src ? `url(${src})` : ""));

const classnames = reactive({
  avatar: true,
  ...(customClass ? { [customClass]: true } : {}),
  "avatar-primary": color === "primary",
  "avatar-white": color === "white",
  "avatar-success": color === "success",
  "avatar-error": color === "error",
  "avatar-warning": color === "warning",
  "avatar-info": color === "info",
});
</script>

<template>
  <div :class="classnames" v-text="src ? '' : initial" @click="onClick"></div>
</template>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 10px;
  border: solid 1px;
  border-color: $color-primary;
  min-width: v-bind(avatarsize);
  min-height: v-bind(avatarsize);
  max-width: v-bind(avatarsize);
  max-height: v-bind(avatarsize);
  background-image: v-bind(source);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  letter-spacing: 1px;

  background-color: $color-white;
  color: $text-body;
}

.avatar-primary {
  background-color: $color-primary;
  color: white;
}

.avatar-white {
  background-color: $color-white;
  color: $text-body;
}

.avatar-success {
  background-color: $color-success;
  color: $text-body;
}

.avatar-error {
  background-color: $color-error;
  color: $text-body;
}

.avatar-warning {
  background-color: $color-warning;
  color: $text-body;
}

.avatar-info {
  background-color: $color-info;
  color: $text-body;
}
</style>
