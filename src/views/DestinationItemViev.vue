<template>
  <MenuComponent />
  <div class="destination-item">
    <div class="destination-item__back">
      <div class="_container">
        <div class="destination-item__wrap">
          <div class="destination-item__uptitle">Дестинации</div>
          <div class="destination-item__title">{{destinationItem.title}}</div>
          <div class="destination-item__subtitle">{{destinationItem.subtitle}}</div>
        </div>
      </div>
    </div>
    <div class="destination-item__text">
      <div class="_container">
        <div class="destination-item__item">
          <div class="destination-item__item__text">{{destinationItem.text}}</div>
          <div class="destination-item__item__img"><img :src="destinationItem.image" alt=""></div>
        </div>
        <!-- <div class="destination-item__item">
          <div class="destination-item__item__img"><img :src="destinationItem.block2_image" alt=""></div>
          <div class="destination-item__item__text">{{destinationItem.text2}}</div>
        </div> -->
      </div>
    </div>
  </div>
  <div class="section__impression">
    <div class="section__impression__content">
      <div class="section__row _container">
        <div class="section__impression__item">
          <div class="section__title mb-10">
            Дестинации
          </div>
        </div>
      </div>
      <ImpressionSlider />
    </div>
  </div>
  <div class="section__impression">
    <div class="section__impression__content">
      <div class="section__row _container">
        <div class="section__impression__item">
          <div class="section__title mb-10">
            Впечатления
          </div>
        </div>
      </div>
      <ImpressionSlider />
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ImpressionSlider from "@/components/sliders/ImpressionSlider.vue";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import destination from "../api/destination.api";

const route = useRoute();
const pageId = route.params.id;

const destinationItem = ref({})

const getDest = (id) =>
  destination.item(id).then((res) => (destinationItem.value = res));

onMounted(() => getDest(pageId));
</script>

<style lang="scss">
.destination-item {
  padding-top: 80px;

  &__back {
    background-image: url('@/assets/destination/back.gif');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 80px);
    background-position: center;
    margin-bottom: 82px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100vh - 80px);
    padding-bottom: 45px;
  }

  &__uptitle {
    color: white;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 500;
  }

  &__title {
    color: white;
    font-family: Montserrat;
    font-size: 48px;
    font-weight: 800;
  }

  &__subtitle {
    color: white;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 24px;
    max-width: 425px;
  }

  &__item {
    display: flex;
    gap: 20px;
    margin-bottom: 71px;
    @media (max-width: 1252px) {
      flex-direction: column;
    }
    &__img {
      min-width: 586px;
      width: 100%;
      height: 400px;
      @media (max-width: 1252px) {
        min-width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    &__text {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__text {
    margin-bottom: 146px;
  }
}
</style>