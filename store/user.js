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
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!data) return;
      context.commit("setLogin", data);
    },
    // async login2(context, payload) {
    //   console.log("99999");
    // },
  },
};
export default user;
