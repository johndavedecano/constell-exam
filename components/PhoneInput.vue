<script lang="ts" setup>
import type { Country } from "~/types";

import parsePhoneNumber from "libphonenumber-js";

const props = defineProps({
  context: Object,
});

const countryCode = ref();

const phoneNumber = ref();

const countryList: Country[] = countries;

const onInput = () => {
  const value = `+${countryCode.value.value}${phoneNumber.value.value}`;
  // const parsed = parsePhoneNumber(value);
  props.context?.node.input(value);
};

watch(
  () => props.context?.value,
  (nextValue) => {
    const parsed = parsePhoneNumber(nextValue);
    if (parsed) {
      console.log(parsed);
    }
  }
);
</script>

<template>
  <div class="phone-input">
    <select class="phone-input__select" ref="countryCode">
      <option
        v-for="country in countryList"
        :key="country.code"
        :value="country.code"
        v-text="`+${country.code}`"
        @input="onInput"
      ></option>
    </select>
    <input
      ref="phoneNumber"
      type="text"
      class="phone-input__input"
      name="phone_number"
      @input="onInput"
    />
  </div>
</template>

<style lang="scss" scoped>
.phone-input {
  display: flex;
  align-items: center;

  &__select {
    width: 100px;
    padding: 16px;
    border: solid 1px $border;
    border-radius: $border-radius-sm;
    text-align: center;
    font-size: 12.77px;
    appearance: none;
    background-color: $bg-body;
    z-index: 1;
    transition: all 200ms ease-in-out;

    &:focus {
      background-color: $color-white;
    }

    &::-ms-expand {
      display: none;
    }
  }

  &__input {
    flex: 1;
    padding: 16px;
    border: solid 1px $border;
    border-radius: $border-radius-sm;
    font-size: 12.77px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-left: -8px;
    background-color: $bg-body;
    transition: all 200ms ease-in-out;

    &:focus {
      background-color: $color-white;
    }
  }
}
</style>
