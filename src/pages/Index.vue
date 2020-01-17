<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <FlatFilter></FlatFilter>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="flat-count">
          Найдено квартир: <span class="flat-count__number">{{ flatCount }}</span>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <List></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import FlatFilter from "@/components/Filter.vue";
import { mapState } from "vuex";
export default {
  name: 'index',
  computed: {
    ...mapState({
      flatCount: state => state.flats.flats['COUNT']
    })
  },
  components: {
    List,
    FlatFilter
  },
}
</script>

<style lang="scss">
.flat-count{
  text-align: center;
  margin: 0;
  padding: 20px 0;
  font-weight: 700;
  &__number {
    font-size: 24px;
    color: $pink;
  }
}
</style>
