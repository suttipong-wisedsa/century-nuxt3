<template>
  <v-app>
    <Docsnavbar></Docsnavbar>
    <v-layout>
      <v-app-bar title=""></v-app-bar>
      <v-navigation-drawer v-if="xs || sm == false">
        <v-toolbar-title style="font-size: 35px">Documentation</v-toolbar-title>
        <v-card class="mx-auto" width="300" flat>
          <v-list v-model:opened="open">
            <v-list-group value="Users">
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
            ><v-icon>mdi-menu </v-icon></v-app-bar-nav-icon
          >
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
<!-- <script>
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
    const open = ref(["Users"]);
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
      open,
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
</script> -->

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
<!-- <template>
  <v-card class="mx-auto" width="300">
    <v-list v-model:opened="open">
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Delivery API"
          ></v-list-item>
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin"></v-list-item>
          </template>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions"></v-list-item>
          </template>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template> -->
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
    const admins = ref([
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ]);
    const cruds = ref([
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ]);
    const open = ref(["Users"]);
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
      open,
      loaded,
      loading,
      onClick,
      scrolling,
      delivery,
      drawerMB,
      clickoutside,
      admins,
      cruds,
    };
  },
};
</script>
