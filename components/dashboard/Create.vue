<template>
  <div class="pa-5" v-show="slide">
    <div class="d-flex justify-space-between pb-2">
      <h1>Create Business</h1>
      <div>
        <v-btn
          prepend-icon="mdi-close"
          color="red"
          variant="outlined"
          @click="cancle()"
        >
          <template v-slot:prepend>
            <v-icon color="black"></v-icon>
          </template>
          Cancle
          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </v-btn>
        <v-btn
          prepend-icon="mdi-plus-circle-outline"
          color="#00BAFF"
          class="ml-5"
          @click="Create()"
        >
          <template v-slot:prepend>
            <v-icon color="white"></v-icon>
          </template>

          <p class="text-white">Create</p>

          <template v-slot:append>
            <v-icon color="warning"></v-icon>
          </template>
        </v-btn>
      </div>
    </div>
    <v-divider :thickness="3"></v-divider>
    <h3>Business Type*</h3>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["slide"],
  emits: ["changeB"],
  setup(props, { emit }) {
    const slide = ref(props.slide);
    function cancle() {
      emit("changeB", { name: "sdsdsd" });
    }
    return {
      slide,
    };
  },
});
</script>
