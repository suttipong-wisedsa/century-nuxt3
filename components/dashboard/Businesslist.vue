<template>
  <div>
    <v-container>
      <v-card>
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
          7 Total
        </div>
        <!-- <v-data-table
          :headers="headers"
          :items="desserts"
          class="elevation-1"
          :items-per-page="itemsPerPage"
          show-select
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>
                <v-checkbox :label="item.value.name"></v-checkbox>
              </td>
              <td>{{ item.value.calories }}</td>
              <td>{{ item.value.carbs }}</td>
              <td>
                <v-btn
                  prepend-icon="mdi-magnify"
                  variant="outlined"
                  color="#00BAFF"
                >
                  See more
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table> -->
        <div id="app">
          <v-app>
            <v-data-table
              show-select
              v-model="selected"
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:item.name="{ item }"> </template>
            </v-data-table>
          </v-app>
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
    const headers = ref([
      {
        title: "Business Name",
        align: "left",
        sortable: false,
        value: "name",
      },
      { title: "Services count", value: "calories" },
      { title: "Date created", value: "fat" },
      { title: "Action", value: "action" },
    ]);
    const desserts = ref([
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,

        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,

        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,

        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,

        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,

        protein: 4.0,
        iron: "1%",
      },
    ]);
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
    };
  },
};
</script>
<!-- <script>
export default {
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        {
          title: "Business Name",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "Services count", align: "start", key: "calories" },
        { title: "Data created", align: "start", key: "fat" },
        { title: "Action", align: "start", key: "carbs" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22",
        },
      ],
    };
  },
};
</script> -->
