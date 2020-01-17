<template>
  <div class="input-price">
    <div class="input-price__container">
      <vue-numeric
        separator="space"
        v-model="value[0]"
        class="input-price__val"
      >
      </vue-numeric>
      <span>-</span>
      <vue-numeric
        separator="space"
        v-model="value[1]"
        class="input-price__val"
      >
      </vue-numeric>
    </div>
  </div>
</template>

<script>
import 'vue-slider-component/theme/default.css'

import Vue from 'vue'
import VueNumeric from 'vue-numeric'

export default {
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    val: {
      type: undefined
    }
  },
  computed: {
    value: {
      get () {
        return this.val
      },
      set (val) {
        this.$emit('change', val);
      }
    }
  },
  components: {
    VueNumeric
  }
}
</script>

<style lang="scss">
.input-price {
  display: flex;
  align-items: center;
  &__container{
    display: flex;
    align-items: center;
  }
  &__val {
    background: $greenLight;
    line-height: 40px;
    width: 90px;
    height: 40px;
    border: none;
    color: $gray;
    margin: 0 5px;
    text-align: center;
    font-weight: 600;
    outline: none;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
