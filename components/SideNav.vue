<template>
  <aside class="sidenav">
    <div class="sidenav__logo">
      <Logo />
    </div>
    <ul class="sidenav__menu">
      <li class="sidenav__menu__li">
        <a href="/">
          <TodayIcon />
        </a>
      </li>
      <li class="sidenav__menu__li">
        <a href="/">
          <EventsIcon />
        </a>
      </li>
      <li class="sidenav__menu__li">
        <a href="/">
          <ContactsIcon />
        </a>
      </li>
      <li class="sidenav__menu__li">
        <a href="/">
          <FinanceIcon />
        </a>
      </li>
      <li class="sidenav__menu__li">
        <a href="/">
          <Icon name="home" />
        </a>
      </li>
    </ul>
    <Spacer />
    <ul class="sidenav__menu">
      <li class="sidenav__menu__li">
        <a href="/">
          <SearchIcon />
        </a>
      </li>
      <li class="sidenav__menu__li">
        <a href="/">
          <HelpIcon />
        </a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  min-width: 56px;
  background-color: $bg-body;
  display: none;
  flex-direction: column;
  border-right: solid 1px $border;
  margin-left: -56px;
  overflow-y: auto;
  overflow-x: hidden;
  @include respond-to(lg) {
    display: flex;
    margin-left: 0px;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 73px;
  }

  &__menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    &__li a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 48px;
      transition: all ease-in-out 200ms;
      &:hover,
      .active {
        background-color: $border;
      }
    }
  }
}
</style>
