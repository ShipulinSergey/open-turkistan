<template>
  <MenuComponent />
  <div class="destination _container">
    <div class="destination__title">{{ $t("destination__title") }}</div>
    <div class="destination__body">{{ $t("destination__body") }}</div>
    <div class="destination__grid">
      <router-link
        v-for="(item, index) in destinations"
        :key="index"
        :to="`destination/${item.id}`"
      >
        <div class="destination__grid__item">
          <img :src="item.image" alt="" />
          <div class="destination__grid__item__text">{{ item.title }}</div>
        </div>
      </router-link>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import { ref, onMounted } from "vue";

import destination from "../api/destination.api";

const destinations = ref([]);

const getList = () =>
  destination.list().then((res) => (destinations.value = res.data));

onMounted(() => getList());
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
        color: #fff;
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