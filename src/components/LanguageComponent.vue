<template>
  <div class="section__select">
    <v-select
      v-model="lang"
      :items="['RU', 'KZ', 'EN']"
      variant="solo"
      class="elevation-0"
      density="compact"
      hide-details
      flat
      :bg-color="theme === 'dark' ? 'black' : 'white'"
      :theme="theme === 'dark' ? 'dark' : 'light'"
      menu-icon="mdi-chevron-down"
      @change="changeLanguage"
    ></v-select>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      lang: "RU",
    };
  },
  computed: {
    ...mapState({
      theme: (state) => state.theme,
    }),
  },
  watch: {
    lang() {
      this.setLanguagePreference();
    },
  },
  methods: {
    setLanguagePreference() {
      localStorage.setItem("currentLanguage", this.lang);
      this.$i18n.locale = this.lang;
    },
  },
  mounted() {
    const lang = localStorage.getItem("currentLanguage");
    if (lang) {
      this.lang = lang;
      this.setLanguagePreference();
    }
  },
};
</script>