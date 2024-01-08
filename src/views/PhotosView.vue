<template>
  <MenuComponent />
  <div class="photos">
    <div class="_container">
      <div class="photos__title" data-last-letters="Галерея">Фото</div>
      <div class="photos__wrap">
        <img src="@\assets\photos\1.png" alt="">
        <img src="@\assets\photos\2.png" alt="">
        <img src="@\assets\photos\3.png" alt="">
        <img src="@\assets\photos\5.png" alt="">
        <img src="@\assets\photos\4.png" alt="">
        <img src="@\assets\photos\6.png" alt="">
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
.photos {
  padding-top: 80px;
  min-height: 100vh;
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
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    img {
      max-width: 100%;
      height: auto;
      cursor: zoom-in;
      transition: transform 0.8s;
      &:hover {
        transform: scale(1.2);
        z-index: 1;
      }
    }
  }
}
</style>