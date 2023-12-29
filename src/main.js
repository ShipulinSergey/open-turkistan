/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import "@mdi/font/css/materialdesignicons.css";
import "animate.css";
// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

//npm install vue-i18n@next
import RU from "./locales/ru.json";
import KZ from "./locales/kz.json";

import store from './store';

const messages = {
  RU,
  KZ,
};

const i18n = createI18n({
  locale: "RU",
  fallbackLocale: "RU",
  messages,
});

const app = createApp(App);

registerPlugins(app);
app.use(i18n);
app.use(store);
app.mount("#app");
