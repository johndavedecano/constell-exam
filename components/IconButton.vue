<script lang="ts" setup>
import { computed } from "vue";

type IconElement = "a" | "button";

type IconTheme = "primary" | "secondary" | "transparent";

interface IconProps {
  name: string;
  size: number;
  element?: IconElement;
  aria_label?: string;
  href?: string;
  title?: string;
  label?: string;
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
  label = "",
} = defineProps<IconProps>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");

const btnsize = computed(() => `${size}px`);

const classnames = reactive({
  "icon-btn": true,
  "icon-btn-primary": theme === "primary",
  "icon-btn-secondary": theme === "secondary",
  "icon-btn-transparent": theme === "transparent",
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
    <Icon :name="name" />
    <span class="icon-btn__label" v-if="label">{{ label }}</span>
  </component>
</template>

<style lang="scss" scoped>
.icon-btn {
  width: v-bind(btnsize);
  height: v-bind(btnsize);
  min-width: v-bind(btnsize);
  min-height: v-bind(btnsize);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: auto;
  font-size: 120%;

  &-primary {
    background-color: $color-primary;
    color: $color-white;
  }

  &-secondary {
    background-color: $color-secondary;
    color: $color-white;
  }

  &-transparent {
    background-color: transparent;
    color: $color-primary;
  }

  &__label {
    display: none;
    @include respond-to(lg) {
      display: inline;
    }
  }
}
</style>
