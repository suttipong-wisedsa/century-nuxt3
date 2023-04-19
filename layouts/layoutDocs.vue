<template>
  <v-app>
    <Docsnavbar></Docsnavbar>
    <v-layout>
      <v-app-bar title=""></v-app-bar>
      <v-navigation-drawer v-if="xs || sm == false">
        <!-- <v-card class="mx-auto" width="300" flat>
          <v-list v-model:opened="open" density="compact">
            <v-list-group value="Users">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Delivery API"></v-list-item>
              </template>

              <v-list-group>
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    title="CheckServiceArea"
                    @click="scrolling('API1')"
                  ></v-list-item>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in CheckServiceArea"
                  :key="i"
                  :title="title"
                  :value="title"
                  @click="scrolling(title)"
                ></v-list-item>
              </v-list-group>
              <v-list-group>
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    title="CreateOrderProvider"
                    @click="scrolling('API2')"
                  ></v-list-item>
                </template>

                <v-list-item
                  v-for="([title, icon], i) in CreateOrderProvider"
                  @click="scrollingCreateOrder(title)"
                  :key="i"
                  :title="title"
                  :value="title"
                ></v-list-item>
              </v-list-group>
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
        </v-card> -->
        <v-card flat>
          <v-layout>
            <v-navigation-drawer floating permanent>
              <v-list density="compact" active-color="scoll">
                <v-list-item
                  v-for="(item, index) in menu"
                  class="font"
                  :key="index"
                  :value="index"
                  :style="{
                    fontSize:
                      index == 0 || index == 4 || index == 8 ? '20px' : '16px',
                    fontWeight:
                      index == 0 || index == 4 || index == 8 ? 'bold' : '',
                  }"
                  >{{ item }}</v-list-item
                >
              </v-list>
            </v-navigation-drawer>
            <v-main style="height: 90vh"></v-main>
          </v-layout>
        </v-card>
      </v-navigation-drawer>

      <v-main style="height: 100vh; overflow: hidden">
        <div>
          <v-navigation-drawer
            v-model="drawerMB"
            permanent
            location="left"
            temporary
            class="bg-navbardocs"
          >
            <v-toolbar-title
              style="font-size: 25px; padding: 10px"
              class="text-center"
              >Documentation</v-toolbar-title
            >
            <v-list>
              <v-list-group value="Admin">
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    title="Delivery API"
                  ></v-list-item>
                </template>
                <v-list-group>
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      title="CheckServiceArea"
                      @click="scrolling('API1')"
                    ></v-list-item>
                  </template>

                  <v-list-item
                    v-for="([title, icon], i) in CheckServiceArea"
                    :key="i"
                    :title="title.title"
                    :value="title.title"
                  ></v-list-item>
                </v-list-group>
                <v-list-group>
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      title="CreateOrderProvider"
                      @click="scrolling('API2')"
                    ></v-list-item>
                  </template>

                  <v-list-item
                    v-for="([title, icon], i) in CreateOrderProvider"
                    @click="scrolling(title)"
                    :key="i"
                    :title="title"
                    :value="title"
                  ></v-list-item>
                </v-list-group>
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
        <v-card class="mx-auto my-5" width="95%" v-if="sm || xs">
          <v-list v-model:opened="open">
            <v-list-group value="On this page">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="On this page"></v-list-item>
              </template>
              <v-list active-color="scoll">
                <v-list-item
                  v-for="(item, index) in menu"
                  class="font"
                  :key="index"
                  :value="index"
                  @click="scrolling(item)"
                  >{{ item }}</v-list-item
                >
              </v-list>
            </v-list-group>
          </v-list>
        </v-card>
        <main @click="clickoutside()">
          <slot /></main
      ></v-main>
    </v-layout>

    <Footer></Footer>
  </v-app>
</template>

<style scoped>
.mbdown {
}
.mbup {
  padding: 200px;
}
</style>
<script>
import { useStore } from "vuex";
import { useDisplay } from "vuetify";
export default {
  setup() {
    const store = useStore();
    const { xs, sm } = useDisplay();
    const loaded = ref(false);
    const loading = ref(false);
    const drawerMB = ref(false);
    const search = ref("");
    const delivery = ref([["API1"], ["API2"]]);
    const CheckServiceArea = ref([["Request"], ["Response"]]);
    const CreateOrderProvider = ref([["Request"], ["Response"]]);
    const cruds = ref([
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ]);
    const menu = ref([
      "Introduction",
      "Introduction",
      "Delivery API",
      "Payment",
      "Delivery API",
      "Introduction",
      "Delivery API",
      "Payment",
      "Getting started",
      "Introduction",
      "Delivery API",
      "Payment",
    ]);
    const open = ref(["Users"]);
    const subtitle = ref([]);
    async function onClick() {
      loading.value = true;
      store.commit("setSreach", search.value);
      loading.value = false;
    }
    function clickoutside() {
      drawerMB.value = false;
    }
    function scrollingCreateOrder($event) {
      let menu = $event;
      if (menu == "Request") {
        let e = document.getElementById("RequestCreate");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Response") {
        let e = document.getElementById("ResponseCreate");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      }
    }
    function scrolling($event) {
      let menu = $event;
      if (menu == "Payment") {
        let e = document.getElementById("Payment");
        e.scrollIntoView({
          block: "cenendter",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Identity") {
        let e = document.getElementById("Identity");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Identity") {
        let e = document.getElementById("Identity");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Identity") {
        let e = document.getElementById("Identity");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Request") {
        let e = document.getElementById("Request");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "Response") {
        let e = document.getElementById("Response");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "CheckServiceArea") {
        let e = document.getElementById("CheckServiceArea");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "API1") {
        let e = document.getElementById("api1");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else if (menu == "API2") {
        let e = document.getElementById("api2");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      } else {
        let e = document.getElementById("Authentication");
        e.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
      }
    }
    return {
      xs,
      sm,
      open,
      loaded,
      loading,
      onClick,
      scrolling,
      delivery,
      drawerMB,
      clickoutside,
      CheckServiceArea,
      cruds,
      search,
      CreateOrderProvider,
      scrollingCreateOrder,
      menu,
    };
  },
};
</script>
<style scoped>
.font {
  font-family: "Poppins", sans-serif;
}
</style>
