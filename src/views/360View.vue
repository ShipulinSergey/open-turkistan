<template>
  <MenuComponent />
  <div class="around">
    <div class="_container">
      <div class="around__wrap">
        <div class="around__title" data-last-letters="tv">OpenTurkistan</div>
        <div class="around__360">360</div>
        <div class="around__img">
          <img src="@\assets\360\icon.png" alt="">
          <img src="@\assets\360\man.png" alt="">
        </div>
      </div>

      <div class="opentv__grid" style="margin-top: 45px;">
        <div class="opentv__item" @click="openYT">
          <img src="@\assets\opentv\1.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistan</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item" @click="openYT">
          <img src="@\assets\opentv\2.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistan</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item" @click="openYT">
          <img src="@\assets\opentv\3.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistan</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item" @click="openYT">
          <img src="@\assets\opentv\4.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistan</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item" @click="openYT">
          <img src="@\assets\opentv\5.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistan</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item" @click="openYT">
          <img src="@\assets\opentv\6.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistan</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
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

const openYT = () => {
  window.open('https://www.youtube.com/', '_blank');
}
</script>

<style lang="scss">
.around{
  padding-top: 80px;
  min-height: 100vh;
  margin-top: 38px;
  &__wrap{
    position: relative;
  }
  &__title {
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 74px;
    font-weight: 800;
    @media (max-width: 680px) {
      font-size: 65px;
    }
    @media (max-width: 600px) {
      font-size: 40px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
    }
    &::after {
      content: attr(data-last-letters);
      color: #F07522;
    }
  }
  &__360{
    color: var(--360-color);
    font-family: Montserrat;
    font-size: 400px;
    font-style: normal;
    font-weight: 800;
    line-height: 215px;
    @media (max-width: 992px) {
      font-size: 300px;
      line-height: 150px;
    }
    @media (max-width: 600px) {
      font-size: 200px;
      line-height: 100px;
    }
    @media (max-width: 400px) {
      font-size: 150px;
      line-height: 80px;
    }
  }
  &__img {
    position: absolute;
    bottom: -45px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 992px) {
      display: none;
    }
    img {
      &:first-child{
        height: 130px;
        width: 130px;
      }
      &:last-child {
        padding-right: 45px;
      }
    }
  
  }
}
</style>