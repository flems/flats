<template>
  <label :class="[className, 'checkbox']">
    <input class="checkbox__input" type="checkbox" :name="name" :value="value" :checked="checked" @change="$emit('change', $event.target)">
    <div class="checkbox__icon">
      <span>{{ title }}</span>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: [Number, String],
      default: ""
    },
    value: {
      type: undefined,
      default: ""
    },
    title: {
      type: [Number, String],
      default: ""
    },
    className: {
      type: String,
      default: ''
    },
    checked: Boolean,
    default: false
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  &__icon {
    width: 40px;
    height: 40px;
    background: $greenLight;
    color: $gray;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.1s linear;
    cursor: pointer;
    span {
      color: inherit;
      font-size: inherit;
      margin-top: 3px;
    }
  }
  &__input{
    display: none;
    &:checked + .checkbox__icon {
      background: $pink;
      color: #fff;
    }
  }
}
</style>
