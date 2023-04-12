import axios from "axios";
const user = {
  state() {
    return {
      user: "",
      search: "",
      tel: "",
    };
  },
  mutations: {
    setLogin(state, data) {
      state.user = data;
    },
    setSreach(state, data) {
      state.search = data;
    },
    setTel(state, data) {
      state.tel = data;
    },
  },
  actions: {
    async login(context, payload) {
      context.commit("setTel", payload);
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/sent_otp_provider_wesmart`;
      let { data } = await axios.post(api, payload);
      if (!data) return;
      context.commit("setLogin", data);
    },
    async register(context, payload) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/register_provider_wesmart`;
      let { data } = await axios.post(api, payload);
      if (!data) return;
      return api;
    },
  },
};
export default user;
