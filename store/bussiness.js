import axios from "axios";

const user = {
  state() {
    return {
      bussiness: [],
      getProvince: [],
      getDistrict: "",
    };
  },
  mutations: {
    getListBusiness(state, data) {
      state.bussiness = data;
    },
    getProvince(state, data) {
      state.getProvince = data;
    },
    getDistrict(state, data) {
      state.getDistrict = data;
    },
  },
  actions: {
    async businessList(context) {
      const userData = JSON.parse(localStorage.getItem("userInfo"));
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/get_list_company_provider_wesmart`;
      let { data } = await axios.get(api, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userData,
        },
      });
      if (!data) return;
      context.commit("getListBusiness", data.data);
    },
    async getProvince(context) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/get_province_provider_wesmart`;
      let { data } = await axios.get(api);
      if (!data) return;
      context.commit("getProvince", data.data);
    },
    async getDistrict(context, id) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/get_district_provider_wesmart?province_id=${id}`;
      let { data } = await axios.get(api);
      if (!data) return;
      context.commit("getDistrict", data.data);
    },
    async checkTelCompany(context) {
      const runtimeConfig = useRuntimeConfig();
      let api = `${runtimeConfig.public.apiBase}/api/v1/providerwesmart/check_tel_company_provider_wesmart?tel=893457218`;
      let { data } = await axios.get(api);
      if (!data) return;
      context.commit("getListBusiness", data.data);
    },
  },
};
export default user;
