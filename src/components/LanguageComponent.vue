<template>
  <div class="section__select">
    <select id="languageSelect" v-model="lang" @change="setLanguagePreference">
      <option value="ru">RU</option>
      <option value="kz">KZ</option>
    </select>
    <svg
      id="test"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M18.6667 6.66667L10 16L1.33337 6.66667"
        stroke="white"
        stroke-linecap="square"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "ru",
    };
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
