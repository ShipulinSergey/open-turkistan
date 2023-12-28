<!-- src/components/ToggleBtn.vue -->
<template>
  <div class="section__theme">
    <button class="section__theme__btn" @click="toggle">
      <span class="mdi mdi-theme-light-dark section__theme__icon"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggled: false,
    };
  },

  mounted() {
    // When the component is mounted, check local storage for the theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.isToggled = savedTheme === "dark";
      this.setTheme();
    }
  },

  methods: {
    toggle() {
      this.isToggled = !this.isToggled;
      this.setTheme();
    },

    setTheme() {
      const bodyStyles = document.body.style;
      if (this.isToggled) {
        bodyStyles.setProperty("--primary-color", "#000");
        bodyStyles.setProperty("--secondary-color", "#fff");
        bodyStyles.setProperty("--input-bg", "#1e1e1e");
        bodyStyles.setProperty("--input-border", "#353535");
        localStorage.setItem("theme", "dark");
      } else {
        bodyStyles.setProperty("--primary-color", "#fff");
        bodyStyles.setProperty("--secondary-color", "#000");
        bodyStyles.setProperty("--input-bg", "#fff");
        bodyStyles.setProperty("--input-border", "#696969");
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<style scoped>
/* Add your component styles here if needed */
</style>
