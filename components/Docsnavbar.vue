<template>
  <div>
    <div v-if="xs || sm == true">
      <v-app-bar color="navbardocs">
        <v-toolbar-title @click="reditect()"
          ><v-img :src="data.logo" width="150px" height="40px" class="my-10"
        /></v-toolbar-title>
        <v-list-item-title
          v-for="(item, index) in items"
          :key="index"
          class="pa-5 text-info"
          ><NuxtLink
            :to="item.to"
            style="text-decoration: none"
            class="text-info"
            >{{ item.title }}</NuxtLink
          ></v-list-item-title
        >
      </v-app-bar>
    </div>
    <v-app-bar
      v-if="xs || sm == false"
      app
      :color="showNav ? 'text' : 'text'"
      :elevation="1"
      @scroll="handleScroll()"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title @click="reditect()" style="cursor: pointer"
        ><v-img width="300" :src="data.logo" cover></v-img
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row>
        <v-toolbar-title>
          <NuxtLink to="doc" class="text-info" style="text-decoration: none"
            >Docs</NuxtLink
          >
        </v-toolbar-title>
        <v-toolbar-title>
          <NuxtLink
            class="text-info"
            style="text-decoration: none"
            to="/getstart"
            >Get Start</NuxtLink
          >
        </v-toolbar-title>
        <v-btn
          class="text-none ms-4 text-white"
          color="blue-darken-4"
          rounded="0"
          variant="flat"
        >
          <v-toolbar-title>
            <NuxtLink
              class="text-surface"
              to="/login"
              style="text-decoration: none"
              >Login</NuxtLink
            >
          </v-toolbar-title>
        </v-btn>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card> </v-card>
  </div>
</template>
<script>
import data from "../data/data";
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm } = useDisplay();
    const lastScrollPosition = ref(0);
    const showNav = ref(true);
    const drawer = ref(false);
    const items = [
      {
        title: "Get Start",
        to: "/getstart",
      },
      {
        title: "Login",
        to: "/login",
      },
    ];
    const iconToggle = ref(false);
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
    function iconToggleClick() {
      iconToggle.value = !iconToggle.value;
    }
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    return {
      lastScrollPosition,
      showNav,
      onScroll,
      xs,
      sm,
      items,
      drawer,
      reditect,
      data,
      iconToggleClick,
      iconToggle,
    };
  },
};
</script>
