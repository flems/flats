<template>
  <div class="range-input">
    <div class="range-input__slider">
      <vue-slider v-model="value" v-bind="dataSlider"></vue-slider>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

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
    },
    tooltip: {
      type: String,
      default: "always"
    },
    marksTitleMin: {
      type: [String, Number],
      default: ""
    },
    marksTitleMax: {
      type: [String, Number],
      default: ""
    }
  },
  data () {
    return {
      dataSlider: {
        min: this.min,
        max: this.max,
        contained: true,
        tooltip: this.tooltip,
        width: 250,
        marks: {
          [this.min]: this.marksTitleMin,
          [this.max]: this.marksTitleMax
        }
      }
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
    VueSlider
  }
}
</script>

<style lang="scss">
.range-input {
  display: flex;
  align-items: center;
  padding: 0 14px;
  &__container{
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  &__slider {
    width: 100%;
    .vue-slider{
      height: 50px !important;
      display: flex;
      align-items: center;
    }
    .vue-slider-rail{
      height: 4px;
    }
    .vue-slider-process{
      height: 4px;
      background: $pink;
    }
    .vue-slider-mark-label {
      background: #ccc;
      color: #fff;
      top: 0;
      margin: 0;
      transform: translateY(-50%) translateX(-50%);
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-weight: 600;
      font-size: 16px;
      border-radius: 50%;
      top: 0 !important;
      margin: 0 !important;
      transform: translateX(-50%) translateY(-50%) !important;
    }
    .vue-slider-dot-tooltip {
      top: 0;
      transform: translateY(0%) translateX(-50%);
      background: none;
      background: $pink;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      margin: 0;
      padding: 0;
      border-radius: 50%;
      cursor: pointer;
    }
    .vue-slider-dot-tooltip-inner {
      background: none;
      width: 40px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      &:after{
        display: none;
      }
    }
    .vue-slider-dot-tooltip-text {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
    }
    .vue-slider-dot {
      top: 0 !important;
      -webkit-transform: translateY(-50%) translateX(-50%);
      transform: translateY(-50%) translateX(-50%);
      background: none;
      background: $pink;
      width: 40px !important;
      height: 40px !important;
      text-align: center;
      line-height: 40px;
      margin: 0;
      padding: 0;
      border-radius: 50%;
      cursor: pointer;
    }
    .vue-slider-dot-handle {
      box-shadow: none;
      background: none;
    }
  }
  &__val {
    background: $greenLight;
    line-height: 40px;
    width: 40px;
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
