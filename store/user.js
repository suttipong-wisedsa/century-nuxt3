import axios from "axios";
const user = {
  state() {
    return {
      user: "",
    };
  },
  mutations: {
    setLogin(state, data) {
      state.user = data;
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
  },
};
export default user;
