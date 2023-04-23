<template>
  <div>
    <v-container>
      <v-card
        class="pa-5"
        color="#FFFFFF"
        elevation="3"
        style="border-radius: 12px"
      >
        <div class="d-flex justify-space-between">
          <h1
            class="font"
            :style="{
              fontSize: sm || xs ? '25px' : '',
              fontWeight: sm || xs ? 'bold' : '',
              width: sm || xs ? '' : '100%'
            }"
          >
            {{ slide == false ? "Business List" : "Create Business" }}
          </h1>
          <v-container>
            <v-row align="center" justify="end">
              <v-col
                cols="12"
                sm="3"
                :class="[sm || xs ? 'text-center' : 'text-end']"
              >
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
              </v-col>
              <v-col cols="12" sm="5" class="text-start">
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
              </v-col>
            </v-row>
          </v-container>
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
            v-model:page="page"
            :headers="headers"
            :items="desserts"
            class="elevation-1"
            show-select
            v-model="selected"
            @update:options="options = $event"
          >
            <template v-slot:item.create_at="{ item }">
              <td>{{ moment(item.create_at).format("DD/MM/YYYY") }}</td>
            </template>
            <template v-slot:item.glutenfree="{ item }">
              <v-btn
                prepend-icon="mdi-magnify"
                variant="outlined"
                color="#00BAFF"
                @click="seeMore(item.value.company_provider_wesmart_name)"
              >
                See more
              </v-btn>
            </template>

            <template v-slot:bottom>
              <div>
                <v-pagination
                  color="#000000"
                  v-model="page"
                  :length="Math.ceil(desserts.length / 10)"
                ></v-pagination>
              </div>
            </template>
          </v-data-table>
        </div>
        <div v-show="slide == true">
          <DashboardCreate
            :slide="slide"
            @some-event="callback($event)"
            @some-event1="cancle($event)"
          ></DashboardCreate>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
import moment from "moment";
export default {
  setup() {
    const { xs, sm, md, lg, xl, xxl } = useDisplay();
    const store = useStore();
    const route = useRoute();
    const drawer = ref(true);
    const itemsPerPage = ref(5);
    const page = ref(1);
    const pageNext = ref(1);
    const selected = ref([]);
    const slide = ref(false);
    const reveal = ref(false);
    const headers = ref([
      {
        title: "Business Name",
        align: "center",
        sortable: false,
        key: "company_provider_wesmart_name",
      },
      {
        title: "Services count",
        key: "service_count",
        align: "center",
        sortable: false,
      },
      {
        title: "Date created",
        key: "create_at",
        align: "center",
        sortable: false,
      },
      { title: "Action", key: "glutenfree", align: "center", sortable: false },
    ]);
    const desserts = ref([
      // {
      //   name: "Frozen Yogurt",
      //   calories: 159,
      //   fat: 6.0,
      //   glutenfree: true,
      // },
      {
        company_provider_wesmart_id: 3,
        company_provider_wesmart_type: null,
        company_provider_wesmart_name: "บ่าวกิต จำกัด",
        company_provider_wesmart_email: "krit254001@gmail.com",
        company_provider_wesmart_tel: null,
        company_provider_wesmart_status: 1,
        create_at: "2023-03-22 12:33:46.406951+00:00",
        service_count: 1,
      },
      {
        company_provider_wesmart_id: 3,
        company_provider_wesmart_type: null,
        company_provider_wesmart_name: "บ่าวกิต จำกัด",
        company_provider_wesmart_email: "krit254001@gmail.com",
        company_provider_wesmart_tel: null,
        company_provider_wesmart_status: 1,
        create_at: "2023-03-22 12:33:46.406951+00:00",
        service_count: 1,
      },
      {
        company_provider_wesmart_id: 3,
        company_provider_wesmart_type: null,
        company_provider_wesmart_name: "บ่าวกิต จำกัด",
        company_provider_wesmart_email: "krit254001@gmail.com",
        company_provider_wesmart_tel: null,
        company_provider_wesmart_status: 1,
        create_at: "2023-03-22 12:33:46.406951+00:00",
        service_count: 1,
      },
      {
        company_provider_wesmart_id: 3,
        company_provider_wesmart_type: null,
        company_provider_wesmart_name: "บ่าวกิต จำกัด",
        company_provider_wesmart_email: "krit254001@gmail.com",
        company_provider_wesmart_tel: null,
        company_provider_wesmart_status: 1,
        create_at: "2023-03-22 12:33:46.406951+00:00",
        service_count: 1,
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
    async function seeMore(item) {
      alert(item);
    }
    async function callback($event) {
      let click = $event;
      console.log(click);
      await store.dispatch("createbusiness", click);
    }
    function cancle($event) {
      let click = $event;
      slide.value = click;
    }
    definePageMeta({
      layout: false,
    });
    useHead({
      title: "Dashboard",
    });
    async function bussinessList() {
      await store.dispatch("businessList");
    }
    onMounted(() => {
      bussinessList();
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
      cancle,
      seeMore,
      page,
      pageNext,
      moment,
    };
  },
};
</script>

<style scoped>
.font {
  font-family: "Prompt", sans-serif;
}
</style>
