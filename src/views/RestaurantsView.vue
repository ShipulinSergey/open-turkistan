<template>
  <MenuComponent />
  <div class="accom">
    <div
      class="accom__back"
      style="background-image: url('/src/assets/Restaurants/back.png')"
    >
      <div class="accom__back__title" style="line-height: 64px">
        Вкусные встречи в лучших <br />
        ресторанах
      </div>
    </div>
    <div class="accom__table _container">
      <div class="accom__wrap">
        <div
          class="accom__item"
          v-for="(rest, index) in restaurants"
          :key="index"
        >
          <img :src="rest.image_url" alt="" />
          <div class="accom__item__title">{{ rest.title }}</div>
          <v-rating
            hover
            :length="5"
            :size="33"
            :model-value="4"
            active-color="white"
            color="#C6C6C6"
            class="mb-12"
          />
          <v-btn
            height="48px"
            color="#F07522"
            class="accom__item__btn"
            flat
            :href="rest.link"
            target="_blank"
            >Подробнее</v-btn
          >
        </div>
      </div>
      <div class="accom__pagination">
        <v-pagination
          v-model="pagination"
          class="accom__pagination__item"
          :length="paginationCount"
          active-color="#F07522"
          total-visible="5"
        ></v-pagination>
      </div>
    </div>
  </div>
  <FeedbackComponent />
  <FooterComponent />
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import FeedbackComponent from "@/components/FeedbackComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import { ref, onMounted, watch } from "vue";

import restaurant from "../api/restaurant.api";

const restaurants = ref([]);
const paginationCount = ref(0)
const pagination = ref(1)

const getList = (next) =>
  restaurant.list(next).then((res) => {
    restaurants.value = res.data
    paginationCount.value = res.meta.last_page
  })

onMounted(() => getList(pagination.value));

watch(pagination, (newValue) => {
  getList(newValue)
});
</script>

<style lang="scss">
.accom {
  min-height: 100vh;
  padding-top: 80px;

  &__back {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      url("@/assets/Accommodation/accom-back.png"),
      lightgray 50% / cover no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 38px;
    margin-bottom: 76px;
    @media (max-width: 600px) {
      gap: 20px;
    }

    &__title {
      color: #fff;
      font-family: Montserrat;
      font-size: 48px;
      font-weight: 800;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 40px;
      }
      @media (max-width: 350px) {
        font-size: 35px;
      }
    }

    &__subtitle {
      color: #fff;
      font-family: Montserrat;
      font-size: 64px;
      font-weight: 800;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 48px;
      }
      @media (max-width: 400px) {
        font-size: 40px;
      }
      @media (max-width: 350px) {
        font-size: 35px;
      }
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-bottom: 45px;
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    @media (max-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      z-index: -1;
    }

    &__title {
      color: #fff;
      font-family: Montserrat;
      font-size: 32px;
      font-weight: 800;
      text-align: center;
    }

    &__btn {
      border-radius: 16px !important;
      width: 170px;

      span {
        text-transform: initial;
        color: #fff;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }

  &__pagination {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 80px;
    &__item {
      .v-pagination__prev,
      .v-pagination__next {
        display: none;
      }
      .v-btn {
        width: 29px !important;
        height: 34px !important;
        padding: 5px 10px;
        border-radius: 8px !important;
        background: #c4c4c4;
        span {
          color: #fff;
          font-family: Montserrat;
          font-size: 14px;
          font-weight: 700;
        }
      }
      .v-pagination__item--is-active {
        .v-btn {
          background: #f07522;
        }
      }
    }
  }
}
</style>