// plugins/vuetify.ts

import { createVuetify } from "vuetify";
import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
//import "material-design-icons-iconfont/dist/material-design-icons.css";
export default defineNuxtPlugin((nuxtApp) => {
  const myAllBlackTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: "#FFFFFF",
      surface: "#FFFFFF",
      primary: "#6200EE",
      "primary-darken-1": "#3700B3",
      secondary: "#03DAC6",
      "secondary-darken-1": "#018786",
      error: "#B00020",
      info: "#05358D",
      success: "#4CAF50",
      warning: "#FB8C00",
      text: "#FFFFFF",
      navbardocs: "#F7F7F7",
      card: "#26264c",
      font: "#B2B2B2",
      getstart: "#F7F7F7",
      getstartFont: "#7B7B7B",
      footer: "#121212",
      textyellow: "#FDCA00",
      cardyellow: "#FFF6B2",
      scoll: "#FDDF00",
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
        xxl: 1904,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
