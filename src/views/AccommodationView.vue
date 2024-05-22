<template>
  <MenuComponent />
  <div class="accom">
    <div class="accom__back">
      <div class="accom__back__title">{{ $t("accom__title") }}</div>
      <div class="accom__back__subtitle">{{ $t("accom__subtitle") }}</div>
    </div>
    <div class="accom__table _container">
      <div class="accom__wrap">
        <div class="accom__item" v-for="(item, index) in hotels" :key="index">
          <div
            class="accom__item__image"
            :style="{ backgroundImage: 'url(' + item.image_url + ')' }"
          ></div>
          <!-- <img :src="item.image_url" alt="" /> -->
          <div class="accom__item__wrap">
            <v-rating
              readonly
              half-increments
              hover
              :length="5"
              :size="33"
              :model-value="item.stars"
              active-color="#F07522"
              color="#C6C6C6"
            />
            <div class="accom__item__title">{{ item.title }}</div>
            <v-btn
              height="48px"
              color="#F07522"
              class="accom__item__btn"
              flat
              :href="item.link"
              target="_blank"
              width="200px"
              >{{ $t("accom__btn") }}</v-btn
            >
          </div>
        </div>
      </div>
      <div class="accom__pagination">
        <div
          class="accom__pagination__item"
          v-for="item in paginationCount"
          :key="item"
          :class="
            activePagination === item ? 'accom__pagination__item-active' : ''
          "
          @click="activePagination = item"
        >
          {{ item }}
        </div>
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

import accommodation from "../api/accommodation.api";

import { ref, onMounted, watch } from "vue";

const hotels = ref([]);
const activePagination = ref(1);
const paginationCount = ref(0);

const getList = (next) =>
  accommodation.list(next).then((res) => {
    hotels.value = res.data;
    paginationCount.value = res.meta.last_page;
  });

onMounted(() => getList(activePagination.value));

// const paginationCount = computed(() => {
//   return Math.ceil(hotels.value.length / 6);
// });

watch(activePagination, (newValue) => {
  getList(newValue);
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
    grid-template-columns: repeat(2, 1fr);
    gap: 37px;
    margin-bottom: 45px;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }

  &__item {
    display: flex;
    gap: 26px;
    @media (max-width: 500px) {
      gap: 10px;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;
    }
    &__wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 25px 0;
      @media (max-width: 400px) {
        gap: 20px;
        align-items: center;
      }
    }
    &__image {
      width: 220px;
      height: 280px;
      border-radius: 54px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 500px) {
        width: 150px;
        height: 200px;
      }
      @media (max-width: 400px) {
        width: 100%;
        height: 400px;
      }
    }
    &__title {
      font-family: Montserrat;
      font-size: 28px;
      font-weight: 700;
      line-height: 24px;
      color: var(--secondary-color);
      @media (max-width: 500px) {
        font-size: 20px;
      }
    }

    &__btn {
      border-radius: 10px !important;

      span {
        text-transform: initial;
        color: #fff;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        @media (max-width: 500px) {
          font-size: 15px;
        }
      }
    }
  }

  &__pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
    gap: 8px;
    &__item {
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      padding: 5px 10px;
      background-color: #c4c4c4;
      border-radius: 8px;
      cursor: pointer;
      min-width: 30px;
      text-align: center;
      &-active {
        background-color: #f07522;
      }
    }
  }
}
</style>