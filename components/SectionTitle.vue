<script lang="ts" setup>
import { defineProps } from "vue";

interface SectionTitleProps {
  title?: string;
}

const { title } = defineProps<SectionTitleProps>();
</script>

<template>
  <div class="section-title" v-text="title"></div>
</template>

<style lang="scss" scoped>
.section-title {
  font-size: 9.85px;
  font-weight: 300;
  line-height: 14.78px;
  letter-spacing: 0.5px;
  text-align: left;
  text-transform: uppercase;
}
</style>
