<template>
  <router-view />
</template>

<!-- <script>
import { onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const handleResize = () => {
      // Reload the page when the window width changes
      location.reload();
    };

    onMounted(() => {
      // Attach the resize event listener when the component is mounted
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    });

    return {};
  },
};
</script> -->
