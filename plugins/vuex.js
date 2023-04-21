import { createStore } from "vuex";
import century from "../store/index";
import user from "../store/user";
import bussiness from "../store/bussiness"
const store = createStore({
  modules: {
    century: century,
    user: user,
    bussiness:bussiness
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
