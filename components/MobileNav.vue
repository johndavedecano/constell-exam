<template>
  <div class="mobile-nav animate__animated animate__slideInUp">
    <div class="mobile-nav__inner">
      <a href="#" class="mobile-nav__btn">
        <EventsIconBig />
      </a>
      <div class="mobile-nav__bar">
        <a href="" class="mobile-nav__item"> <TodayIcon /></a>
        <a href="" class="mobile-nav__item"><ContactsIcon /></a>
        <div class="mobile-nav__spacer"></div>
        <a href="" class="mobile-nav__item"> <FinanceIcon /></a>
        <a href="" class="mobile-nav__item"> <Icon name="home" /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-nav {
  display: flex;
  width: 100%;
  height: 82px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  @include respond-to(lg) {
    display: none;
  }

  &__item {
    height: 58px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover,
    .active {
      background-color: $border;
    }
  }

  &__spacer {
    height: 58px;
    width: 64px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: solid 1px $color-primary;
    background-color: $color-gray-border;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover,
    .active {
      background-color: $border;
    }
  }

  &__inner {
    flex: 1;
    width: 100%;
    height: 82px;
    position: relative;
    display: flex;
    align-items: flex-end;
  }

  &__bar {
    flex: 1;
    width: 100%;
    height: 58px;
    border-top: solid 1px $color-primary;
    background-color: $color-gray-light;
    display: flex;
    gap: 9.5px;
  }
}
</style>
