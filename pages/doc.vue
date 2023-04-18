<template>
  <v-app class="bg-surface">
    <v-card
      flat
      class="overflow-auto"
      style="height: 82vh"
      :style="{
        width: xs || sm ? '100vw' : '78vw',
      }"
    >
      <div
        :style="{
          padding: xs || sm ? '0px' : '25px',
          maxWidth: '1000px',
        }"
      >
        <v-card-text style="font-size: 25px">
          <h3>Documentation</h3>
        </v-card-text>
        <v-card-text
          style="font-size: 25px"
          v-for="(item, index) in docs"
          :key="index"
          :id="item.title"
        >
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.content }}
          </p>
          <v-card-text v-if="index == 0">
            <p>{{ item.title }}</p>
            <div :id="item.id" style="overflow-x: auto">
              <table id="customers" class="my-5">
                <tr>
                  <th>API</th>
                  <th>Details</th>
                  <th>Format</th>
                  <th>Endpoint Provided by Grab</th>
                  <th>Endpoint provided by Partner</th>
                  <th>API Defined by</th>
                </tr>
                <tr v-for="(item, index) in api" :key="index">
                  <td :id="item.id">{{ item.title }}</td>
                  <td>{{ item.detail }}</td>
                  <td style="width: 30%">{{ item.format }}</td>
                  <td>{{ item.endpoint }}</td>
                  <td>
                    {{ item.endpointPartner ? item.endpointPartner : "-" }}
                  </td>
                  <td>{{ item.defined }}</td>
                </tr>
              </table>
            </div>
            <p>{{ item.content }}</p>
          </v-card-text>
          <v-card-text v-if="index == 0">
            <h3>Request Headers</h3>
            <p>
              Every requesr to GrabExpress API has to have the folllowing
              request header
            </p>
            <div :id="item.id" style="overflow-x: auto">
              <table id="customers" class="my-5">
                <tr>
                  <th>HTTP Header</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td style="width: 25%">
                    <v-card width="100px" color="blue-grey-lighten-5"
                      >Content-Type</v-card
                    >
                  </td>
                  <td style="width: 25%">yes</td>
                  <td style="width: 50%">
                    <v-card
                      width="110px"
                      color="blue-grey-lighten-5
"
                      >application/json</v-card
                    >
                  </td>
                </tr>
                <tr>
                  <td style="width: 25%">
                    <v-card
                      width="100px"
                      color="blue-grey-lighten-5
"
                      >Authorization</v-card
                    >
                  </td>
                  <td style="width: 25%">yes</td>
                  <td style="width: 50%">OAuth2 Bearer token i.e Bearer</td>
                </tr>
              </table>
            </div>
            <p>{{ item.content }}</p>
          </v-card-text>
        </v-card-text>

        <apiCheckServiceArea></apiCheckServiceArea>
        <apiCreateOrderProviderWesmart></apiCreateOrderProviderWesmart>
        <!-- <v-alert type="success" title="Copy"></v-alert> -->
      </div>
    </v-card>
  </v-app>
</template>

<script>
import docs from "../data/docs";
import api from "../data/apiData";
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
export default {
  setup() {
    const { xs, sm, md, lg, xl, xxl } = useDisplay();
    const store = useStore();
    const route = useRoute();
    const body = ref([
      {
        parameter: "lat",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "lng",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
    ]);
    const message = ref(
      `
 {
    "lat" : "7.906909401897036",
    "lng" : "98.37304703514336"
}
      `
    );
    const title = computed(() => {
      return store.state.century.getData;
    });
    const text = computed(() => {
      return store.state.user.search;
    });
    const myInput = ref(null);
    const fillterDocs = computed(() => {
      return docs.filter((word) => word.title.includes(text));
    });
    function copyFunction() {
      navigator.clipboard.writeText(message.value);
    }
    definePageMeta({
      layout: "layout-docs",
      title: "Docs",
    });
    useHead({
      title: "Docs",
    });
    return {
      docs,
      title,
      api,
      text,
      fillterDocs,
      copyFunction,
      myInput,
      message,
      body,
      xs,
      sm,
    };
  },
};
</script>
<style scoped>
p {
  text-indent: 50px;
  font-family: "Prompt", sans-serif;
  font-size: 18px;
}

h3 {
  font-family: "Prompt", sans-serif;
  padding: 15px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #b9b9b9;
  padding: 8px;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #e6e6e6;
  color: black;
}
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #f6f6f6;
  width: 12px;
}

::-webkit-scrollbar-thumb {
  background: #fddf00 0% 0% no-repeat padding-box;
  height: 199px;
  border-radius: 9px;
  width: 12px;
}

::-webkit-scrollbar-thumb:hover {
  background: #fddf0085 0% 0% no-repeat padding-box;
}
</style>
