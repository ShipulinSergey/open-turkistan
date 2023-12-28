<!-- src/components/ToggleBtn.vue -->
<template>
  <div class="section__theme">
    <button class="section__theme__btn" @click="toggle" :style="{background: themeMod === 'dark' ? '#7E7E7E' : '#D9D9D9' }">
      <div class="d-flex align-center" style="border-radius: 50%; padding: 2px; height: 20px; width: 20px;" :style="{background: themeMod === 'dark' ? '' : '#5EBAF9'}">
        <SunIcon  :style="{fill: themeMod === 'dark' ? '#D9D9D9' : '#FFCA64'}"/>
      </div>
      <div class="d-flex align-center" style="border-radius: 50%; padding: 2px;height: 20px; width: 20px;" :style="{background: themeMod === 'dark' ? '#133240' : ''}">
        <MoonIcon  :style="{fill: themeMod === 'dark' ? '#F8A401' : '#7E7E7E'}"/>
      </div>
    </button>
  </div>
</template>

<script>
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
export default {
  components: {
    SunIcon,
    MoonIcon
  },
  data() {
    return {
      themeMod: 'dark'
    };
  },

  mounted() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.themeMod = savedTheme
      this.setTheme();
    }
  },

  methods: {
    toggle() {
      this.themeMod = this.themeMod === 'dark' ? 'light' : 'dark'
      this.setTheme();
    },

    setTheme() {
      const bodyStyles = document.body.style;
      if (this.themeMod === 'dark') {
        bodyStyles.setProperty("--primary-color", "#000");
        bodyStyles.setProperty("--secondary-color", "#fff");
        bodyStyles.setProperty("--input-bg", "#1e1e1e");
        bodyStyles.setProperty("--input-border", "#353535");
        this.$store.dispatch('SET_VALUE', { key: 'theme', value:  "dark"});
        localStorage.setItem("theme", "dark");
      } else {
        bodyStyles.setProperty("--primary-color", "#fff");
        bodyStyles.setProperty("--secondary-color", "#000");
        bodyStyles.setProperty("--input-bg", "#fff");
        bodyStyles.setProperty("--input-border", "#696969");
        this.$store.dispatch('SET_VALUE', { key: 'theme', value:  "light"});
        localStorage.setItem("theme", "light");
      }
    },
  },
};
</script>

<style scoped>
.icon-sun{
  fill: #D9D9D9;
}
</style>
