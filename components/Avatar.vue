<script lang="ts" setup>
import { computed } from "vue";

interface AvatarProps {
  src?: string;
  initial: string;
  color?: string;
  size?: number;
  customClass?: string;
}

const props = defineProps<AvatarProps>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");

const classnames = reactive({
  avatar: true,
  ...(props.customClass ? { [props.customClass]: true } : {}),
  "avatar-primary": props.color === "primary",
  "avatar-white": props.color === "white",
  "avatar-success": props.color === "success",
  "avatar-error": props.color === "error",
  "avatar-warning": props.color === "warning",
  "avatar-info": props.color === "info",
});

const styles = computed(() => {
  const values = {
    "min-width": `${props.size}px`,
    "min-height": `${props.size}px`,
    "max-width": `${props.size}px`,
    "max-height": `${props.size}px`,
    "background-image": `url(${props.src})`,
  };
  return values;
});
</script>

<template>
  <div
    :style="styles"
    :class="classnames"
    v-text="src ? '' : initial"
    @click="onClick"
  ></div>
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
