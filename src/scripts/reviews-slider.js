import Vue from "vue";
import VueAwesomeSwiper from 'vue-awesome-swiper';

new Vue({
  el: '.reviews',
  components: {
    LocalSwiper: VueAwesomeSwiper.swiper,
    LocalSlide: VueAwesomeSwiper.swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },

})