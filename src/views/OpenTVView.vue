<template>
  <MenuComponent />
  <div class="opentv">
    <div class="_container">
      <div data-last-letters="tv" class="opentv__title">OpenTurkistan</div>
      <div class="opentv__grid">
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