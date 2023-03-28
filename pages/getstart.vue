<template>
  <v-app>
    <v-row
      style="height: 100%; overflow: hidden"
      :class="xs || sm ? 'mx-2 my-5' : 'mx-5'"
    >
      <v-col :cols="12" sm="6">
        <!-- <img
          src="@/assets/images/Ellipse 361.png"
          style="z-index: -5; position: absolute"
        /> -->
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
            <v-card class="overflow-auto rounded-xl">
              <v-card-text class="bg-card">
                <v-form @submit.prevent="confirm">
                  <v-container>
                    <v-row>
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
                      :disabled="lock"
                      :block="true"
                      color="info"
                      size="x-large"
                      type="submit"
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

export default {
  setup() {
    const { xs, sm, lg } = useDisplay();
    const route = useRoute();
    const submit = ref(false);
    const checkbox2 = ref(false);
    const checkbox1 = ref(false);
    const lock = ref(true);
    const router = useRouter();
    const nameRules = ref([
      (value) => !!value || "Required.",
      // (value) => (value || "").length <= 20 || "Max 20 characters",
      // (value) => {
      //   const pattern =
      //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   return pattern.test(value) || "Invalid e-mail.";
      // },
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
        // return { fontSize: "35px", textAlign: "center" };
      }
    }
    async function confirm() {
      router.push({ path: "/" });
      // if (valid) {
      //   submit.value = true;
      //   router.push({ path: "/" });
      //   submit.value = false;
      // }
    }
    definePageMeta({
      layout: "getstart",
    });
    useHead({
      title: "Get Start",
    });
    return {
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
