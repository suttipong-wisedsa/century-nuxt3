import { createStore } from "vuex";
import century from "../store/index";
import user from "../store/user";
const store = createStore({
  modules: {
    century: century,
    user: user,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
