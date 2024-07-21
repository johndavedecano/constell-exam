<script lang="ts" setup>
const props = defineProps({
  context: Object,
});

const src = ref();

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = (target.files || [])[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      src.value = String(reader.result);
      props.context?.node.input(src.value);
    };
    reader.readAsDataURL(file);
  }
};

onMounted(() => {
  if (props.context?.value) {
    src.value = props.context?.value;
  }
});
</script>

<template>
  <div class="avatar-input">
    <Avatar :src="src" :size="72" color="primary" initial="JD" />
    <button class="avatar-input__btn">
      <input
        type="file"
        accept="image/x-png,image/jpeg"
        @change="onFileChange"
      />
      <Icon name="edit" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.avatar-input {
  display: flex;
  position: relative;
  height: 72px;
  width: 72px;
  margin: auto;

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
