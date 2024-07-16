<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";

type IconElement = "a" | "button";

type IconTheme = "primary" | "secondary";

interface IconProps {
  name: string;
  size: number;
  element?: IconElement;
  aria_label?: string;
  href?: string;
  title?: string;
  theme?: IconTheme;
}

const {
  name,
  size = 40,
  element = "button",
  theme = "primary",
  aria_label = "",
  href = "",
  title = "",
} = defineProps<IconProps>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");

const iconsize = computed(() => `${size}px`);

const classnames = reactive({
  "icon-btn": true,
  "icon-btn-primary": theme === "primary",
  "icon-btn-secondary": theme === "secondary",
});
</script>

<template>
  <component
    :is="element"
    @click="onClick"
    :class="classnames"
    :href="href"
    :aria-label="aria_label"
    :title="title"
    tabindex="0"
  >
    <Icon :name="name" color="white" />
  </component>
</template>

<style lang="scss" scoped>
.icon-btn {
  width: v-bind(iconsize);
  height: v-bind(iconsize);
  min-width: v-bind(iconsize);
  min-height: v-bind(iconsize);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: auto;
  font-size: 150%;
  color: $color-white;
}

.icon-btn-primary {
  background-color: $color-primary;
}

.icon-btn-secondary {
  background-color: $color-secondary;
}
</style>
