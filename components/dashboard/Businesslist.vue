<template>
  <div>
    <v-container>
      <v-card v-show="slide">
        <div class="d-flex justify-space-between pa-5">
          <h1>Business List</h1>
          <div>
            <v-btn prepend-icon="mdi-pencil-outline" color="yellow">
              <template v-slot:prepend>
                <v-icon color="black"></v-icon>
              </template>

              Edit

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
            <v-btn
              prepend-icon="mdi-plus-circle-outline"
              color="black"
              class="ml-5"
              @click="Create()"
            >
              <template v-slot:prepend>
                <v-icon color="white"></v-icon>
              </template>

              Create Business

              <template v-slot:append>
                <v-icon color="warning"></v-icon>
              </template>
            </v-btn>
          </div>
        </div>
        <div class="pa-5" style="font-size: 20px; font-weight: bold">
          {{ desserts.length }} Total
        </div>
        <div id="app">
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
      </v-card>
      <v-card>
        <DashboardCreate
          :slide="slide"
          @changeB="cancle($event)"
        ></DashboardCreate>
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
    const slide = ref(true);
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
    function Create() {
      slide.value = false;
    }
    function cancle(e) {
      console.log(e);
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
      cancle,
    };
  },
};
</script>
