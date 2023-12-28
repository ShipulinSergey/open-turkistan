<template>
  <div class="section__destination__slider">
    <div class="section__destination__slider__body">
      <swiper
        :slides-per-view="computedSlidesPerView"
        :space-between="10"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-slot="{ isActive }">
          <div
            class="section__destination__slider__content"
            :class="{ active: isActive }"
          >
            <img src="@/assets/destination/1.png" alt="" />

            <div class="section__destination__slider__content__bg">
              <p
                class="section__destination__slider__content__bg__title"
                v-if="isActive"
              >
                {{ $t("destination__slide__1") }}
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide v-slot="{ isActive }">
          <div
            class="section__destination__slider__content"
            :class="{ active: isActive }"
          >
            <img src="@/assets/destination/2.png" alt="" />
            <div class="section__destination__slider__content__bg">
              <p
                class="section__destination__slider__content__bg__title"
                v-if="isActive"
              >
                {{ $t("destination__slide__2") }}
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide v-slot="{ isActive }">
          <div
            class="section__destination__slider__content"
            :class="{ active: isActive }"
          >
            <img src="@/assets/destination/1.png" alt="" />

            <div class="section__destination__slider__content__bg">
              <p
                class="section__destination__slider__content__bg__title"
                v-if="isActive"
              >
                {{ $t("destination__slide__1") }}
              </p>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide> </swiper-slide>
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
      breakpoint: 768, // Adjust this breakpoint as needed
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
