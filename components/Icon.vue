<script lang="ts" setup>
import { defineProps } from "vue";

interface IconProps {
  name: string;
  color?: string;
}

const { name, color = "#282829" } = defineProps<IconProps>();
</script>

<template>
  <span class="material-symbols-outlined icon" v-text="name"></span>
</template>

<style lang="scss">
.icon {
  color: v-bind(color);
  font-size: inherit;
}
</style>
