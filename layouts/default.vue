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
      <!-- <MobileNav /> -->
    </ClientOnly>
  </Wrapper>
</template>
