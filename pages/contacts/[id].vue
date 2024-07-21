<script lang="ts" setup>
import type { SelectOption } from "~/types/index";

import PhoneInput from "~/components/PhoneInput.vue";

useMobileNav(false);

usePageTitle("Edit user");

const router = useRouter();

useHead({
  title: "Constell - Contact Editor",
});

const optionCountries: SelectOption[] = countries.map((v) => ({
  label: v.country,
  value: v.iso,
}));

const userForm = ref();

const phone = createInput(PhoneInput);

const submitForm = () => {
  // retrieve the core node (several ways to do this):
  const node = userForm.value.node;
  // submit the form!
  node.submit();
};
</script>

<template>
  <Container>
    <div class="page-section">
      <div class="user-detail">
        <div class="user-detail__avatar">
          <AvatarInput />
        </div>
        <FormKit
          type="form"
          ref="userForm"
          form-class="user-detail__form"
          :actions="false"
        >
          <div class="form-col">
            <FormKit
              label="Your name *"
              name="name"
              type="text"
              validation="required"
            />
            <FormKit
              label="Initials"
              name="initials"
              type="text"
              validation="required"
            />
          </div>
          <div class="form-col">
            <FormKit name="display_name" label="Display name" type="text" />
          </div>
          <div class="form-col">
            <FormKit name="role" label="Role" type="text" />
          </div>
          <div class="user-detail__email-col">
            <FormKit
              name="email"
              label="Email"
              type="email"
              validation="required|email"
            />
            <FormKit
              :type="phone"
              label="Phone"
              name="phone"
              validation="required"
            />
          </div>
          <div class="form-col--stacked">
            <FormKit
              label="Street"
              type="text"
              name="street_1"
              outer-class="$reset form-outer--margin-sm"
            />
            <FormKit type="text" />
          </div>
          <div class="form-col">
            <FormKit label="City" type="text" />
            <FormKit label="Post code" type="text" />
          </div>
          <div class="form-col">
            <FormKit label="Country" type="select" :options="optionCountries" />
          </div>

          <div class="user-detail__form-actions">
            <div class="user-detail__form-actions-spacer"></div>
            <div class="user-detail__form-actions-col">
              <FormKit
                type="button"
                label="Cancel"
                input-class="$reset btn btn__cancel"
                outer-class="$reset btn-outer"
                @click.prevent="$router.back()"
              />
            </div>
            <div class="user-detail__form-actions-col">
              <FormKit
                type="button"
                label="Submit"
                input-class="$reset btn btn__submit"
                outer-class="$reset btn-outer"
                @click="submitForm"
              />
            </div>
          </div>
        </FormKit>
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
