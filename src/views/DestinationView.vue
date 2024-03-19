<template>
  <MenuComponent />
  <div class="destination _container">
    <div class="destination__title">{{ $t("destination__title") }}</div>
    <div class="destination__body">{{ $t("destination__body") }}</div>
    <div class="destination__grid">
      <router-link :to="`destination/${index + 1}`"  v-for="(item, index) in destinations" :key="index">
        <div class="destination__grid__item">
          <img :src="item.img" alt="">
          <div class="destination__grid__item__text">{{item.name}}</div>
        </div>
      </router-link>

    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import { ref } from 'vue';

const destinations = ref(
  [
    {
      name: 'Сайрам-Угам',
      img: new URL(`@/assets/destination/p1.jpg`, import.meta.url).href
    },
    {
      name: 'Аксу-Джабаглы',
      img: new URL(`@/assets/destination/p2.jpg`, import.meta.url).href
    },
    {
      name: 'Заповедник Каратау',
      img: new URL(`@/assets/destination/p3.jpg`, import.meta.url).href
    },
    {
      name: 'Зерип Сланды',
      img: new URL(`@/assets/destination/p4.jpg`, import.meta.url).href
    },
    {
      name: 'Кеме Калган',
      img: new URL(`@/assets/destination/p5.jpg`, import.meta.url).href
    },
    {
      name: 'Жылаган Ата',
      img: new URL(`@/assets/destination/p6.jpg`, import.meta.url).href
    },
    {
      name: 'Городской музей г.Кентау',
      img: new URL(`@/assets/destination/p7.jpg`, import.meta.url).href
    },
    {
      name: 'Мечеть музей Шаммат ишан',
      img: new URL(`@/assets/destination/p8.jpg`, import.meta.url).href
    },
    {
      name: 'Мавзолей Укаш Ата',
      img: new URL(`@/assets/destination/p9.jpg`, import.meta.url).href
    },
    {
      name: 'Подземная пещера Ак Мечеть',
      img: new URL(`@/assets/destination/p10.jpg`, import.meta.url).href
    },
  ]
)

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
        object-fit: cover;
      }
      &__text {
        color: #FFF;
        font-size: 25px;
        font-weight: 800;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%) rotate(-90deg);
        width: 250px;
        @media (max-width: 1252px) {
          font-size: 18px;
          width: 200px;
        }
      }
    }
  }
}
</style>