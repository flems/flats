<template>
  <div class="flatDetail" v-if="JSON.stringify(currentFlat) != '{}'">
    <div class="row">
      <div class="col-md-7">
        <div class="flatDetail__container">
          <div class="flatDetail__img">
            <img :src="domain + currentFlat['UF_TYPE']['IMG']" alt="">
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="flatDetail__container flatDetail__container_border_left">
          <h2 class="flatDetail__title">КВАРТИРА {{ currentFlat['UF_NUMBER'] }}</h2>
          <p class="flatDetail__description">
            ЭТАЖ {{ currentFlat['UF_STAGE'] }}  /  ПОДЪЕЗД {{ currentFlat['UF_PORCH'] }}
          </p>
          <ul class="flatDetail__list">
            <li class="flatDetail__item">
              <span class="flatDetail__prop">Количество комнат </span>
              <span class="flatDetail__val">{{ currentFlat['UF_ROOM'] }}</span>
            </li>
            <li class="flatDetail__item">
              <span class="flatDetail__prop">Общая площадь, м² </span>
              <span class="flatDetail__val">{{ currentFlat['UF_AREA'] }}</span>
            </li>
          </ul>
          <p class="flatDetail__price">6 881 000 ₽</p>
          <p class="flatDetail__price" v-if="currentFlat['UF_PRICE']">{{ currentFlat['UF_PRICE'] }} ₽</p>
          <UiButton
            :shadow="true"
            :pink="true"
          >
            <span>Рассчитать итоговую <br>стоимость квартиры</span>
          </UiButton>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link class="flatDetail__link" :to="{ name: 'index', params: { page: page } }">
          <UiButton size="small" arrow="left">
            <span>Назад к списку квартир</span>
          </UiButton>
        </router-link>
      </div>
    </div>
    <UiLoader v-if="loader"></UiLoader>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { UiLoader, UiButton } from '@/components/UI/index.js'

export default {
  data () {
    return {
      loader: false
    }
  },
  computed: {
    ...mapState({
      domain: state => state.options.domain,
      currentFlat: state => state.flats.currentFlat,
      page: state => state.options.page
    })
  },
  methods: {
    ...mapActions([
      'getFlatInfo'
    ]),
    setLoaderState (state) {
      this.loader = state
    }
  },
  beforeMount () {
    const flatId = this.$route.params.id;
    this.setLoaderState(true);
    this.getFlatInfo(flatId).finally(() => {
      this.setLoaderState(false);
    })
  },
  components: {
    UiLoader,
    UiButton
  }
}
</script>

<style lang="scss">
  .flatDetail{
    background: #fcfcfc;
    padding: 60px 0;
    color: $gray;
    &__img{
      img {
        max-width: 500px;
        max-height: 500px;
        display: block;
        margin: 0 auto;
      }
    }
    &__title{
      font-size: 25px;
      margin: 20px 0;
      color: #000;
    }
    &__description{
      font-weight: 700;
      font-size: 16px;
      margin: 20px 0;
    }
    &__list{
      list-style: none;
      margin: 20px 0;
      padding: 0;
    }
    &__item{
      margin-bottom: 10px;
      display: flex;
    }
    &__prop{
      min-width: 170px;
    }
    &__val{
      font-weight: 700;
    }
    &__price{
      font-size: 38px;
      margin: 30px 0;
    }
    &__container{
      &_border_left{
        padding-left: 50px;
        border-left: 2px solid #e7e8da;
      }
    }
    &__link{
      margin-top: 60px;
      display: block;
      text-decoration: none;
      text-align: center;
    }
    &__book {
      position: absolute;
    }
  }
</style>
