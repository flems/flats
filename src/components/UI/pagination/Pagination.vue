<template lang="html">
  <div class="pagination" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in pages" :key="item">
        <router-link
          :class="[{ 'pagination__item_active' : item == currentPage }, 'pagination__item']"
          :to="{ name: 'index', params: { page: item }}"
        >
          <span>{{ item }}</span>
        </router-link>
      </swiper-slide>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <router-link :to="{ name: 'index', params: { page: prevPage }}" class="pagination__nav pagination__nav_prev">
      <svg class="svg-icon"><use xlink:href="#arrow-right"></use></svg>
    </router-link>
    <router-link :to="{ name: 'index', params: { page: nextPage }}" class="pagination__nav pagination__nav_next">
      <svg class="svg-icon"><use xlink:href="#arrow-right"></use></svg>
    </router-link>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Arrow from '@/assets/img/svg/arrow-right.svg'

export default {
  props: {
    count: {
      type: Number
    },
    currentPage: {
      type: Number
    },
    itemsCount: {
      type: Number
    }
  },
  data () {
    return {
      timerId: '',
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        resistanceRatio: 0,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    countPage () {
      return Math.ceil(this.itemsCount / this.count);
    },
    pages () {
      const pages = [];
      for (let i = 1; i <= this.countPage; i++) {
        pages.push(i)
      }
      return pages
    },
    prevPage () {
      const result = this.currentPage - 1 <= 0 ? 1 : this.currentPage - 1
      return result
    },
    nextPage () {
      const result = this.currentPage + 1 >= this.countPage ? this.countPage : this.currentPage + 1
      return result
    }
  },
  methods: {
    slideToCurrentPage () {
      const slideIndex = this.currentPage - 3;
      this.swiper.slideTo(slideIndex, 500, false)
    },
    onMouseEnter (e) {
      const _this = this;
      clearTimeout(_this.timerId);
    },
    onMouseLeave (e) {
      const _this = this;
      _this.timerId = setTimeout(function() {
        _this.slideToCurrentPage()
      }, 3000);
    }
  },
  mounted() {
    this.slideToCurrentPage()
  },
  watch: {
    currentPage (val) {
      this.slideToCurrentPage()
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
  $size: 35px;
  .pagination{
    max-width: calc(5 * #{$size});
    overflow: hidden;
    position: relative;
    padding-right: $size;
    padding-left: $size;
    box-sizing: content-box;
    padding-bottom: 5px;
    &__list{
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    &__item{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #c5c94e;
      color: #fff;
      transition: background 0.1s linear;
      cursor: pointer;
      text-decoration: none;
      &_active{
        background: $pink;
      }
      &:hover{
        background: $pink;
      }
      span {
        color: inherit;
      }
    }
    &__nav{
      width: $size;
      height: $size;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $green;
      cursor: pointer;
      transition: background 0.1s linear;
      outline: none;
      position: absolute;
      top: 0;
      &:hover{
        background: $pink;
      }
      svg{
        width: 15px;
        height: 15px;
        fill: #fff;
      }
      &_prev{
        left: 0;
        svg{
          transform: scale(-1, 1);
        }
      }
      &_next{
        right: 0;
      }
    }
    .swiper-slide{
      width: $size;
      height: $size;
    }
    .swiper-container{
      position: static;
    }
    .swiper-scrollbar{
      bottom: 0;
      border-radius: 0;
      width: 100%;
      left: 0;
      cursor: pointer;
    }
    .swiper-scrollbar-drag{
      background: $greenDark;
      border-radius: 0;
    }
  }
</style>
