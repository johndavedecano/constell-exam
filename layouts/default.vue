<template>
  <Wrapper>
    <SideNav />
    <PageWrapper>
      <Header />
      <Main>
        <slot />
      </Main>
    </PageWrapper>
    <MobileNav />
  </Wrapper>
</template>
