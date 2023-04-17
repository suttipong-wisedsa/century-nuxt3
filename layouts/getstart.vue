<template>
  <v-app class="bg-getstart">
    <div>
      <div v-if="xs || sm == true">
        <v-app-bar color="getstart">
          <v-toolbar-title @click="reditect()"
            ><img src="../assets/images/Group 5723.png" style="width: 150px"
          /></v-toolbar-title>
          <v-app-bar-nav-icon @click="drawer = !drawer"
            ><v-icon>mdi-menu </v-icon></v-app-bar-nav-icon
          >
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          location="top"
          temporary
          class="bg-getstart"
        >
          <v-list lines="one">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              style="padding: 23px"
              ><NuxtLink
                :to="item.to"
                style="text-decoration: none"
                class="text-black"
                ><h1 class="text-black">{{ item.title }}</h1></NuxtLink
              ><v-divider :thickness="2"></v-divider
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
      <v-app-bar
        v-if="xs || sm == false"
        app
        color="transparent"
        :elevation="0"
        @scroll="handleScroll()"
      >
        <v-spacer></v-spacer>
        <v-toolbar-title @click="reditect()" style="cursor: pointer"
          ><img src="../assets/images/Group 5723.png" style="width: 150px"
        /></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-row>
          <v-toolbar-title>
            <NuxtLink to="doc" class="text-black" style="text-decoration: none"
              >Docs</NuxtLink
            >
          </v-toolbar-title>
          <v-toolbar-title>
            <NuxtLink
              class="text-black"
              style="text-decoration: none"
              to="/getstart"
              >Get Start</NuxtLink
            >
          </v-toolbar-title>
          <v-btn class="bg-black">
            <v-toolbar-title>
              <NuxtLink
                class="text-white"
                to="/login"
                style="text-decoration: none"
                >Login</NuxtLink
              >
            </v-toolbar-title>
          </v-btn>
        </v-row>
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
    <main class="my-15" style="height: 130vh">
      <slot />
    </main>
    <Footer></Footer>
  </v-app>
</template>
<script>
import data from "../data/data";
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm, lg } = useDisplay();
    const lastScrollPosition = ref(0);
    const showNav = ref(true);
    const drawer = ref(false);
    const items = [
      {
        title: "Docs",
        to: "/doc",
      },
      {
        title: "Get Start",
        to: "/getstart",
      },
      {
        title: "Login",
        to: "/login",
      },
    ];
    const router = useRouter();
    function reditect() {
      router.push({ path: "/" });
    }
    return {
      lastScrollPosition,
      showNav,
      xs,
      sm,
      lg,
      items,
      drawer,
      reditect,
      data,
    };
  },
};
</script>
