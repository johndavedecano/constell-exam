<script setup lang="ts">
const router = useRouter();

const route = useBackRoute();
</script>

<template>
  <a
    class="back-btn"
    href="#"
    @click.prevent="$router.push(route)"
    v-if="route"
  >
    <Icon name="chevron_backward" :size="40" />
    <span class="back-btn__label"> Back </span>
  </a>
</template>

<style lang="scss" scoped>
.back-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 40px;
  padding-left: 10px;
  font-size: 24px;
  color: $color-white;
  &__label {
    display: none;
    font-size: 12.68px;
    font-weight: 500;
    line-height: 0px;

    @include respond-to(lg) {
      display: inline;
    }
  }
}
</style>
