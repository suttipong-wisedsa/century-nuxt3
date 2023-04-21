<template>
  <v-layout>
    <v-app-bar>
      <v-toolbar-title
        ><img src="../assets/images/Group 5723.png" style="width: 140px"
      /></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge content="9+">
        <v-avatar
          color="cardyellow"
          size="35"
          style="border: 2px solid #fddf00"
        >
          <v-icon size="20" color="scoll">mdi-bell</v-icon></v-avatar
        >
      </v-badge>

      <v-divider
        :thickness="3"
        color="getstartFont"
        vertical
        class="mx-5"
        style="height: 50px; margin-top: 7px"
      ></v-divider>
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
          </v-btn>
          <card-text>Lisa blackpink</card-text>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-avatar>
              <p>Lisa blackpink</p>
              <v-divider class="my-3"></v-divider>

              <v-btn prepend-icon="mdi-account" to="#" rounded variant="text">
                Profile
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn prepend-icon="mdi-logout" to="#" rounded variant="text">
                Logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="#212121">
      <v-list nav class="text-white" active-color="scoll" flat>
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          color="yellow"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="index"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 100vh;background-color: #f7f7f7;">
      <dashboard-businesslist></dashboard-businesslist>
    </v-main>
  </v-layout>
</template>

<script>
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
export default {
  middleware: "auth",
  setup() {
    const { xs, sm, md, lg, xl, xxl } = useDisplay();
    const store = useStore();
    const route = useRoute();
    const drawer = ref(true);
    const menu = ref([
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Business List", icon: "mdi-account" },
      { title: "Document", icon: "mdi-file-document" },
    ]);
    definePageMeta({
      layout: false,
    });
    useHead({
      title: "Dashboard",
    });
    return {
      xs,
      sm,
      drawer,
      menu,
    };
  },
};
</script>
