<template>
  <MenuComponent />
  <div class="videos">
    <div class="_container">
      <div class="videos__title" data-last-letters="Галерея">Видео</div>

      <div class="videos__grid">
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\1.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\2.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\3.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\4.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\5.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\6.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\7.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\8.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
        <div class="videos__item">
          <div class="videos__img">
            <img src="@\assets\icons\play.svg" alt="">
            <img src="@\assets\videos\9.png" alt="">
          </div>
          <div class="videos__subtitle">Название видео</div>
          <div class="videos__text">Lorem ipsum dolor sit amet consectetur. Amet gravida sit ipsum lacinia mi lorem nam ac quisque. </div>
        </div>
      </div>
      <div class="opentv__pagination">
        <v-pagination class="opentv__pagination__item" :length="5" active-color="#F07522"
          total-visible="5"></v-pagination>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
</script>

<style lang="scss">
.videos {
  padding-top: 80px;

  &__title {
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 74px;
    font-weight: 800;
    line-height: 64px;
    margin-top: 52px;
    margin-bottom: 72px;

    @media (max-width: 600px) {
      margin-top: 20px;
      margin-bottom: 40px;
      font-size: 50px;
    }
    @media (max-width: 400px) {
      font-size: 35px;
    }

    @media (max-width: 300px) {
      margin-top: 0px;
      font-size: 35px;
      margin-bottom: 20px;
    }

    &::after {
      content: attr(data-last-letters);
      color: #F07522;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 68px;
    @media (max-width: 1250px) {
      gap: 15px;
    }
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 35px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    margin-bottom: 17px;
    img {
      &:first-child {
        position: absolute;
        z-index: 1;
      }
      &:last-child {
        width: 100%;
      }
    }
  }
  &__subtitle {
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 8px;
  }
  &__text {
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>