<script lang="ts" setup></script>

<template>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.page-wrapper {
  display: flex;
  flex-grow: 1;
  position: relative;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow-y: auto;
}
</style>
