<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: $bg-body;

  @include respond-to(lg) {
    flex-direction: row;
  }
}
</style>
