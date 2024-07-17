<script lang="ts" setup>
import { defineProps } from "vue";

interface IconProps {
  name: string;
}

const { name } = defineProps<IconProps>();
</script>

<template>
  <span class="material-symbols-outlined icon" v-text="name"></span>
</template>

<style lang="scss">
.icon {
  font-size: inherit;
  color: inherit;
}
</style>
