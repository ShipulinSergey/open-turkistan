<template>
  <div class="section__menu" id="section__menu">
    <div class="section__menu__content _container">
      <nav class="navigation-menu">
        <div class="navigation__body _container">
          <div class="navigation__body__row">
            <div class="navigation-menu__overlay" @click="toggleMenuClicked()"></div>
            <button type="button" class="hamburger-menu" @click="toggleMenuClicked()">
              <span class="mdi mdi-menu section__menu__icons" id="open-icon"></span>

              <span class="mdi mdi-window-close section__menu__icons" id="close-icon"></span>
            </button>

            <section class="navigation-menu__labels nav">
              <h1 class="site-identity-logo" @click="goTo('/')">
                Open <br />
                <span>Turkistan</span>
              </h1>
              <router-link class="nav__link" to="/about"> {{
                $t("nav__link__1")
              }}</router-link>
              <router-link class="nav__link" to="/accommodation"> {{
                $t("nav__link__2")
              }}</router-link>
              <router-link class="nav__link" to="/destination">{{
                $t("nav__link__3")
              }}</router-link>
              <router-link class="nav__link" to="/opentv">{{
                $t("nav__link__4")
              }}</router-link>
              <a class="nav__link" style="cursor: pointer;">
                {{$t("nav__link__6")}}
                <v-menu activator="parent">
                  <v-list class="py-0" elevation="1" :bg-color="theme === 'dark' ? 'black' : 'white'" :theme="theme === 'dark' ? 'dark' : 'light'">
                    <v-list-item value="2" @click="goTo('/photos')">
                      <v-list-item-title>Фотогалерея</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="3" @click="goTo('/videos')">
                      <v-list-item-title>Видеогалерея</v-list-item-title>
                    </v-list-item>
                    <v-list-item value="1" @click="goTo('/360')">
                      <v-list-item-title>OpenTurkistan 360</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </a>
              <router-link class="nav__link" to="/contacts">{{
                $t("nav__link__5")
              }}</router-link>
            </section>
            <ThemeComponent />
            <LanguageComponent />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import ThemeComponent from "@/components/ThemeComponent.vue";
import LanguageComponent from "@/components/LanguageComponent.vue";
import { mapState } from 'vuex';
export default {
  components: {
    LanguageComponent,
    ThemeComponent,
  },
  computed: {
    ...mapState({
      theme: (state) => state.theme
    })
  },
  methods: {
    goTo(path) {
      this.$router.push(path)
    },
    toggleMenuClicked() {
      const body = document.getElementById("section__menu");
      const openIcon = document.getElementById("open-icon");
      const closeIcon = document.getElementById("close-icon");
      var navbarLinks = document.getElementById("navbarLinks");
      var hamburgerBtn = document.querySelector(".hamburger-btn");
      body.classList.toggle("open");

      if (body.classList.contains("open")) {
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
        navbarLinks.style.display = "none";
        hamburgerBtn.classList.remove("active");
      } else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
        navbarLinks.style.display = "block";
        hamburgerBtn.classList.add("active");
      }
    },
  },
};
</script>

<style></style>
