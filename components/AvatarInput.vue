<template>
  <div class="avatar-input">
    <Avatar
      src="https://mighty.tools/mockmind-api/content/human/44.jpg"
      :size="72"
      color="primary"
      initial="JD"
    />
    <button class="avatar-input__btn">
      <input type="file" accept="image/x-png,image/jpeg" />
      <Icon name="edit" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.avatar-input {
  display: flex;
  position: relative;
  height: 72px;

  input[type="file"] {
    width: 30px;
    height: 30px;
    position: absolute;
    opacity: 0;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 1px $color-primary;
    position: absolute;
    background-color: $bg-body;
    right: -10px;
    bottom: 0;
  }
}
</style>
