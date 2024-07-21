<script lang="ts" setup>
useMobileNav(false);

usePageTitle("Edit User");

useHead({
  title: "Constell - Edit User",
});
</script>

<template>
  <Container>
    <div class="page-section">
      <UserForm />
    </div>
  </Container>
</template>
