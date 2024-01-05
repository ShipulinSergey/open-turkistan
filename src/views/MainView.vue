<template>
  <MenuComponent />
  <div class="section__header wow fadeIn">
    <div class="section__header__content">
      <div class="section__header__row" v-animate-onscroll="'animated flip'">
        <div class="section__header__item">
          <iframe
            :src="videoUrl"
            width="100%"
            height="480px"
            frameborder="0"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            @ended="handleVideoEnded"
          ></iframe>
        </div>
        <div class="section__header__item">
          <h2 class="section__header__item__title section__title">
            Welcome to <span>Turkistan</span>
          </h2>
          <p class="section__header__item__subtitle section__subtitle">
            {{ $t("header__subtitle") }}
          </p>
          <div class="section__header__item__social">
            <a href=""><span class="mdi mdi-instagram"></span></a>
            <a href=""><span class="mdi mdi-facebook"></span></a>
            <a href=""><span class="mdi mdi-youtube"></span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section__destination">
    <div class="section__destination__content">
      <div class="section__row _container">
        <div class="section__destination__item">
          <h2 class="section__title">
            {{ $t("destination__title__1") }}
            <span>{{ $t("destination__title__2") }}</span>
          </h2>
          <p class="section__subtitle">
            {{ $t("destination__subtitle") }}
          </p>
        </div>
      </div>

      <DestinationSlider />
    </div>
  </div>

  <div class="section__hotel wow fadeIn">
    <div class="section__hotel__content">
      <div class="section__hotel__row">
        <div class="section__hotel__item">
          <HotelSlider />
        </div>
        <div class="section__hotel__item">
          <h2 class="section__hotel__item__title section__title" style="color: #FFF;">
            Гостиницы и места проживания
          </h2>
          <button class="section__hotel__item__action regular__btn">
            Все гостиницы
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="section__impression">
    <div class="section__impression__content">
      <div class="section__row _container">
        <div class="section__impression__item">
          <div class="section__title">
            {{ $t("impression__title__1") }}
            <span>{{ $t("impression__title__2") }}</span>
          </div>
          <div class="section__subtitle">
            {{ $t("impression__subtitle") }}
          </div>
        </div>
      </div>

      <ImpressionSlider />
    </div>
  </div>

  <div class="section__feedback">
    <div class="section__feedback__content _container">
      <div class="section__feedback__row section__row">
        <div class="section__feedback__item">
          <h2 class="section__title">
            {{ $t("feedback__title__1") }}
            <span>{{ $t("feedback__title__2") }}</span>
          </h2>
          <p class="section__subtitle">
            {{ $t("feedback__subtitle") }}
          </p>

          <form action="" class="section__feedback__item__form">
            <input type="text" class="section__feedback__item__form__input"
              :placeholder="$t('feedback__input__1')" />
            <input type="text" class="section__feedback__item__form__input"
              :placeholder="$t('feedback__input__2')" />
            <button type="submit" class="section__feedback__item__form__submit regular__btn">
              {{ $t("feedback__action") }}
            </button>
          </form>
        </div>

        <div class="section__feedback__item">
          <a href="" class="section__feedback__item__link">
            <img src="@/assets/feedback/1.png" alt="" />

            <div class="play__btn">
              <img src="@/assets/icons/play.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="section__gallery">
    <div class="section__gallery__content _container">
      <h2 class="section__gallery__title section__title">
        OpenTurkistan<span>tv</span>
      </h2>

      <div class="section__gallery__row section__row">
        <div class="section__gallery__item">
          <div class="section__gallery__item__single">
            <img src="@/assets/gallery/1.png" alt="" />

            <div class="play__btn">
              <img src="@/assets/icons/play.svg" alt="" />
            </div>
          </div>

          <div class="section__gallery__item__double">
            <img src="@/assets/gallery/2.png" alt="" />
            <img src="@/assets/gallery/3.png" alt="" />
          </div>
        </div>

        <div class="section__gallery__item">
          <div class="section__gallery__item__double">
            <img src="@/assets/gallery/4.png" alt="" />
            <img src="@/assets/gallery/5.png" alt="" />
          </div>
          <div class="section__gallery__item__single">
            <img src="@/assets/gallery/6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script>
import DestinationSlider from "@/components/sliders/DestinationSlider.vue";
import ImpressionSlider from "@/components/sliders/ImpressionSlider.vue";
import HotelSlider from "@/components/sliders/HotelSlider.vue";

import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    MenuComponent,
    DestinationSlider,
    ImpressionSlider,
    HotelSlider,
    FooterComponent,
  },
  data() {
    return {
      videoUrl: "https://www.youtube.com/embed/BhgCBgTn_RQ?autoplay=1&mute=1&controls=0",
    };
  },
  methods: {
    handleVideoEnded() {
      console.log('end');
      // Reset the video playback to the beginning and play again
      this.$refs.video.contentWindow.postMessage('{"event":"command","func":"seekTo","args":[0,"true"]}', '*');
      this.$refs.video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    },
  },
};
</script>

<style></style>
