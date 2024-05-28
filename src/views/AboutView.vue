<template>
  <MenuComponent />
  <div class="about">
    <div class="about__statistics _container">
      <div class="about__statistics__info">
        <div class="about__statistics__title">TURKISTAN</div>
        <div class="about__statistics__body">
          {{ $t("about__title__1") }}
          <a class="about__statistics__body__link" href="#feedback">{{
            $t("about__title__2")
          }}</a
          >:
          {{ $t("about__title__3") }}
        </div>
        <div class="about__statistics__actions">
          <button class="about__statistics__button">
            {{ $t("about__application") }}
          </button>
          <button class="about__statistics__button">
            {{ $t("about__connect") }}
          </button>
        </div>
        <!-- <div class="about__statistics__numbers">
          <div class="about__statistics__item">
            <span>10 лет</span> <span>На рынке</span>
          </div>
          <div class="about__statistics__item">
            <span>157</span> <span>Туров</span>
          </div>
          <div class="about__statistics__item">
            <span>40000</span> <span>Клиентов</span>
          </div>
        </div> -->
      </div>
      <div class="about__statistics__img">
        <img src="@\assets\About\statistic.png" alt="" />
      </div>
    </div>
    <div class="about__mission _container">
      <div class="about__mission__info">
        <div class="about__mission__title">
          <span>{{ $t("about__mission__1") }} </span>
          <span>{{ $t("about__mission__2") }}</span>
        </div>
        <div class="about__mission__body">
          {{ $t("about__mission__body") }}
        </div>
      </div>
      <div class="about__mission__img">
        <img src="@\assets\About\mission1.png" alt="" />
        <img src="@\assets\About\mission2.png" alt="" />
      </div>
    </div>
    <div class="about__team _container">
      <div class="about__mission__title">
        <span>{{ $t("about__team__1") }} </span>
        <span>{{ $t("about__team__2") }}</span>
      </div>
      <div class="about__team__body">
        {{ $t("about__team__body") }}
      </div>
      <div class="about__team__img">
        <div class="about__team__img__first">
          <img src="@\assets\About\team1.png" alt="" />
        </div>
        <div class="about__team__img__second">
          <img src="@\assets\About\team2.png" alt="" />
          <img src="@\assets\About\team3.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <div class="about__feedback">
      <div class="about__feedback__title _container">
        <span>{{ $t("about__mission__rev") }}</span>
      </div>
      <div class="about__feedback__reviews">
        <div class="about__feedback__reviews__recalls">
          <div class="about__feedback__reviews__recalls__img">
            <img src="@\assets\About\avatar.png" alt="" />
            <span>Мария Гунина</span>
          </div>
          <div class="about__feedback__text">
            Open Turkistan стал моим виртуальным проводником в удивительный мир
            Туркестана. Благодаря этой платформе я обогатила свои знания и
            почувствовала уникальную атмосферу этого региона. Спасибо за
            потрясающее путешествие!
          </div>
        </div>
        <div class="about__feedback__reviews__recalls">
          <div class="about__feedback__reviews__recalls__img">
            <img src="@\assets\About\avatar.png" alt="" />
            <span>Мария Гунина</span>
          </div>
          <div class="about__feedback__text">
            Open Turkistan стал моим виртуальным проводником в удивительный мир
            Туркестана. Благодаря этой платформе я обогатила свои знания и
            почувствовала уникальную атмосферу этого региона. Спасибо за
            потрясающее путешествие!
          </div>
        </div>
        <div class="about__feedback__reviews__recalls">
          <div class="about__feedback__reviews__recalls__img">
            <img src="@\assets\About\avatar.png" alt="" />
            <span>Мария Гунина</span>
          </div>
          <div class="about__feedback__text">
            Open Turkistan стал моим виртуальным проводником в удивительный мир
            Туркестана. Благодаря этой платформе я обогатила свои знания и
            почувствовала уникальную атмосферу этого региона. Спасибо за
            потрясающее путешествие!
          </div>
        </div>
      </div>
      <div class="about__feedback__cursor">
        <button></button>
      </div>
    </div> -->
    <div class="section__feedback" id="feedback">
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
              <input
                type="text"
                class="section__feedback__item__form__input"
                :placeholder="$t('feedback__input__1')"
              />
              <input
                type="text"
                class="section__feedback__item__form__input"
                :placeholder="$t('feedback__input__2')"
              />
              <button
                type="submit"
                class="section__feedback__item__form__submit regular__btn"
              >
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
  </div>

  <FooterComponent />
</template>
<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
</script>


<style lang="scss" >
.about {
  margin-top: 100px;

  &__statistics {
    display: flex;
    gap: 108px;
    margin-bottom: 120px;

    @media (max-width: 768px) {
      gap: 20px;
      margin-bottom: 50px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 55px;
      margin-bottom: 20px;
    }

    &__img {
      img {
        width: 100%;
      }
    }

    &__title {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 64px;
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 28px;

      @media (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 5px;
      }
    }

    &__body {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 49px;
      padding-right: 20px;

      @media (max-width: 768px) {
        line-height: 18px;
        font-size: 14px;
        padding-right: 0;
        margin-bottom: 30px;
      }

      &__link {
        text-decoration: none;
        color: #f07522;
      }
    }

    &__button {
      font-weight: 600;
      padding: 16px 41px 17px 41px;
      border-radius: 40px 0px;

      @media (max-width: 768px) {
        padding: 10px 20px;
        border-radius: 30px 0px;
      }

      &:first-child {
        background: #f07522;
        color: white;
        border: 2px solid #f07522;

        &:hover {
          color: #f07522;
          background: white;
        }
      }

      &:last-child {
        background: white;
        border: 2px solid #f07522;
        color: #f07522;

        &:hover {
          background: #f07522;
          color: white;
        }
      }
    }

    &__actions {
      display: flex;
      gap: 22px;
      margin-bottom: 100px;

      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
      @media (max-width: 600px) {
        gap: 13px;
        flex-direction: column;
      }
    }

    &__numbers {
      gap: 73px;
      display: flex;

      @media (max-width: 768px) {
        gap: 0px;
        justify-content: space-between;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-family: Montserrat;

        &:first-child {
          color: var(--secondary-color);
          font-size: 36px;
          font-weight: 800;

          @media (max-width: 768px) {
            font-size: 25px;
          }
        }

        &:last-child {
          color: #b3b3b3;
          font-size: 20px;
          font-weight: 600;

          @media (max-width: 768px) {
            font-size: 18px;
          }
        }
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__mission {
    display: flex;
    gap: 57px;

    @media (max-width: 768px) {
      gap: 28px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 10px;
    }

    &__info {
      padding-top: 35px;
      padding-bottom: 115px;

      @media (max-width: 768px) {
        padding-top: 10px;
        padding-bottom: 43px;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
        padding-bottom: 10px;
      }
    }

    &__body {
      max-width: 620px;
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 34px;

      @media (max-width: 768px) {
        max-width: 400px;
        font-size: 12px;
        font-weight: 500;
        line-height: 25px;
      }

      @media (max-width: 600px) {
        max-width: 100%;
      }
    }

    &__img {
      position: relative;
      width: 100%;
      max-width: 473px;

      @media (max-width: 768px) {
        max-width: 220px;
      }

      @media (max-width: 600px) {
        height: 400px;
        width: 70%;
        max-width: 100%;
        margin: 0 auto;
      }
      @media (max-width: 400px) {
        width: 100%;
      }

      img {
        position: absolute;

        @media (max-width: 768px) {
          width: 75%;
        }

        @media (max-width: 600px) {
          width: 55%;
        }

        &:first-child {
          right: 0;
          top: 0;
        }

        &:last-child {
          bottom: 0;
          left: 0;
        }
      }
    }

    &__title {
      margin-bottom: 100px;

      @media (max-width: 768px) {
        margin-bottom: 44px;
      }

      @media (max-width: 600px) {
        margin-bottom: 22px;
      }

      span {
        font-family: Montserrat;
        font-size: 48px;
        font-weight: 800;
        line-height: 64px;

        @media (max-width: 768px) {
          font-size: 25px;
          font-weight: 600;
          line-height: 35px;
        }

        &:first-child {
          color: var(--secondary-color);
        }

        &:last-child {
          color: #f07522;
        }
      }
    }
  }

  &__team {
    padding: 67px 20px;

    @media (max-width: 768px) {
      padding: 40px 14px;
    }

    @media (max-width: 600px) {
      padding: 22px 14px;
    }

    &__body {
      color: var(--secondary-color);

      font-family: Montserrat;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 45px;
      padding-right: 20px;

      @media (max-width: 768px) {
        font-size: 12px;
        font-weight: 300;
        line-height: 20px;
        margin-bottom: 33px;
        padding-right: 14px;
      }
    }

    &__img {
      display: flex;
      gap: 20px;
      @media (max-width: 600px) {
        gap: 10px;
      }

      img {
        width: 100%;
      }

      &__second {
        display: flex;
        flex-direction: column;
        gap: 25px;

        @media (max-width: 768px) {
          gap: 13px;
        }
        @media (max-width: 600px) {
          gap: 6px;
        }
      }
    }
  }

  &__feedback {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0px 20px;

    &__text {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;

      @media (max-width: 768px) {
        font-size: 14px;
        font-weight: 344;
        line-height: 16px;
      }
    }

    &__title {
      padding-bottom: 50px;
      padding-top: 67px;
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 48px;
      font-weight: 800;
      line-height: 64px;

      @media (max-width: 768px) {
        padding-bottom: 33px;
        padding-top: 35px;
        font-size: 25px;
        font-weight: 644;
        line-height: 43px;
      }
      @media (max-width: 600px) {
        padding-bottom: 12px;
        padding-top: 0px;
      }
    }

    &__reviews {
      display: flex;
      gap: 25px;

      @media (max-width: 768px) {
        overflow-x: hidden;
      }

      &__recalls {
        color: var(--secondary-color);
        padding: 38px 30px 27px 30px;
        border-radius: 20px;
        border: 1px solid #f07522;
        background: var(--primary-color);

        @media (max-width: 768px) {
          padding: 20px 22px 17px 22px;
        }

        &__img {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 17px;

          span {
            color: var(--secondary-color);
            font-family: Montserrat;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;

            @media (max-width: 768px) {
              font-size: 16px;
              font-weight: 444;
            }
          }
        }
      }
    }
  }
}
</style>