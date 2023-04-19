<template>
  <div>
    <div v-if="xs || sm == true">
      <v-app-bar them="transparent">
        <v-toolbar-title @click="deridect()"
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
        them="transparent"
      >
        <v-list lines="one">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            style="padding: 23px"
            ><NuxtLink
              :to="item.to"
              style="text-decoration: none; font-family: 'Prompt', sans-serif"
              class="text-info"
              ><h1 class="text-black">{{ item.title }}</h1></NuxtLink
            ><v-divider :thickness="2"></v-divider
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-app-bar
      v-if="xs || sm == false"
      app
      color=" transparent"
      :elevation="showNav ? '15' : '0'"
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
</template>
<script>
import data from "../data/data";
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm, lg } = useDisplay();
    const lastScrollPosition = ref(0);
    const showNav = ref(true);
    const route = useRoute();
    const drawer = ref(false);
    const path = ref(null);
    const pathClick = ref(false);
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
    function onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition <= 20) {
        showNav.value = false;
      }
      if (currentScrollPosition > 200) {
        showNav.value = true;
      }
    }

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
      onScroll();
    });
    return {
      lastScrollPosition,
      showNav,
      onScroll,
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
