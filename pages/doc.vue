<template>
  <v-app class="bg-surface">
    <v-card flat class="overflow-auto" style="width: 100vw; height: 82vh">
      <div style="max-width: 1200px; padding: 25px">
        <v-card-text style="font-size: 25px; text-indent: 50px">
          <p>
            {{ title }}
          </p>
        </v-card-text>
        <v-card-text
          style="font-size: 25px"
          v-for="(item, index) in docs"
          :key="index"
          :id="item.title"
        >
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.content }}
          </p>
        </v-card-text>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import docs from "../data/docs";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const title = computed(() => {
      return store.state.century.getData;
    });
    definePageMeta({
      layout: "layout-docs",
      title: "Docs",
    });
    useHead({
      title: "Docs",
    });
    return {
      docs,
      title,
    };
  },
};
</script>
<style scoped>
p {
  text-indent: 50px;
  font-family: "Prompt", sans-serif;
  font-size: 18px;
}

h3 {
  font-family: "Prompt", sans-serif;
  padding: 15px;
}
</style>
