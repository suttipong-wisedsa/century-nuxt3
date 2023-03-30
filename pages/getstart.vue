<template>
  <v-app>
    <v-row
      style="height: 100%; overflow: hidden; position: relative"
      :class="xs || sm ? 'mx-2 my-5' : 'mx-5'"
    >
      <v-img
        :src="data.logo2"
        style="position: absolute; width: 500px; top: 20px; left: -80px"
      />
      <v-col :cols="12" sm="6">
        <div
          style="height: 100vh"
          class="d-flex align-center justify-center"
          v-if="xs || sm == false"
        >
          <div style="padding: 150px">
            <h1
              class="text-start"
              style="font-size: normal normal medium 50px/76px Prompt"
            >
              Get Start
            </h1>
            <p
              class="text-start"
              style="font-size: normal normal normal 20px/27px Segoe UI"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <v-img
          :src="data.logo2"
          style="position: absolute; width: 500px; top: 80px; left: 680px"
        />
        <v-img
          :src="data.logo2"
          style="position: absolute; width: 500px; top: 550px; left: 980px"
        />
      </v-col>
      <v-col :cols="12" sm="6">
        <div style="height: 100%" class="d-flex align-center justify-start">
          <div :style="mbCard()">
            <div v-if="xs || sm" class="pa-6">
              <h1 class="text-center">Get Start</h1>
              <p class="text-start">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <!-- <v-img
              :src="data.logo2"
              style="
                position: absolute;
                width: 600px;
                top: 0px;
                left: 1380px;
                z-index: 5;
              "
            /> -->
            <v-img
              :src="data.logo2"
              style="
                position: absolute;
                width: 600px;
                top: 450px;
                left: 1380px;
                z-index: 5;
              "
            />
            <v-card
              class="overflow-auto rounded-xl"
              :max-height="xxl ? '800px' : '600px'"
              max-width="650px"
            >
              <v-card-text class="bg-card">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-container>
                    <v-row style="position: relative">
                      <v-img
                        :src="data.logo2"
                        style="position: absolute; top: 50px"
                      />
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Your Full Name</h3>
                        <v-text-field
                          :rules="nameRules"
                          :loading="submit"
                          color="white"
                          type="text"
                          label="Your Name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Contact Number</h3>
                        <v-text-field
                          :rules="numberRules"
                          :loading="submit"
                          color="white"
                          type="text"
                          label="Your Number"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Company Name</h3>
                        <v-text-field
                          :rules="textRules"
                          :loading="submit"
                          color="white"
                          type="text"
                          label="Company Name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Company Email Address</h3>
                        <v-text-field
                          :rules="emailRules"
                          :loading="submit"
                          color="white"
                          type="email"
                          label="Company@email.com"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Company Website</h3>
                        <v-text-field
                          :rules="textRules"
                          :loading="submit"
                          color="white"
                          type="text"
                          label="Company Website"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Job Title and Department</h3>
                        <v-text-field
                          :rules="textRules"
                          :loading="submit"
                          color="white"
                          type="text"
                          label="Country of partnership"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Country of partnership</h3>
                        <v-select
                          :rules="textRules"
                          label="Select Country"
                          :items="[
                            'California',
                            'Colorado',
                            'Florida',
                            'Georgia',
                            'Texas',
                            'Wyoming',
                          ]"
                          variant="outlined"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <div class="pb-6">
                      <input
                        v-model="checkbox1"
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.</label
                      ><br />
                    </div>
                    <div class="pb-6">
                      <input
                        v-model="checkbox2"
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        value="Car"
                      />
                      <label for="vehicle2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.</label
                      ><br />
                    </div>
                    <v-btn
                      class=""
                      :disabled="lock"
                      :block="true"
                      color="info"
                      size="x-large"
                      @click="confirm()"
                      >CONFIRM</v-btn
                    >
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import { useDisplay } from "vuetify";
import { ref } from "@vue/composition-api";
import data from "../data/data";
export default {
  setup() {
    const { xs, sm, lg, md, xl, xxl } = useDisplay();
    const form = ref(null);
    const route = useRoute();
    const submit = ref(false);
    const checkbox2 = ref(false);
    const checkbox1 = ref(false);
    const valid = ref(true);
    const lock = ref(true);
    const router = useRouter();
    const nameRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
      (v) => /^([^0-9]*)$/.test(v) || "Can't use number",
    ]);
    const emailRules = ref([
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ]);
    const numberRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 12) || "Number must be less than 12 characters",
      (v) =>
        /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/.test(
          v
        ) || "Tel required",
    ]);
    const textRules = ref([
      (v) => !!v || "required",
      (v) => (v && v.length <= 50) || "Number must be less than 50 characters",
    ]);
    watch(checkbox1, () => {
      botton();
    });
    watch(checkbox2, () => {
      botton();
    });
    async function botton() {
      if (checkbox1.value == true && checkbox2.value == true) {
        lock.value = false;
      } else {
        lock.value = true;
      }
    }
    function mbCard() {
      if (xs.value || sm.value) {
        return { marginTop: "50px" };
      } else {
        null;
      }
    }
    async function confirm() {
      form.value.validate();
      if (valid.value) {
        submit.value = true;
        router.push({ path: "/" });
        form.value.resetValidation();
        form.value.reset();
        submit.value = false;
      }
    }
    definePageMeta({
      layout: "getstart",
    });
    useHead({
      title: "Get Start",
    });
    return {
      valid,
      form,
      submit,
      nameRules,
      mbCard,
      confirm,
      xs,
      sm,
      lg,
      checkbox1,
      checkbox2,
      lock,
      form,
      emailRules,
      numberRules,
      textRules,
      data,
      md,
      xl,
      xxl,
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 7px 0px 7px 0px;
}
label {
  display: inline-block;
}

#vehicle1 {
  display: none;
}
#vehicle2 {
  display: none;
}
label:before {
  content: "";
  border: 2px rgb(255, 255, 255) solid;
  cursor: pointer;
  vertical-align: bottom;
  color: black;
  background-color: rgba(0, 0, 0, 0.1);
  line-height: 1.1em;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  height: 22px;
  width: 22px;
  display: inline-block;
  box-shadow: black;
  box-sizing: border-box;
}

:checked + label:before {
  content: "\2713";
  color: white;
}
</style>
