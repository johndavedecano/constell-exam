<script lang="ts" setup>
import type { SelectOption } from "~/types/index";

import PhoneInput from "~/components/PhoneInput.vue";
import AvatarInput from "./AvatarInput.vue";

const router = useRouter();

const props = defineProps(["user", "disabled"]);

const emit = defineEmits(["submit"]);

const optionCountries: SelectOption[] = countries.map((v) => ({
  label: v.country,
  value: v.iso,
}));

const userForm = ref();

const phone = createInput(PhoneInput);
const image = createInput(AvatarInput);

const submitForm = (fields = {}) => emit("submit", fields);

const validateForm = () => {
  // retrieve the core node (several ways to do this):
  const node = userForm.value.node;
  // submit the form!
  node.submit();
};
</script>

<template>
  <FormKit
    type="form"
    ref="userForm"
    :actions="false"
    @submit="submitForm"
    :disabled="props.disabled"
  >
    <div class="user-detail">
      <div class="user-detail__avatar">
        <FormKit name="image" :type="image" :value="props.user?.image" />
      </div>
      <div class="user-detail__form">
        <div class="form-col">
          <FormKit
            label="Your name *"
            name="fullName"
            type="text"
            validation="required"
            :value="props.user?.fullName"
          />
          <FormKit
            label="Initials"
            name="initials"
            type="text"
            validation="required"
            :value="props.user?.initials"
          />
        </div>
        <div class="form-col">
          <FormKit
            name="displayName"
            label="Display name"
            type="text"
            validation="required"
            :value="props.user?.displayName"
          />
        </div>
        <div class="form-col">
          <FormKit
            name="functionName"
            label="Role"
            type="text"
            validation="required"
            :value="props.user?.functionName"
          />
        </div>
        <div class="user-detail__email-col">
          <FormKit
            name="email"
            label="Email"
            type="email"
            validation="required|email"
            :value="props.user?.email"
          />
          <FormKit
            :type="phone"
            label="Phone"
            name="phone"
            validation="required"
            :value="{
              phoneNumber: props.user?.phoneNumber,
              phoneCountryPrefix: props.user?.phoneCountryPrefix,
            }"
          />
        </div>
        <div class="form-col--stacked">
          <FormKit
            label="Street"
            type="text"
            name="addressLineOne"
            outer-class="$reset form-outer--margin-sm"
            :value="props.user?.address?.addressLineOne"
          />
          <FormKit
            type="text"
            name="addressLineTwo"
            :value="props.user?.address?.addressLineTwo"
          />
        </div>
        <div class="form-col">
          <FormKit
            label="City"
            type="text"
            name="city"
            :value="props.user?.address?.city"
          />
          <FormKit
            label="Post code"
            type="text"
            name="postalCode"
            :value="props.user?.address?.postalCode"
          />
        </div>
        <div class="form-col">
          <FormKit
            label="State"
            type="text"
            name="state"
            :value="props.user?.address?.state"
          />
          <FormKit
            label="Country"
            type="select"
            name="country"
            :value="props.user?.address?.country"
            :options="optionCountries"
          />
        </div>

        <div class="user-detail__form-actions">
          <div class="user-detail__form-actions-spacer"></div>
          <div class="user-detail__form-actions-col">
            <FormKit
              type="button"
              label="Cancel"
              input-class="$reset btn btn__cancel"
              outer-class="$reset btn-outer"
              @click.prevent="$router.replace('/contacts')"
            />
          </div>
          <div class="user-detail__form-actions-col">
            <FormKit
              type="button"
              label="Submit"
              input-class="$reset btn btn__submit"
              outer-class="$reset btn-outer"
              @click="validateForm"
            />
          </div>
        </div>
      </div>
    </div>
  </FormKit>
</template>

<style lang="scss" scoped>
.user-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 32px;
  padding-bottom: 72px;

  @include respond-to(lg) {
    flex-direction: row;
    gap: 32px;
  }
  &__form-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    height: 72px;
    padding-left: 16px;
    padding-right: 16px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: $bg-body;
    border-top: solid 1px $border;

    @include respond-to(xl) {
      border: none;
      max-width: 1200px;
      margin: auto;
      justify-content: flex-end;
    }

    &-spacer {
      display: none;
      flex: 1;
      @include respond-to(xl) {
        display: block;
      }
    }

    &-col {
      flex: 1;
      display: flex;
      align-items: center;
      @include respond-to(xl) {
        flex: none;
        width: 217px;
      }
    }

    @include respond-to(lg) {
      left: 56px;
      height: 124px;
      padding-left: 32px;
      padding-right: 32px;
    }
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
  &__email-col {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include respond-to(lg) {
      flex-direction: row;
    }
  }
}
</style>
