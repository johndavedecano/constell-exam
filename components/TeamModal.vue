<script setup lang="ts">
import { getNode } from "@formkit/core";

const teamForm = ref();

const props = defineProps(["_id", "name", "color", "abbreviation"]);

const emit = defineEmits(["close", "update", "create"]);

const validateForm = () => {
  // retrieve the core node (several ways to do this):
  const node = teamForm.value.node;
  // submit the form!
  node.submit();
};

const submitForm = (fields = {}) => {
  if (props._id) return emit("update", { ...fields, _id: props._id });
  emit("create", fields);
};
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
            id="name"
            name="name"
            type="text"
            validation="required"
            :value="props.name"
          />
        </div>
        <div class="form-col">
          <FormKit
            label="Color *"
            id="color"
            name="color"
            type="color"
            validation="required"
            :value="props.color"
          />
          <FormKit
            label="Abbreviation *"
            id="abbreviation"
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
.team-modal {
  min-height: 284px;
}
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
