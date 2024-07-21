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

const title = usePageTitle();
</script>

<template>
  <header class="header">
    <BackButton v-if="length > 2" />
    <Spacer />
    <div v-if="title !== undefined" class="header__title">
      {{ title }}
    </div>
    <Brand v-else />
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

  &__title {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white;
    font-family: "Cormorant Infant", serif;

    font-size: 26.78px;
    font-weight: 600;
  }

  @include respond-to(lg) {
    min-height: 60px;
  }
}
</style>
