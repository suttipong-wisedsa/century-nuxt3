import axios from "axios";
const user = {
  state() {
    return {
      user: "",
      search: "",
    };
  },
  mutations: {
    setLogin(state, data) {
      state.user = data;
    },
    setSreach(state, data) {
      state.search = data;
    },
  },
  actions: {
    async login(context, payload) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/sent_otp_provider_wesmart`;
      let { data } = await axios.post(api, payload);
      if (!data) return;
      context.commit("setLogin", data);
    },
    // async login2(context, payload) {
    //   console.log("99999");
    // },
  },
};
export default user;
