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
      return data;
    },
    async createbusiness(context, payload) {
      console.log("create");
      const userData = JSON.parse(localStorage.getItem("userInfo"));
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/create_company_provider`;
      let { data } = await axios.post(api, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData,
        },
      });
    },
    async ResentOTPProviderWesmart(context, payload) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/resent_otp_provider_wesmart`;
      let { data } = await axios.post(api, payload);
      if (!data) return;
      return data;
    },
    async OTPVerification(context, payload) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/verify_otp_provider_wesmart`;
      let { data } = await axios.post(api, payload);
      return data;
    },
  },
};
export default user;
