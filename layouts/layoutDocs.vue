<template>
  <v-app>
    <Docsnavbar></Docsnavbar>
    <v-layout>
      <v-app-bar title=""></v-app-bar>
      <v-navigation-drawer v-if="xs || sm == false">
        <v-toolbar-title>Documentation</v-toolbar-title>
        <v-card class="mx-auto" width="300" flat>
          <v-list>
            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Delivery API"></v-list-item>
              </template>

              <v-list-item
                rounded="shaped"
                v-for="([title, icon], i) in delivery"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              ></v-list-item>
            </v-list-group>
            <v-list-group value="Payment" @click="scrolling('Payment')">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Payment"></v-list-item>
              </template>
            </v-list-group>
            <v-list-group value="Identity" @click="scrolling('Identity')">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Identity"></v-list-item>
              </template>
            </v-list-group>
            <v-list-group value="Century defence" @click="scrolling('Century')">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  title="Century defence"
                ></v-list-item>
              </template>
            </v-list-group>
          </v-list>
        </v-card>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <v-app-bar color="info">
          <v-app-bar-nav-icon @click="drawerMB = !drawerMB" v-if="xs || sm"
            ><div style="width: 20px">
              <div class="ham"></div>
              <div class="ham"></div>
              <div class="ham"></div></div
          ></v-app-bar-nav-icon>
          <v-toolbar-title v-if="xs || sm == false"
            >Documentation</v-toolbar-title
          >
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
        </v-app-bar>
        <div>
          <v-navigation-drawer
            v-model="drawerMB"
            permanent
            location="left"
            temporary
            class="bg-navbardocs"
          >
            <v-toolbar-title>Documentation</v-toolbar-title>
            <v-list>
              <v-list-group value="Admin">
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    title="Delivery API"
                  ></v-list-item>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in delivery"
                  :key="i"
                  :title="title"
                  :prepend-icon="icon"
                  :value="title"
                ></v-list-item>
              </v-list-group>
              <v-list-group value="Payment" @click="scrolling('Payment')">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Payment"></v-list-item>
                </template>
              </v-list-group>
              <v-list-group value="Identity" @click="scrolling('Identity')">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" title="Identity"></v-list-item>
                </template>
              </v-list-group>
              <v-list-group
                value="Century defence"
                @click="scrolling('Century')"
              >
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    title="Century defence"
                  ></v-list-item>
                </template>
              </v-list-group>
            </v-list>
          </v-navigation-drawer>
        </div>
        <main @click="clickoutside()">
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
    const drawerMB = ref(false);
    const delivery = ref([
      ["-Getting started"],
      ["-Overview"],
      ["-Authentication"],
    ]);
    const subtitle = ref([]);
    async function onClick() {
      loading.value = true;
    }
    function clickoutside() {
      drawerMB.value = false;
    }
    function scrolling($event) {
      let menu = $event;
      if (menu == "Payment") {
        let e = document.getElementById("el2");
        e.scrollIntoView({
          block: "end",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Identity") {
        let e = document.getElementById("el1");
        e.scrollIntoView({
          block: "end",
          behavior: "smooth",
          inline: "center",
        });
      } else {
        let e = document.getElementById("el0");
        e.scrollIntoView({
          block: "end",
          behavior: "smooth",
          inline: "center",
        });
      }
    }
    return {
      xs,
      sm,
      loaded,
      loading,
      onClick,
      scrolling,
      delivery,
      drawerMB,
      clickoutside,
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
.ham {
  border: 1px rgb(7, 7, 7) solid;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
