<template>
  <div class="filter">
    <form class="filter__form" ref="filter-form" @submit.prevent="applyFilter">
      <div class="filter__wrapper">
        <div class="filter__container">
          <p class="filter__title">Комнат:</p>
          <div class="filter-rooms">
            <UiCheckbox
              v-for="(item, i) in room"
              :key="`room${i}`"
              name="rooms[]"
              :value="item.val"
              :title="item.val"
              className="filter-rooms__item"
              @change="setRoomFilter"
              :checked="item.checkState"
            >
            </UiCheckbox>
          </div>
        </div>
        <div class="filter__container" v-if="area">
          <p class="filter__title">Площадь квартиры, м²:</p>
          <div class="filter-area">
            <UiRangeInput
              :min="Number(area.min)"
              :max="Number(area.max)"
              :val="area.val"
              @change="setAreaFilter"
            >
            </UiRangeInput>
          </div>
        </div>
        <div class="filter__container" v-if="stage">
          <p class="filter__title">Этаж:</p>
          <div class="filter-stage">
            <UiRangeInput
            :min="Number(stage.min)"
            :max="Number(stage.max)"
            :val="stage.val"
            @change="setStageFilter"
            :marks-title-min="Number(stage.min)"
            :marks-title-max="Number(stage.max)"
            >
            </UiRangeInput>
          </div>
        </div>
        <!-- <div class="filter__container" v-if="price">
          <p class="filter__title">Цена, р.:</p>
          <div class="filter-price">
            <UiRangeInput
              :min="Number(price.min)"
              :max="Number(price.max)"
              :val="price.val"
              @change="setPriceFilter"
              tooltip="none"
            >
            </UiRangeInput>
            <InputPrice
              :min="Number(price.min)"
              :max="Number(price.max)"
              :val="price.val"
              @change="setPriceFilter"
            >
            </InputPrice>
          </div>
        </div> -->
      </div>
      <div class="filter__btns">
        <UiButton type="submit">Применить</UiButton>
        <UiButton type="button" :gray="true" @click="resetFilters">Сбросить</UiButton>
      </div>
    </form>
  </div>
</template>

<script>
import { UiCheckbox, UiRangeInput, UiButton } from "@/components/UI/index.js";
import { mapState, mapMutations, mapActions } from 'vuex';
import InputPrice from "@/components/InputPrice.vue";

export default {
  computed: {
    ...mapState({
      room: state => state.filters.room,
      stage: state => state.filters.stage,
      area: state => state.filters.area,
      price: state => state.filters.price
    })
  },
  methods: {
    ...mapMutations([
      'setRoomFilter',
      'setStageFilter',
      'setAreaFilter',
      'setPriceFilter',
      'setFlatLoaderState'
    ]),
    ...mapActions([
      'getFilters',
      'resetFilters',
      'applyFilter',
      'getFlats'
    ]),
    applyFilter: function() {
      this.setFlatLoaderState(true);
      this.getFlats().finally( () => {
        this.setFlatLoaderState(false);
        const page = this.$route.params.page;
        if(page && page != 1) {
          this.$router.push({ name: 'index', params: { page: 1 } })
        }
      })
    }
  },
  components: {
    UiCheckbox,
    UiRangeInput,
    InputPrice,
    UiButton
  },
  beforeMount () {
    this.getFilters();
  }
}
</script>

<style lang="scss">
.filter {
  padding: 20px 0;
  border-bottom: 1px solid $greenLight;
  margin-bottom: 10px;
  &__form{
    display: flex;
    flex-wrap: wrap;
  }
  &__title {
    margin: 0;
    font-weight: 700;
    color: $gray;
    margin-bottom: 7px;
    font-size: 16px;
  }
  &__container {
    margin: 10px 0;
    margin-right: 40px;
    // min-height: 90px;
  }
  &__btns{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    .btn {
      margin: 20px 0 0;
      margin-right: 20px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  &__wrapper{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}
.filter-rooms {
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
  &__item {
    margin: 0 5px;
  }
}
.filter-price {
  display: flex;
  .input-price {
    margin-left: 10px;
  }
}

@media (max-width: 600px) {
  .filter{
    &__container{
      margin: 0 auto 30px;
    }
    &__btns{
      justify-content: center;
      .btn {
        margin: 0;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
