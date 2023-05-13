<template>
  <div>My Template</div>
</template>
<script>
import { useStore } from "vuex";
import { useAxios } from "@nuxtjs/axios";
export default {
  setup() {
    async function getData() {
      // const response = await axios.get(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      // const { data: count } = await useFetch(
      //   "https://jsonplaceholder.typicode.com/users"
      // );
      // console.log(count.value);
    }
    const store = useStore();
    const data = computed(() => {
      return store.state.century.getData;
    });
    const user = computed(() => {
      return store.state.user.user;
    });
    onMounted(() => {
      getData();
    });
    return {
      data,
      user,
    };
  },
};
</script>
<style scoped></style>
