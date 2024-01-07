<template>
  <MenuComponent />
  <div class="destination-item">
    <div class="destination-item__back">
      <div class="_container">
        <div class="destination-item__wrap">
          <div class="destination-item__uptitle">Дестинации</div>
          <div class="destination-item__title">Название места</div>
          <div class="destination-item__subtitle">Lorem ipsum dolor sit amet consectetur. At viverra mauris velit ut quis
            aliquet id.</div>
        </div>
      </div>
    </div>
    <div class="destination-item__text">
      <div class="_container">
        <div class="destination-item__item">
          <div class="destination-item__item__text">Lorem ipsum dolor sit amet consectetur. Eget imperdiet tellus purus eu molestie lacus id. Euismod est mattis donec pharetra convallis vestibulum. Interdum volutpat commodo facilisis neque consequat sit. Elit mus eros mattis phasellus. Est dignissim aenean vestibulum ac nisi rhoncus pretium. Aenean euismod euismod eget amet sem viverra in eu. Ultrices cras nulla neque pellentesque lectus scelerisque eu nibh dui. Congue sed consequat orci suspendisse orci. Rhoncus accumsan dignissim volutpat ut cum vitae felis feugiat erat. Sit pharetra id orci egestas venenatis turpis. Accumsan lobortis nunc sodales sollicitudin fermentum gravida non a. Non in sodales sit eu. Libero tortor sit tincidunt velit mattis eget sagittis. Feugiat elementum in mauris id id lobortis. Morbi euismod sed dis mollis augue nibh arcu tortor. Enim velit suspendisse eu malesuada ac risus a. Scelerisque at quis neque volutpat rutrum viverra. Amet at iaculis maecenas volutpat. Tincidunt amet massa id mus porta porttitor tellus.</div>
          <div class="destination-item__item__img"><img src="@\assets\destination\d1.png" alt=""></div>
        </div>
        <div class="destination-item__item">
          <div class="destination-item__item__img"><img src="@\assets\destination\d2.png" alt=""></div>
          <div class="destination-item__item__text">Lorem ipsum dolor sit amet consectetur. Eget imperdiet tellus purus eu molestie lacus id. Euismod est mattis donec pharetra convallis vestibulum. Interdum volutpat commodo facilisis neque consequat sit. Elit mus eros mattis phasellus. Est dignissim aenean vestibulum ac nisi rhoncus pretium. Aenean euismod euismod eget amet sem viverra in eu. Ultrices cras nulla neque pellentesque lectus scelerisque eu nibh dui. Congue sed consequat orci suspendisse orci. Rhoncus accumsan dignissim volutpat ut cum vitae felis feugiat erat. Sit pharetra id orci egestas venenatis turpis. Accumsan lobortis nunc sodales sollicitudin fermentum gravida non a. Non in sodales sit eu. Libero tortor sit tincidunt velit mattis eget sagittis. Feugiat elementum in mauris id id lobortis. Morbi euismod sed dis mollis augue nibh arcu tortor. Enim velit suspendisse eu malesuada ac risus a. Scelerisque at quis neque volutpat rutrum viverra. Amet at iaculis maecenas volutpat. Tincidunt amet massa id mus porta porttitor tellus.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="section__impression">
    <div class="section__impression__content">
      <div class="section__row _container">
        <div class="section__impression__item">
          <div class="section__title mb-10">
            Дестинации
          </div>
        </div>
      </div>
      <ImpressionSlider />
    </div>
  </div>
  <div class="section__impression">
    <div class="section__impression__content">
      <div class="section__row _container">
        <div class="section__impression__item">
          <div class="section__title mb-10">
            Впечатления
          </div>
        </div>
      </div>
      <ImpressionSlider />
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ImpressionSlider from "@/components/sliders/ImpressionSlider.vue";
</script>

<style lang="scss">
.destination-item {
  padding-top: 80px;

  &__back {
    background-image: url('@/assets/destination/back.gif');
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - 80px);
    background-position: center;
    margin-bottom: 82px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100vh - 80px);
    padding-bottom: 45px;
  }

  &__uptitle {
    color: white;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 500;
  }

  &__title {
    color: white;
    font-family: Montserrat;
    font-size: 48px;
    font-weight: 800;
  }

  &__subtitle {
    color: white;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 24px;
    max-width: 425px;
  }

  &__item {
    display: flex;
    gap: 20px;
    margin-bottom: 71px;
    @media (max-width: 1252px) {
      flex-direction: column;
    }
    &__img {
      min-width: 586px;
      width: 100%;
      @media (max-width: 1252px) {
        min-width: 100%;
      }
      img {
        width: 100%;
      }
    }
    &__text {
      color: var(--secondary-color);
      font-family: Montserrat;
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__text {
    margin-bottom: 146px;
  }
}
</style>