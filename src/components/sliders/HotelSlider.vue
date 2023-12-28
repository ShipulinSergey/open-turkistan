<template>
  <div class="section__hotel__slider">
    <div class="section__hotel__slider__body">
      <swiper
        :slides-per-view="computedSlidesPerView"
        :space-between="20"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="section__hotel__slider__content">
            <img src="@/assets/hotel/1.png" alt="" />
            <div class="section__hotel__slider__content__bg">
              <div class="section__hotel__slider__content__bg__text">
                <p>Hampton by hilton</p>
                <span>{{ $t("hotel__price") }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="section__hotel__slider__content">
            <img src="@/assets/hotel/2.png" alt="" />
            <div class="section__hotel__slider__content__bg">
              <div class="section__hotel__slider__content__bg__text">
                <p>Rixos Turkistan</p>
                <span>{{ $t("hotel__price") }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="section__hotel__slider__content">
            <img src="@/assets/hotel/3.png" alt="" />
            <div class="section__hotel__slider__content__bg">
              <div class="section__hotel__slider__content__bg__text">
                <p>karavansaray</p>
                <span>{{ $t("hotel__price") }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div ref="prev" class="swiper-button-prev"></div>
    <div ref="next" class="swiper-button-next"></div>
  </div>
</template>
<script>
import SwiperCore, { Navigation, Pagination, A11y } from "swiper/core"; // Import from 'swiper/core' for Vue 3
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y]);
import { ref } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      breakpoint: 943, // Adjust this breakpoint as needed
    };
  },
  computed: {
    computedSlidesPerView() {
      return this.isMobile ? 1 : 2; // Adjust the number of slides for mobile and non-mobile
    },
    isMobile() {
      return window.innerWidth < this.breakpoint;
    },
  },
  methods: {
    onSlideChange() {
      // Slide change logic here
    },
    handleResize() {
      // Update the number of slides on window resize
      this.$forceUpdate();
      location.reload();
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>
