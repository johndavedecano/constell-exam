<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

import Icon from "./Icon.vue";

type NewActionElement = "a" | "button";

interface NewActionProps {
  label?: string;
  element?: NewActionElement;
}

const {
  label = "Add New",
  element = "a",
  ...restProps
} = defineProps<NewActionProps>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => emit("click");
</script>

<template>
  <div class="action-wrapper">
    <component
      :is="element || 'a'"
      class="action-btn"
      @click="onClick"
      v-bind="restProps"
      :aria-label="label"
    >
      <Icon name="add" /> <span>{{ label }}</span>
    </component>
  </div>
</template>

<style lang="scss" scoped>
.action-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 40px;

  @include respond-to(lg) {
    justify-content: flex-start;
  }
}
.action-btn {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  gap: 7.5px;

  font-weight: 500;
  text-align: center;
  font-size: 12px;
}
</style>
