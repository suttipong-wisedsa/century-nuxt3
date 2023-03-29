<template>
  <div>
    <div v-if="xs || sm == true">
      <v-app-bar color="info">
        <v-toolbar-title @click="deridect()"
          ><v-img
            cover
            :src="data.logo"
            width="250px"
            height="40px"
            class="my-10"
        /></v-toolbar-title>
        <v-app-bar-nav-icon @click="drawer = !drawer"
          ><v-icon>mdi-menu </v-icon></v-app-bar-nav-icon
        >
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="top"
        temporary
        class="bg-info"
      >
        <v-list lines="one">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            style="padding: 23px"
            ><NuxtLink
              :to="item.to"
              style="text-decoration: none"
              class="text-info"
              ><h1 class="text-surface">{{ item.title }}</h1></NuxtLink
            ><v-divider :thickness="2"></v-divider
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-app-bar
      v-if="xs || sm == false"
      app
      :color="showNav ? 'info' : 'transparent'"
      :elevation="0"
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
          <NuxtLink to="doc" class="text-surface" style="text-decoration: none"
            >Docs</NuxtLink
          >
        </v-toolbar-title>
        <v-toolbar-title>
          <NuxtLink
            class="text-surface"
            style="text-decoration: none"
            to="/getstart"
            >Get Start</NuxtLink
          >
        </v-toolbar-title>
        <v-btn variant="outlined">
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
    const drawer = ref(false);
    const items = [
      {
        title: "Docs",
        to: "/doc",
      },
      {
        title: "Get Start",
        to: "/doc",
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
  // data() {
  //   return {
  //     showNavbar: true,
  //     lastScrollPosition: 0,
  //     showNav: true,
  //     items: [
  //       { title: "Dashboard", icon: "mdi-view-dashboard" },
  //       { title: "Account", icon: "mdi-account-box" },
  //       { title: "Settings", icon: "mdi-cog" },
  //     ],
  //   };
  // },
  // mounted() {
  //   const { xs, sm } = useDisplay();
  //   window.addEventListener("scroll", this.onScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.onScroll);
  // },
  // methods: {
  //   onScroll() {
  //     const currentScrollPosition =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     if (currentScrollPosition <= 20) {
  //       this.showNav = false;
  //     }
  //     if (currentScrollPosition > 200) {
  //       this.showNav = true;
  //     }
  //   },
  // },
};
</script>
<style scoped>
.ham {
  border: 1px white solid;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
