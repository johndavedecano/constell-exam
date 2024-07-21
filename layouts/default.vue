<script lang="ts" setup>
import { ModalsContainer } from "vue-final-modal";

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
      <ModalsContainer />
    </ClientOnly>
  </Wrapper>
</template>
