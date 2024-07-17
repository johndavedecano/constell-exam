<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;

  @include respond-to(lg) {
    padding: 20px;
  }
}
</style>
