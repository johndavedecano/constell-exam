<script setup lang="ts">
const teamForm = ref();

const props = { id: "", name: "", abbreviation: "", color: "" };

const emit = defineEmits(["close", "submit"]);

const validateForm = () => {
  // retrieve the core node (several ways to do this):
  const node = teamForm.value.node;
  // submit the form!
  node.submit();
};

const submitForm = (fields = {}) => emit("submit", { ...fields, id: props.id });
</script>

<template>
  <Modal>
    <div class="team-modal">
      <div class="title">Manage Team</div>
      <FormKit
        type="form"
        ref="teamForm"
        form-class="team-form"
        @submit="submitForm"
        :actions="false"
      >
        <div class="form-col">
          <FormKit
            label="Name *"
            name="name"
            type="text"
            validation="required"
            :value="props.name"
          />
        </div>
        <div class="form-col">
          <FormKit
            label="Color *"
            name="color"
            type="color"
            validation="required"
            :value="props.color"
          />
          <FormKit
            label="Abbreviation *"
            name="abbreviation"
            type="text"
            validation="required"
            :value="props.abbreviation"
          />
        </div>
        <div class="form-col">
          <FormKit
            type="button"
            label="Cancel"
            input-class="$reset btn btn__cancel"
            outer-class="$reset btn-outer"
            @click.prevent="$emit('close')"
          />
          <FormKit
            type="button"
            label="Submit"
            input-class="$reset btn btn__submit"
            outer-class="$reset btn-outer"
            @click="validateForm"
          />
        </div>
      </FormKit>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.title {
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-primary;
  font-family: "Cormorant Infant", serif;
  font-size: 26.78px;
  font-weight: 600;
}
</style>
