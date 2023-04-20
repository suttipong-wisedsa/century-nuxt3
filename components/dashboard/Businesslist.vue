<template>
  <div>
    <v-container>
      <v-card>
        <div class="d-flex justify-space-between pa-5">
          <h1 class="font">
            {{ slide == false ? "Business List" : "Create Business" }}
          </h1>
          <div>
            <v-btn
              :prepend-icon="
                slide == false ? 'mdi-pencil-outline' : 'mdi-close'
              "
              :variant="slide == false ? 'flat' : 'outlined'"
              :color="slide == false ? 'yellow' : 'red'"
              @click="Create(0)"
            >
              <template v-slot:prepend>
                <v-icon color="black"></v-icon>
              </template>

              {{ slide == false ? "Edit" : "Cancle" }}

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
            <v-btn
              :prepend-icon="
                slide == false
                  ? 'mdi-plus-circle-outline'
                  : 'mdi-plus-circle-outline'
              "
              :color="slide == false ? 'black' : '#00BAFF'"
              class="ml-5"
              @click="Create(1)"
            >
              <template v-slot:prepend>
                <v-icon color="white"></v-icon>
              </template>

              {{ slide == false ? "Create Business" : "Create" }}

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
          </div>
        </div>
        <div
          class="pa-5 font"
          style="font-size: 20px; font-weight: bold"
          v-show="slide == false"
        >
          {{ desserts.length }} Total
        </div>
        <div id="app" v-show="slide == false">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
            show-select
            v-model="selected"
          >
            <template v-slot:item.glutenfree="{ item }">
              <v-btn
                prepend-icon="mdi-magnify"
                variant="outlined"
                color="#00BAFF"
              >
                See more
              </v-btn>
            </template>
          </v-data-table>
        </div>
        <div v-show="slide == true">
          <DashboardCreate
            :slide="slide"
            @some-event="callback($event)"
          ></DashboardCreate>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
export default {
  setup() {
    const { xs, sm, md, lg, xl, xxl } = useDisplay();
    const store = useStore();
    const route = useRoute();
    const drawer = ref(true);
    const itemsPerPage = ref(5);
    const selected = ref([]);
    const slide = ref(false);
    const reveal = ref(false);
    const headers = ref([
      {
        title: "Business Name",
        align: "center",
        sortable: false,
        key: "name",
      },
      {
        title: "Services count",
        key: "calories",
        align: "center",
        sortable: false,
      },
      { title: "Date created", key: "fat", align: "center", sortable: false },
      { title: "Action", key: "glutenfree", align: "center", sortable: false },
    ]);
    const desserts = ref([
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        glutenfree: true,
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        glutenfree: true,
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        glutenfree: true,
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        glutenfree: true,
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        glutenfree: true,
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        glutenfree: true,
      },
    ]);
    function Create($event) {
      let click = $event;
      if (click == 0) {
        slide.value = false;
      } else {
        slide.value = true;
      }
    }
    function callback($event) {
      let click = $event;
      slide.value = click;
    }
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
      desserts,
      headers,
      itemsPerPage,
      selected,
      Create,
      slide,
      reveal,
      callback,
    };
  },
};
</script>

<style scoped>
.font {
  font-family: "Prompt", sans-serif;
}
</style>
