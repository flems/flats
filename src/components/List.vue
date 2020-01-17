<template lang="html">
  <div class="flats">
    <div class="flats__list">
      <router-link
        :to="{ name: 'detail', params: { id: item['ID'] } }"
        class="flats__item flat"
        v-for="(item, key) in flats['ITEMS']"
        :key="key"
        v-if="flats['ITEMS']"
      >
        <div class="flat__header">
          <p class="flat__title">КВАРТИРА №{{ item['UF_NUMBER'] }}</p>
          <p class="flat__info">ПОДЪЕЗД {{ item['UF_PORCH'] }} / ЭТАЖ {{ item['UF_STAGE'] }}</p>
        </div>
        <div class="flat__content">
          <div class="flat__img"><img :src="domain + item['UF_TYPE']['IMG']" alt=""></div>
        </div>
        <div class="flat__footer">
          <div class="flat__container">
            <p class="flat__room">{{ item['UF_ROOM'] }}</p>
            <p class="flat__area">{{ item['UF_AREA'] }} м²</p>
          </div>
          <div class="flat__container">
            <p class="flat__price" v-if="item['UF_PRICE']">{{ item['UF_PRICE'] }}</p>
            <p class="flat__price flat__price_small" v-else>Цену уточняйте у менеджера</p>
          </div>
        </div>
        <UiButton class="flat__book">
          <span>Забронировать</span>
        </UiButton>
      </router-link>
      <UiLoader v-if="loader"></UiLoader>
    </div>
    <div class="flats__pagination" v-if="flats['COUNT'] > 0">
      <UiPagination
        :itemsCount="Number(flats['COUNT'])"
        :count="count"
        :currentPage="Number(page)"
        v-if="flats['COUNT']"
      >
      </UiPagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { UiButton, UiPagination, UiLoader } from '@/components/UI/index.js'

export default {
  computed: {
    ...mapState({
      flats: state => state.flats.flats,
      domain: state => state.options.domain,
      page: state => state.options.page,
      count: state => state.options.count,
      loader: state => state.flats.loader
    })
  },
  methods: {
    ...mapActions([
      'getFlats'
    ]),
    ...mapMutations([
      'setPage',
      'setFlatLoaderState'
    ]),
    checkPage () {
      let currentPage = this.$route.params.page;
      if(!currentPage) {
        currentPage = 1;
      }
      this.setPage(currentPage);
    },
    init () {
      this.checkPage();
      this.setFlatLoaderState(true);
      this.getFlats().finally( () => {
        this.setFlatLoaderState(false);
      })
    }
  },
  components: {
    UiButton,
    UiPagination,
    UiLoader
  },
  beforeMount () {
    this.init();
  },
  watch: {
    '$route' (to, from) {
      this.init();
    }
  }
}
</script>

<style lang="scss">
  .flats{
    &__list{
      min-height: 200px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-left: -10px;
      margin-right: -10px;
    }
    &__item{
      width: calc(25% - 20px);
      margin: 10px;
    }
    &__pagination{
      display: flex;
      justify-content: center;
      padding: 20px 0;
    }
  }
  .flat{
    display: block;
    text-decoration: none;
    background: $greenLight;
    border: 1px solid $greenLight;
    padding: 20px;
    padding-bottom: 40px;
    color: $gray;
    position: relative;
    transition: background 0.1s linear;
    &:hover{
      background: #fff;
    }
    &__title{
      color: $pink;
      font-weight: 700;
      text-align: center;
      margin: 0;
    }
    &__info{
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
    }
    &__img{
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    &__room{
      background: $green;
      color: #fff;
      width: 40px;
      height: 40px;
      text-align: center;
      font-weight: 700;
      padding-top: 5px;
      position: relative;
      &:after{
        content: 'комн';
        position: absolute;
        left: 0;
        bottom: 4px;
        width: 100%;
        font-size: 14px;
      }
    }
    &__footer{
      display: flex;
    }
    &__container{
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0 10px;
      &:after{
        content: '';
        width: 2px;
        height: 20px;
        background: $green;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:first-child{
        padding-left: 0;
      }
      &:last-child{
        padding-right: 0;
        &:after{
          display: none;
        }
      }
    }
    &__area{
      flex-grow: 1;
      text-align: center;
      margin-left: 5px;
    }
    &__price{
      line-height: 1.2;
      &_small{
        font-size: 0.8em;
      }
    }
    &__book{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media (max-width: 1200px) {
    .flats{
      &__item{
        width: calc(33.3% - 20px);
      }
    }
  }
  @media (max-width: 1000px) {
    .flats{
      &__item{
        width: calc(50% - 20px);
      }
    }
  }
  @media (max-width: 600px) {
    .flats{
      &__item{
        width: 100%;
      }
    }
  }
</style>
