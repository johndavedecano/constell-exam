<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

const props = defineProps(["customClass"]);

const customClass = computed(() => `modal__content ${props.customClass}`);
</script>

<template>
  <VueFinalModal class="modal" :content-class="customClass">
    <slot />
  </VueFinalModal>
</template>

<style lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    border: solid 1px $border;
    padding: 16px;
    border-radius: $border-radius;
    margin: 20px;
    width: 700px;
    max-width: 100%;
  }
}
</style>
