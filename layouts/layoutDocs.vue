<template>
  <v-app>
    <Docsnavbar></Docsnavbar>
    <v-layout>
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-toolbar-title>Documentation</v-toolbar-title>
        <!-- <v-btn @click="scrolling()">ddddddd</v-btn> -->
        <v-card class="mx-auto" width="300" flat>
          <v-list v-for="(item, index) in menu" key="index">
            <v-list-group>
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :title="item.title"></v-list-item>
              </template>

              <v-list-group v-for="(itemSub, index) in menu" key="index">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="itemSub.sub"></v-list-item>
                </template>
              </v-list-group>

              <!-- <v-list-group>
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Actions"></v-list-item>
                </template>
              </v-list-group> -->
            </v-list-group>
          </v-list>
        </v-card>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <v-toolbar color="info">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Documentation</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-card-text>
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Search"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card-text>
        </v-toolbar>
        <main>
          <slot /></main
      ></v-main>
    </v-layout>

    <Footer></Footer>
  </v-app>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm } = useDisplay();
    const loaded = ref(false);
    const loading = ref(false);
  
    const menu = ref([
      { title: "Delivery API",sub:['Overview','uu','tt'] },
      { title: "Payment" ,sub:['Overview','ee','tt']},
      { title: "Identity",sub:['Overview','ww','ww'] },
      { title: "Century defence",sub:['uu','rr','ee'] },
    ]);
    const subtitle = ref([])
    async function onClick() {
      loading.value = true;
    }
    function scrolling() {
      let e = document.getElementById("el2");
      e.scrollIntoView({
        block: "end",
        behavior: "smooth",
        inline: "center",
      });
    }
    return {
      xs,
      sm,
      loaded,
      loading,
      onClick,
      scrolling,
      menu,
    };
  },
};
</script>
<style scoped>
.mbdown {
}
.mbup {
  padding: 200px;
}
</style>
