// plugins/vuetify.ts

import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
export default defineNuxtPlugin((nuxtApp) => {
  const myAllBlackTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: "#030026",
      surface: "#FFFFFF",
      primary: "#6200EE",
      "primary-darken-1": "#3700B3",
      secondary: "#03DAC6",
      "secondary-darken-1": "#018786",
      error: "#B00020",
      info: "#05358D",
      success: "#4CAF50",
      warning: "#FB8C00",
      text: "#707070",
    },
  };
  const vuetify = createVuetify({
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
    theme: {
      defaultTheme: "myAllBlackTheme",
      themes: {
        myAllBlackTheme,
      },
    },
    display: {
      mobileBreakpoint: "sm",
      thresholds: {
        xs: 0,
        sm: 340,
        md: 540,
        lg: 800,
        xl: 1280,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
