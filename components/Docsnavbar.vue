<template>
  <div>
    <div v-if="xs || sm == true">
      <v-app-bar color="navbardocs">
        <v-toolbar-title @click="deridect()"
          ><v-img
            cover
            src="https://drive.google.com/uc?export=view&id=1lDHg5gunNdCJXZ2fOQxRhQzg3zhImvdB"
            width="250px"
            height="40px"
            class="my-10"
        /></v-toolbar-title>
        <v-app-bar-nav-icon @click="drawer = !drawer"
          ><div style="width: 20px">
            <div class="ham"></div>
            <div class="ham"></div>
            <div class="ham"></div></div
        ></v-app-bar-nav-icon>
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
              ><h1 class="text-info">{{ item.title }}</h1></NuxtLink
            ><v-divider :thickness="2"></v-divider
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
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
        ><v-img
          width="300"
          src="https://drive.google.com/uc?export=view&id=1lDHg5gunNdCJXZ2fOQxRhQzg3zhImvdB"
          cover
        ></v-img
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
          <NuxtLink class="text-info" style="text-decoration: none"
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
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm } = useDisplay();
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
    };
  },
};
</script>
<style scoped>
.ham {
  border: 1px white solid;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
