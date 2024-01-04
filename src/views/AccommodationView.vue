<template>
    <MenuComponent />
    <div class="accom">
      <div class="accom__back">
        <div class="accom__back__title">Вы готовы приступить?</div>
        <div class="accom__back__subtitle">Забронировать поездку</div>
      </div>
      <div class="accom__table _container">
        <div class="accom__wrap">
          <div class="accom__item">
            <img src="@/assets/Accommodation/table1.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table2.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table3.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table4.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table5.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table1.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table2.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table3.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
          <div class="accom__item">
            <img src="@/assets/Accommodation/table4.png" alt="">
            <div class="accom__item__title">Название отеля</div>
            <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
            <v-btn height="48px" color="#F07522" class="accom__item__btn" flat>Подробнее</v-btn>
          </div>
        </div>
        <div class="accom__pagination">
          <v-pagination class="accom__pagination__item" :length="5" active-color="#F07522" total-visible="5"></v-pagination>
        </div>
      </div>
    </div>
    <FeedbackComponent/>
    <FooterComponent />
  </template>

  <script setup>
    import FooterComponent from '@/components/FooterComponent.vue';
    import FeedbackComponent from '@/components/FeedbackComponent.vue';
    import MenuComponent from '@/components/MenuComponent.vue';
    </script>

  <style lang="scss">
    .accom {
      min-height: 100vh;
      padding-top: 80px;

      &__back {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/Accommodation/accom-back.png'), lightgray 50% / cover no-repeat;
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
          color: #FFF;
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
          color: #FFF;
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
          color: #FFF;
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
          color: #FFF;
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
        .v-btn{
          width: 29px!important;
          height: 34px!important;
          padding: 5px 10px;
          border-radius: 8px;
          background: #C4C4C4;
          span {
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .v-pagination__item--is-active{
          .v-btn{
            background: #F07522;
          }
        }
      }
    }
  }
</style>