<template>
  <div>
    <v-app v-show="xs || sm == true">
      <v-app-bar color="info">
        <v-toolbar-title
          ><img
            src="../assets/images/logo.png"
            width="250px"
            height="40px"
            class="my-10"
        /></v-toolbar-title>
        <v-app-bar-nav-icon @click="drawer = !drawer">Menu</v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="top" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>
    </v-app>
    <v-app-bar
      v-show="xs || sm == false"
      app
      :color="showNav ? 'info' : 'transparent'"
      :elevation="0"
      @scroll="handleScroll"
    >
      <v-spacer></v-spacer>
      <v-toolbar-title
        ><img
          src="../assets/images/logo.png"
          width="250px"
          height="40px"
          class="my-10"
      /></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row>
        <v-toolbar-title>
          <NuxtLink to="doc" class="text-surface">Docs</NuxtLink>
        </v-toolbar-title>
        <v-toolbar-title>
          <NuxtLink class="text-surface">Get Start</NuxtLink>
        </v-toolbar-title>
        <v-btn variant="outlined">
          <v-toolbar-title>
            <NuxtLink class="text-surface">Login</NuxtLink>
          </v-toolbar-title>
        </v-btn>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm } = useDisplay();
    const lastScrollPosition = ref(0);
    const showNav = ref(true);
    const drawer = ref(false);
    const items =
      ref[
        ({ title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Settings", icon: "mdi-cog" })
      ];
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
    });
    return {
      lastScrollPosition,
      showNav,
      onScroll,
      xs,
      sm,
      items,
      drawer,
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
