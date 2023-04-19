<template>
  <div id="RequestCreate">
    <div>
      <h3>Request</h3>
      <v-card
        class="pa-2"
        color="blue-grey-lighten-5"
        style="overflow: auto; height: 300px"
      >
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
  <!-- <table id="customers" class="my-5" style="width: 62vw; overflow-x: auto">
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
    <tr v-for="(item, index) in body" :key="index">
      <td style="width: 15%">
        <v-card width="100%" color="blue-grey-lighten-5" class="text-center">{{
          item.parameter
        }}</v-card>
      </td>
      <td style="width: 15%">{{ item.type }}</td>
      <td style="width: 15%">{{ item.required }}</td>
      <td style="width: 50%">
        {{ item.description }}
      </td>
    </tr>
  </table> -->
  <table id="customers" class="my-5">
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
    <tr v-for="(item, index) in body" :key="index">
      <td style="width: 15%">
        <v-card width="80px" color="blue-grey-lighten-5" class="text-center">{{
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
  <v-card
    class="pa-5"
    color="blue-grey-lighten-5"
    :width="sm || xs ? '100%' : '62vw'"
    style="overflow-x: auto"
  >
    <pre>
        {{ curl }}
          </pre
    >
  </v-card>
  <h3 id="ResponseCreate">Response</h3>
  <v-card class="pa-5" color="blue-grey-lighten-5">
    <div class="d-flex justify-end">
      <v-icon icon="mdi-content-copy" @click="copyFunction(2)"></v-icon>
    </div>
    <pre
      >{{ Response }}
          </pre
    >
  </v-card>
  <v-alert
    :dismissible="true"
    prominent
    type="success"
    :class="[copy ? 'v-alert' : 'v-alert_active']"
  >
    Copy.
  </v-alert>
</template>
<script>
import { useDisplay } from "vuetify";
import docs from "~~/data/docs";
import api from "~~/data/apiData";
import { useStore } from "vuex";
export default {
  setup() {
    const { xs, sm, lg } = useDisplay();
    const store = useStore();
    const copy = ref(false);
    const body = ref([
      {
        parameter: "secret_key",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "service_area",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "payment_type",
        type: "Number",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "lat_start",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "lng_start",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "lat_end",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "lng_end",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "vehicle_id",
        type: "Number",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "time_start",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "time_end",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "customer_start_name",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "customer_start_phone",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "place_start",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "customer_end_name",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "customer_end_phone",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
      {
        parameter: "place_end",
        type: "String",
        required: "yes",
        description:
          "The client identifier issued to the client to obtain the OAuth 2.0 access_token",
      },
    ]);
    const Request = ref(
      `
{
    "secret_key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJjb21wYW55X2lkIjozfQ.JZD4yIPcrbkojV0Cza2Uxj49UAlW8DWg40rDn0v23xY",
    "service_area": "phuket",
    "payment_type": 1,
    "lat_start": "8.111302552961886",
    "lng_start": "98.30650746103086",
    "lat_end": "8.087147965397373",
    "lng_end": "98.30556298964375",
    "vehicle_id": 1,
    "time_start": "2023-04-11 10:00:00",
    "time_end": "2023-04-11 17:00:00",
    "customer_start_name": "บ่าวกิต",
    "customer_start_phone": "0895913891",
    "place_start": "Phuket international Airport ต.ไม้ข้าว อ.ถลาง จ.ภูเก็ต",
    "customer_end_name": "คมกฤช พรมอ่อน",
    "customer_end_phone": "0895913892",
    "place_end": "VIP Great Hill Airport ต.สาคู อ.ถลาง จ.ภูเก็ต"
}
      `
    );
    const Response = ref(
      `
{
  "msg": true,
  "data": "created"
}
      `
    );
    const curl =
      ref(`curl --location -g '{{url_instance}}/api/v1/providerwesmart/create_order_provider_wesmart' \
--header 'Content-Type: application/json' \
--header 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.J_RIIkoOLNXtd5IZcEwaBDGKGA3VnnYmuXnmhsmDEOs' \
--data '{
    "secret_key": str(),
    "service_area": str(),
    "payment_type": int(),
    "lat_start": str(),
    "lng_start": str(),
    "lat_end": str(),
    "lng_end": str(),
    "vehicle_id": int(),
    "time_start": str(),
    "time_end": str(),
    "customer_start_name": str(),
    "customer_start_phone": str(),
    "place_start": str(),
    "customer_end_name": str(),
    "customer_end_phone": str(),
    "place_end": str()
}'`);
    const myInput = ref(null);
    async function setFalse() {
      copy.value = false;
    }
    async function copyFunction($event) {
      copy.value = true;
      let click = $event;
      if (click === 1) {
        navigator.clipboard.writeText(Request.value);
      } else if (click === 2) {
        navigator.clipboard.writeText(Response.value);
      }
      await setTimeout(setFalse, 1000);
    }
    return {
      docs,
      api,
      copyFunction,
      myInput,
      Request,
      Response,
      body,
      copy,
      curl,
      sm,
      xs,
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
.v-alert {
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  animation: fadeIn;
}
.v-alert_active {
  position: fixed;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
@keyframes fadeIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
