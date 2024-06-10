<template>
  <MenuComponent />
  <div class="contacts">
    <div class="_container">
      <div class="contacts__title">{{ $t("nav__link__5") }}</div>
      <div class="contacts__wrap">
        <div class="contacts__item">
          <div class="contacts__item__header">
            <div class="contacts__item__title">
              {{ $t("contacts__title__1") }}
            </div>
            <div class="contacts__item__icon">
              <img src="@\assets\icons\phone.png" alt="" />
            </div>
          </div>
          <div class="contacts__item__time">{{ $t("contacts__time__1") }}</div>
          <div class="contacts__item__badge online" v-if="isWorkingHours">
            {{ $t("contacts__online") }}
          </div>
          <div class="contacts__item__badge" v-else>
            {{ $t("contacts__offline") }}
          </div>
          <div class="contacts__item__text">{{ $t("contacts__line__1") }}</div>
          <a href="tel:+77071862843" class="contacts__item__phone"
            >+7 (775) 490 - 36 - 96</a
          >
          <div class="contacts__item__text">{{ $t("contacts__line__2") }}</div>
          <a href="tel:+77299233212" class="contacts__item__phone"
            >+7 (729) 923 - 32 -12</a
          >
        </div>

        <div class="contacts__item">
          <div class="contacts__item__header">
            <div class="contacts__item__title">
              {{ $t("contacts__title__2") }}
            </div>
            <div class="contacts__item__icon">
              <img src="@\assets\icons\caller.png" alt="" />
            </div>
          </div>
          <div class="contacts__item__time">{{ $t("contacts__time__2") }}</div>
          <div class="contacts__item__badge online" v-if="isWorkingHours">
            {{ $t("contacts__online") }}
          </div>
          <div class="contacts__item__badge" v-else>
            {{ $t("contacts__offline") }}
          </div>
          <div class="contacts__item__text">{{ $t("contacts__line__1") }}</div>
          <a href="tel:+77299233212" class="contacts__item__phone"
            >+7 (747) 903 - 20 - 02</a
          >
          <div class="contacts__item__text">{{ $t("contacts__line__2") }}</div>
          <a href="tel:+77299233212" class="contacts__item__phone"
            >+7 (729) 923 - 32 -12</a
          >
          <a
            href="mailto:open.turkistan22@gmail.com"
            class="contacts__item__mail"
            ><img
              src="@\assets\icons\mail.svg"
              alt=""
            />open.turkistan22@gmail.com</a
          >
        </div>

        <div class="contacts__item">
          <div class="contacts__item__header">
            <div class="contacts__item__title">
              {{ $t("contacts__title__3") }}
            </div>
            <div class="contacts__item__icon">
              <img src="@\assets\icons\build.png" alt="" />
            </div>
          </div>
          <div
            class="contacts__item__title"
            style="font-weight: 500; margin-bottom: 15px"
          >
            {{ $t("contacts__time__3") }}
          </div>
          <div class="contacts__item__phone" style="margin-bottom: 13px">
            {{ $t("contacts__addres") }}
          </div>
          <div class="contacts__item__phone" style="margin-bottom: 13px">
            09:00 - 19:00
          </div>
          <a href="tel:+77071862843" class="contacts__item__phone"
            >+7 (747) 545 - 60 - 12</a
          >
          <div class="spacer"></div>

          <a href="#" class="contacts__item__mail"
            ><img src="@\assets\icons\point.svg" alt="" />Адреса</a
          >
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import { ref, onMounted } from "vue";

const isWorkingHours = ref(false);

const checkWorkingHours = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hours = now.getHours();

  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 6;
  const isWorkingTime = hours >= 9 && hours < 20;

  isWorkingHours.value = isWeekday && isWorkingTime;
};

onMounted(() => {
  checkWorkingHours();

  setInterval(() => {
    checkWorkingHours();
  }, 60000);
});
</script>

<style lang="scss">
.spacer {
  flex-grow: 1;
}

.contacts {
  padding-top: 80px;

  &__title {
    padding-top: 50px;
    color: var(--secondary-color);
    font-family: Montserrat;
    font-size: 74px;
    font-weight: 800;
    margin-bottom: 63px;
    @media (max-width: 1252px) {
      margin-bottom: 40px;
    }
    @media (max-width: 992px) {
      font-size: 55px;
      margin-bottom: 30px;
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    @media (max-width: 1252px) {
      gap: 10px;
    }
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    @media (max-width: 680px) {
      gap: 10px;
    }
    @media (max-width: 615px) {
      grid-template-columns: repeat(1, 1fr);
      max-width: 350px;
      margin: 0 auto;
      gap: 30px;
    }
  }

  &__item {
    padding: 25px 33px;
    border-radius: 15px;
    border: 2px solid #c4c4c4;
    display: flex;
    flex-direction: column;
    width: 100%;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
    }

    &__title {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 24px;
      font-weight: 600;
      margin-right: 5px;
    }

    &__icon {
      background-color: #f8f8f8;
      border-radius: 50%;
      height: 54px;
      width: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__time {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 20px;
      margin-bottom: 22px;
    }

    &__badge {
      margin-bottom: 21px;
      border-radius: 5px;
      background: #f5d0d3;
      color: #bf0f0f;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: 500;
      max-width: 163px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      &.online {
        background: #d8f5d0;
        color: #32bf0f;
      }
    }

    &__text {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 20px;
      margin-bottom: 16px;
    }

    &__phone {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 26px;
      text-decoration: none;
    }

    &__mail {
      width: 100%;
      margin-top: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;
      border-radius: 40px;
      border: 2px solid #f07522;
      padding: 22px 0;
      text-decoration: none;
      color: var(--secondary-color);
      font-size: 15px;
      @media (max-width: 1252px) {
        gap: 6px;
        font-size: 12px;
        margin-top: 25px;
      }
    }
  }
}
</style>
