<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;

  @include respond-to(lg) {
    flex-direction: row;
  }
}
</style>
