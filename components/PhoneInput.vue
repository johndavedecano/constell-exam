<script lang="ts" setup>
import type { Country } from "~/types";

const countryList: Country[] = countries;

const countryCode = ref("31");

const partialNumber = ref();
</script>

<template>
  <div class="phone-input">
    <select class="phone-input__select" v-model="countryCode">
      <option
        v-for="country in countryList"
        :key="country.code"
        :value="country.code"
        v-text="`+${country.code}`"
      ></option>
    </select>
    <input
      type="text"
      v-model="partialNumber"
      class="phone-input__input"
      name="phone_number"
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
