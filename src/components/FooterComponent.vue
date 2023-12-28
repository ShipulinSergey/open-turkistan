<template>
  <div class="section__footer">
    <div class="section__footer__content _container">
      <div class="section__footer__item">
        <div class="section__footer__item__city">Turkistan</div>
        <div class="section__footer__item__logo">
          Open <span>Turkistan</span>
        </div>
        <div class="section__footer__item__social">
          <a href="#"><span class="mdi mdi-instagram"></span></a>
          <a href="#"><span class="mdi mdi-facebook"></span></a>
          <a href="#"><span class="mdi mdi-youtube"></span></a>
        </div>
        <p class="section__footer__item__rights">
          {{ $t("footer__rights") }}
        </p>
        <p class="section__footer__item__politics">
          <a href="#"> {{ $t("footer__politics__1") }} </a>
          <a href="#">{{ $t("footer__politics__2") }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
