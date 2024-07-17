<script setup lang="ts">
const length = ref();

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    length.value = window.history.length;
  }
);

onMounted(() => {
  length.value = window.history.length;
});
</script>

<template>
  <header class="header">
    <BackButton v-if="length > 2" />
    <Spacer />
    <Brand />
    <Spacer />
    <IconButton element="button" name="more_vert" :size="40" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  align-items: center;
  background-color: $color-primary;
  min-height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;

  @include respond-to(lg) {
    min-height: 60px;
  }
}
</style>
