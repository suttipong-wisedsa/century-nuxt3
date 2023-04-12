<template>
  <div id="CheckServiceArea">
    <div>
      <h3>Request</h3>
      <v-card class="pa-2" color="blue-grey-lighten-5" style="overflow: auto">
        <div class="d-flex justify-end">
          <v-icon icon="mdi-content-copy" @click="copyFunction(1)"></v-icon>
        </div>
        <div style="height: 100%; width: 100%">
          <pre>{{ Request }}</pre>
        </div>
      </v-card>
    </div>
  </div>
  <h3>Request Body Parameters</h3>
  <table id="customers" class="my-5">
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
    <tr v-for="(item, index) in body" :key="index">
      <td style="width: 15%">
        <v-card width="30px" color="blue-grey-lighten-5" class="text-center">{{
          item.parameter
        }}</v-card>
      </td>
      <td style="width: 15%">{{ item.type }}</td>
      <td style="width: 15%">{{ item.required }}</td>
      <td style="width: 50%">
        {{ item.description }}
      </td>
    </tr>
  </table>
  <v-card class="pa-5" color="blue-grey-lighten-5">
    <pre>
            curl --location -g '{{
        url_instance
      }}/api/v1/providerwesmart/check_province_service' \ --header
            'Content-Type: application/json' \ --data '{ "lat" :
            "7.906909401897036", "lng" : "98.37304703514336" }'
          </pre
    >
  </v-card>
  <h3>Response</h3>
  <v-card class="pa-5" color="blue-grey-lighten-5">
    <div class="d-flex justify-end">
      <v-icon icon="mdi-content-copy" @click="copyFunction(2)"></v-icon>
    </div>
    <pre
      >{{ Response }}
          </pre
    >
  </v-card>
</template>
<script>
import docs from "../data/docs";
import api from "../data/apiData";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
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
    const Request = ref(
      `
 {
    "lat" : "7.906909401897036",
    "lng" : "98.37304703514336"
}
      `
    );
    const Response = ref(
      `
{
  "msg": true,
  "data": "have area service"
}
      `
    );
    const myInput = ref(null);
    function copyFunction($event) {
      let click = $event;
      if (click === 1) {
        navigator.clipboard.writeText(Request.value);
      } else if (click === 2) {
        navigator.clipboard.writeText(Response.value);
      }
    }
    return {
      docs,
      api,
      copyFunction,
      myInput,
      Request,
      Response,
      body,
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
</style>
