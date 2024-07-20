<script lang="ts" setup>
import type { SelectOption } from "~/types";

import PhoneInput from "~/components/PhoneInput.vue";

useHead({
  title: "Constell - Contact Editor",
});

const optionCountries: SelectOption[] = countries.map((v) => ({
  label: v.country,
  value: v.iso,
}));
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
        <FormKit type="form" form-class="user-detail__form" :actions="false">
          <div class="form-col">
            <FormKit label="Your name *" type="text" />
            <FormKit label="Initials" type="text" />
          </div>
          <div class="form-col">
            <FormKit label="Display name" type="text" />
          </div>
          <div class="form-col">
            <FormKit label="Role" type="text" />
          </div>
          <div class="user-detail__email-col">
            <FormKit label="Email" type="email" />
            <div class="form-outer">
              <div class="form-group">
                <label for="" class="form-label">Phone number</label>
                <PhoneInput />
              </div>
            </div>
          </div>
          <div class="form-col--stacked">
            <FormKit
              label="Street"
              type="text"
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
            <div class="user-detail__form-actions-col">
              <FormKit
                type="button"
                label="Cancel"
                input-class="$reset btn btn__cancel"
                outer-class="$reset btn-outer"
              />
            </div>
            <div class="user-detail__form-actions-col">
              <FormKit
                type="button"
                label="Submit"
                input-class="$reset btn btn__submit"
                outer-class="$reset btn-outer"
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

    &-col {
      flex: 1;
      display: flex;
      align-items: center;
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
