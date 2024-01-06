<template>
  <MenuComponent />
  <div class="opentv">
    <div class="_container">
      <div data-last-letters="tv" class="opentv__title">OpenTurkistantv</div>
      <div class="opentv__grid">
        <div class="opentv__item">
          <img src="@\assets\opentv\1.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistantv</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item">
          <img src="@\assets\opentv\2.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistantv</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item">
          <img src="@\assets\opentv\3.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistantv</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item">
          <img src="@\assets\opentv\4.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistantv</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item">
          <img src="@\assets\opentv\5.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistantv</div>
          <div class="opentv__item__title">Туркестан - это новая мода</div>
          <div class="opentv__item__text mb-7">Умопомрачительные впечатления в сердце двух континентов…</div>
        </div>
        <div class="opentv__item">
          <img src="@\assets\opentv\6.png" alt="" class="opentv__item__back">
          <img src="@\assets\icons\play.svg" alt="" class="opentv__item__play">
          <div class="opentv__item__subtitle" data-last-letters="tv">OpenTurkistantv</div>
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
</script>
<style lang="scss">
.opentv {
  margin-top: calc(80px + 52px);

  &__title {
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 74px;
    font-weight: 800;
    margin-bottom: 52px;
    @media (max-width: 990px) {
      font-size: 63px;
      margin-bottom: 40px;
    }
    @media (max-width: 650px) {
      font-size: 45px;
      margin-bottom: 25px;
    }
    @media (max-width: 485px) {
      font-size: 35px;
    }
    @media (max-width: 400px) {
      font-size: 25px;
    }
    &::after {
      content: attr(data-last-letters);
      color: #F07522;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 21px;
    margin-bottom: 57px;
    @media (max-width: 990px) {
      gap: 10px;
      margin-bottom: 40px;
    }
    @media (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    height: 380px;
    padding-left: 35px;
    color: #FFFFFF;
    cursor: pointer;
    @media (max-width: 990px) {
      height: 270px;
      padding-left: 20px;
      padding-right: 20px;
    }
    @media (max-width: 650px) {
      height: 380px;
    }
    @media (max-width: 400px) {
      height: 270px;
    }
    &__back {
      position: absolute;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      z-index: -1;
    }

    &__play {
      position: absolute;
      width: 64px;
      height: 64px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    &__subtitle {
      color: #FFF;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 800;
      margin-bottom: 26px;
      @media (max-width: 990px) {
        margin-bottom: 5px;
        font-size: 14px;
      }
      @media (max-width: 650px) {
        margin-bottom: 26px;
        font-size: 16px;
      }
      @media (max-width: 400px) {
        margin-bottom: 5px;
        font-size: 14px;
      }
      &::after {
        content: attr(data-last-letters);
        color: #F07522;
      }
    }

    &__title {
      color: #FFF;
      font-family: Montserrat;
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 9px;
      @media (max-width: 990px) {
        margin-bottom: 5px;
        font-size: 18px;
      }
      @media (max-width: 650px) {
        margin-bottom: 9px;
        font-size: 28px;
      }
      @media (max-width: 400px) {
        margin-bottom: 5px;
        font-size: 18px;
      }
    }

    &__text {
      color: #FFF;
      font-family: Montserrat;
      font-size: 14px;
      @media (max-width: 990px) {
        font-size: 12px;
      }
      @media (max-width: 650px) {
        font-size: 14px;
      }
      @media (max-width: 400px) {
        font-size: 12px;
      }
    }
  }

  &__pagination {
    width: 100%;
    display: flex;
    justify-content: center;
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
        background: #C4C4C4;

        span {
          color: #FFF;
          font-family: Montserrat;
          font-size: 14px;
          font-weight: 700;
        }
      }

      .v-pagination__item--is-active {
        .v-btn {
          background: #F07522;
        }
      }
    }
  }
}
</style>