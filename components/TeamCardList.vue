<template>
  <div class="team-card-list animate__animated animate__fadeInDown">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.team-card-list {
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  padding-left: 16px;
  padding-right: 16px;

  @include respond-to(lg) {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
