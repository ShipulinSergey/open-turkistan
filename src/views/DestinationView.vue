<template>
  <MenuComponent />
  <div class="destination _container">
    <div class="destination__title">{{ $t("destination__title") }}</div>
    <div class="destination__body">{{ $t("destination__body") }}</div>
    <div class="destination__grid">
      <router-link to="destination/1" class="destination__grid__item">
        <img src="@\assets\destination\p1.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/2" class="destination__grid__item">
        <img src="@\assets\destination\p2.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/3" class="destination__grid__item">
        <img src="@\assets\destination\p3.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/4" class="destination__grid__item">
        <img src="@\assets\destination\p4.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/5" class="destination__grid__item">
        <img src="@\assets\destination\p5.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/6" class="destination__grid__item">
        <img src="@\assets\destination\p6.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/7" class="destination__grid__item">
        <img src="@\assets\destination\p7.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/8" class="destination__grid__item">
        <img src="@\assets\destination\p8.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>
      <router-link to="destination/9" class="destination__grid__item">
        <img src="@\assets\destination\p9.png" alt="">
        <div class="destination__grid__item__text">{{$t("destination__names")}}</div>
      </router-link>

    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
</script>

<style lang="scss">
.destination {
  min-height: calc(100vh - 80px - 304px);
  padding-top: 132px;
  &__title {
    color: var(--secondary-color);
    font-size: 74px;
    font-weight: 800;
    margin-bottom: 26px;
    @media (max-width: 425px) {
      font-size: 50px;
    }
  }
  &__body {
    max-width: 920px;
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 25px;
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 23px;
    @media (max-width: 1252px) {
      gap: 15px;
    }
    @media (max-width: 991.98px) {
      grid-template-columns: repeat(3, 1fr); /* 5 элементов в ряд */
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr); /* 5 элементов в ряд */
    }
    @media (max-width: 375px) {
      grid-template-columns: repeat(1, 1fr); /* 5 элементов в ряд */
      max-width: 200px;
      margin: 0 auto;
    }
    &__item {
      width: 100%;
      box-sizing: border-box;
      border-radius: 60px;
      overflow: hidden;
      height: 295px;
      position: relative;
      cursor: pointer;
      @media (max-width: 1252px) {
        height: 250px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      &__text {
        transform: rotate(-90deg);
        color: #FFF;
        font-size: 32px;
        font-weight: 800;
        position: absolute;
        z-index: 1;
        bottom: 43px;
        left: 11px;
        max-width: 78px;
        @media (max-width: 1252px) {
          bottom: 20px;
          left: 20px;
        }
      }
    }
  }
}
</style>