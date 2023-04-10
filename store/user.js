const user = {
  state() {
    return {
      user: "",
    };
  },
  mutations: {
    setLogin(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    login(context, payload) {
      context.commit("setLogin", payload);
    },
  },
};
export default user;
