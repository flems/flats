<template lang="html">
  <button
    :class="[
      className,
      btnSize,
      arrowPosition,
      { 'btn_shadow' : shadow },
      { 'btn_pink' : pink },
      { 'btn_gray' : gray },
      'btn'
    ]"
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
    <svg class="btn__icon" v-if="arrow != ''"><use xlink:href="#arrow-right"></use></svg>
  </button>
</template>

<script>
import Arrow from '@/assets/img/svg/arrow-right.svg'

export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    arrow: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: false
    },
    pink: {
      type: Boolean,
      default: false
    },
    gray: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    btnSize () {
      if(this.size != '') {
        return 'btn_size_' + this.size
      }
    },
    arrowPosition () {
      if (this.arrow != '') {
        return 'btn_arrow_' + this.arrow
      }
    }
  }
}
</script>

<style lang="scss">
  .btn{
    background: $green;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 30px;
    outline: none;
    cursor: pointer;
    min-height: 40px;
    min-width: 150px;
    text-transform: uppercase;
    transition: background 0.1s linear;
    line-height: 1.2;
    position: relative;
    span {
      color: inherit;
      font-size: inherit;
    }
    &:not(.btn_shadow){
      &:hover{
        background: $pink;
      }
    }
    &_shadow{
      padding: 15px 30px;
      line-height: 1.5;
      box-shadow: 7px 7px 0 rgba(189, 193, 65, 0.5);
    }
    &_pink{
      background: $pink;
      &.btn_shadow{
        box-shadow: 7px 7px 0 rgba(191,63,124,.5);
      }
    }
    &_gray{
      background: $greenLight;
      color: $grayLight;
      &:not(.btn_shadow):hover {
        background: #dcded1;
      }
    }
    &_size{
      &_small{
        font-size: 12px;
        letter-spacing: 0.3px;
        padding: 12px 16px;
        line-height: 1;
        min-height: auto;
      }
    }
    &_arrow{
      &_right{
        padding-right: 28px;
        .btn__icon {
          right: 10px;
        }
      }
      &_left{
        padding-left: 28px;
        .btn__icon {
          left: 10px;
          transform: translateY(-50%) scale(-1, 1);
        }
      }
    }
    &__icon {
      width: 12px;
      height: 12px;
      fill: #fff;
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
    }
  }
</style>
