<template>
  <MenuComponent />
  <div class="accom">
    <div class="accom__back" style="background-image: url('/src/assets/Restaurants/back.png')">
      <div class="accom__back__title" style="line-height: 64px;">Вкусные встречи в лучших <br> ресторанах</div>
    </div>
    <div class="accom__table _container">
      <div class="accom__wrap">
        <div class="accom__item" v-for="(rest, index) in restaurants" :key="index">
          <img :src="rest.img" alt="">
          <div class="accom__item__title">{{rest.name}}</div>
          <v-rating hover :length="5" :size="33" :model-value="4" active-color="white" color="#C6C6C6" class="mb-12" />
          <v-btn height="48px" color="#F07522" class="accom__item__btn" flat @click="openInst(rest.link)">Подробнее</v-btn>
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
  import { ref } from 'vue';

  const restaurants = ref([
    {
      name: 'Кереге',
      link: 'karavansarayturkistan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Кереге/rest 8.jpg`, import.meta.url).href
    },
    {
      name: 'Тандыр',
      link: 'tandyr_turkestan_',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Тандыр/DSC07519.jpg`, import.meta.url).href
    },
    {
      name: 'Арбат',
      link: 'arbat_turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Арбат/DSC07589.jpg`, import.meta.url).href
    },
    {
      name: 'Сандық',
      link: 'sandyq_restaurant',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Сандық/DSC07462.jpg`, import.meta.url).href
    },
    {
      name: 'Top Tobe',
      link: 'toptobegrandhall',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Тор Тобе/ТопТобе.png`, import.meta.url).href
    },
    {
      name: 'Wow Plov',
      link: 'wow.plov',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Уоу Плов/DSC07386.jpg`, import.meta.url).href
    },
    {
      name: 'Zeynep',
      link: 'zeynep_cafe',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Зейнеп/зейнеп.jpeg`, import.meta.url).href
    },
    {
      name: 'KazakhAsia',
      link: 'rixosturkistan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/kazakhasia/DSC08994.jpg`, import.meta.url).href
    },
    {
      name: 'Aspan',
      link: 'rixosturkistan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/ASPAN/DSC08934.jpg`, import.meta.url).href
    },
    {
      name: 'The Irish Pub',
      link: 'rixosturkistan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/IRISH PUB/DSC_1174.jpg`, import.meta.url).href
    },
    {
      name: 'Balkon',
      link: 'balkon_turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Балкон/DSC07272.jpg`, import.meta.url).href
    },
    {
      name: 'Мята Almaty',
      link: 'myata.almaty',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Мята Алматы/DSC08435.jpg`, import.meta.url).href
    },
    {
      name: 'Zoloto',
      link: 'restaurant_zoloto',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Золото/DSC07812.jpg`, import.meta.url).href
    },
    {
      name: 'The Baza',
      link: 'thebaza2022',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Зе База/DSC07742.jpg`, import.meta.url).href
    },
    {
      name: 'Astau',
      link: 'astau__restaurant',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/астау/DSC08003.jpg`, import.meta.url).href
    },
    {
      name: 'CoffeeBoom',
      link: 'coffeeboom2010turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Кофе бум/DSC07497.jpg`, import.meta.url).href
    },
    {
      name: 'ZebraCoffee',
      link: 'zebracoffee.turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Зебра/DSC07912.jpg`, import.meta.url).href
    },
    {
      name: 'Global Coffee',
      link: 'globalcoffee_turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Глобал/0J3A8878-2_resized.jpg`, import.meta.url).href
    },
    {
      name: 'Дорба',
      link: 'dorba_turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Дорба/DSC07644.jpg`, import.meta.url).href
    },
    {
      name: 'Эдем',
      link: 'edemhotel.kz',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/Эдем/эдем.jpeg`, import.meta.url).href
    },
    {
      name: 'Додо Пицца',
      link: 'dodopizza_turkestan',
      img: new URL(`@/assets/Restaurants/Рестораны для сайта/До  До/DSC07436.jpg`, import.meta.url).href
    },
  ])
  const openInst = (link) => {
    const url = "https://www.instagram.com/" + link;
    window.open(url, "_blank");
  }
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
        border-radius: 8px!important;
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