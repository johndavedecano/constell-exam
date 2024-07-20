<script lang="ts" setup>
const mobileNav = useMobileNav();
</script>

<template>
  <Wrapper>
    <ClientOnly>
      <SideNav />
      <PageWrapper>
        <Header />
        <Main>
          <slot />
        </Main>
      </PageWrapper>
      <MobileNav v-if="mobileNav" />
    </ClientOnly>
  </Wrapper>
</template>
