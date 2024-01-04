<template>
  <div class="section__feedback">
    <div class="section__feedback__content _container">
      <div class="section__feedback__row section__row">
        <div class="section__feedback__item">
          <h2 class="section__title">
            {{ $t("feedback__title__1") }}
            <span>{{ $t("feedback__title__2") }}</span>
          </h2>
          <p class="section__subtitle">
            {{ $t("feedback__subtitle") }}
          </p>

          <form action="" class="section__feedback__item__form">
            <input type="text" class="section__feedback__item__form__input"
              :placeholder="this.$t('feedback__input__1')" />
            <input type="text" class="section__feedback__item__form__input"
              :placeholder="this.$t('feedback__input__2')" />
            <button type="submit" class="section__feedback__item__form__submit regular__btn">
              {{ $t("feedback__action") }}
            </button>
          </form>
        </div>

        <div class="section__feedback__item">
          <a href="" class="section__feedback__item__link">
            <img src="@/assets/feedback/1.png" alt="" />

            <div class="play__btn">
              <img src="@/assets/icons/play.svg" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>