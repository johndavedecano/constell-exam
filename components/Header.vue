<template>
  <header class="header">
    <BackButton />
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

  @include respond-to(lg) {
    min-height: 60px;
  }
}
</style>
