<script lang="ts" setup>
useHead({
  title: "Constell - Contact Editor",
});
</script>

<template>
  <Container>
    <div class="page-section">
      <div class="user-detail">
        <div class="user-detail__avatar">
          <Avatar
            src="https://mighty.tools/mockmind-api/content/human/44.jpg"
            :size="72"
            color="primary"
            initial="JD"
          />
        </div>
        <form action="" class="user-detail__form">
          <div class="form-col">
            <div class="form-group">
              <label for="">Full name *</label>
              <input type="text" size="1" class="form-control" />
            </div>
            <div class="form-group">
              <label for="">Initials</label>
              <input type="text" size="1" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label for="">Display name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Role</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" />
          </div>
        </form>
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.user-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 32px;
  @include respond-to(lg) {
    flex-direction: row;
    gap: 32px;
  }
  &__avatar {
    display: flex;
    justify-content: center;
  }
  &__form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
