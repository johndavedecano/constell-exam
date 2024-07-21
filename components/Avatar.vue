<script lang="ts" setup>
import { computed } from "vue";

interface AvatarProps {
  src?: string;
  initial: string;
  color?: string;
  size?: number;
  customClass?: string;
}

const base: number = 24;

const props = defineProps<AvatarProps>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");

const classnames = reactive({
  avatar: true,
  ...(props.customClass ? { [props.customClass]: true } : {}),
});

const size = computed(() => `${props.size || base}px`);

const styles = computed(() => {
  const values: { "background-image"?: string; "background-color"?: string } =
    {};

  if (props.src) {
    values["background-image"] = `url(${props.src})`;
  }

  if (props.color) {
    values["background-color"] = props.color;
  }

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
  min-width: v-bind(size);
  min-height: v-bind(size);
  max-width: v-bind(size);
  max-height: v-bind(size);
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
