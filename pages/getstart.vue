<template>
  <v-app>
    <v-row
      class="bg-getstart"
      justify="center"
      align="center"
      style="height: 1000px"
    >
      <!-- <v-img
        :src="data.logo2"
        style="position: absolute; width: 500px; top: 20px; left: -80px"
      /> -->
      <!-- <v-col :cols="12" sm="6">
        <div
          style="height: 100vh"
          class="d-flex align-center justify-center"
          v-if="xs || sm == false"
        >
          <div style="padding: 150px">
            <h1
              class="text-start font"
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
      </v-col> -->
      <v-col>
        <img
          src="../assets/images/Ellipse 364.png"
          style="position: absolute; width: 300px; left: 20px; top: 20%"
        />
        <img
          src="../assets/images/Ellipse 364.png"
          style="position: absolute; width: 300px; left: 20px; top: 20%"
        />
        <img
          src="../assets/images/Ellipse 364.png"
          style="position: absolute; width: 500px; left: 500px; top: 10%"
        />
        <img
          src="../assets/images/Ellipse 364.png"
          style="position: absolute; width: 300px; right: -100px; top: 400px"
        />
        <img
          src="../assets/images/Ellipse 364.png"
          style="position: absolute; width: 300px; right: 800px; bottom: -150px"
        />

        <div class="d-flex justify-center pa-16" v-if="xs || sm == false">
          <div>
            <h3
              class="text-center text-black font"
              style="font-size: 30px; font-weight: bolder"
            >
              Get Start
            </h3>
            <p
              class="text-center text-getstartFont font"
              style="width: 600px; font-size: 18px"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div class="d-flex align-center justify-center">
          <div>
            <v-card class="rounded-xl" max-width="650px">
              <v-card-text class="bg-surface">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-container>
                    <v-row style="position: relative">
                      <img
                        src="../assets/images/Ellipse 364.png"
                        style="
                          position: absolute;
                          width: 300px;
                          right: 10px;
                          top: -50px;
                        "
                      />
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">Your Full Name</h3>
                        <v-text-field
                          v-model="register.name"
                          :rules="nameRules"
                          :loading="submit"
                          type="text"
                          label="Your Name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">Contact Number</h3>
                        <v-text-field
                          v-model="register.number"
                          :rules="numberRules"
                          :loading="submit"
                          type="text"
                          label="Your Number"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">Company Name</h3>
                        <v-text-field
                          v-model="register.company"
                          :rules="textRules"
                          :loading="submit"
                          type="text"
                          label="Company Name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">Company Email Address</h3>
                        <v-text-field
                          v-model="register.email"
                          :rules="emailRules"
                          :loading="submit"
                          type="email"
                          label="Company@email.com"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">Company Website</h3>
                        <v-text-field
                          v-model="register.website"
                          :rules="textRules"
                          :loading="submit"
                          type="text"
                          label="Company Website"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">
                          Job Title and Department
                        </h3>
                        <v-text-field
                          v-model="register.job"
                          :rules="textRules"
                          :loading="submit"
                          type="text"
                          label="Country of partnership"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-black font">Country of partnership</h3>
                        <v-select
                          v-model="register.country"
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

                      <v-btn
                        elevation="12"
                        class="font"
                        :block="true"
                        color="black"
                        size="x-large"
                        @click="confirm()"
                        >CONFIRM</v-btn
                      >
                    </v-row>
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
import { useStore } from "vuex";
export default {
  setup() {
    const { xs, sm, lg, md, xl, xxl } = useDisplay();
    const form = ref(null);
    const route = useRoute();
    const submit = ref(false);
    const checkbox2 = ref(false);
    const store = useStore();
    const checkbox1 = ref(false);
    const valid = ref(true);
    const register = reactive({
      name: "",
      number: "",
      company: "",
      email: "",
      website: "",
      job: "",
      country: "",
    });
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
    // async function botton() {
    //   if (checkbox1.value == true && checkbox2.value == true) {
    //     lock.value = false;
    //   } else {
    //     lock.value = true;
    //   }
    // }
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
        let payload = {
          user_provider_wesmart_first_name: register.name,
          user_provider_wesmart_last_name: register.number,
          user_provider_wesmart_email: register.email,
          user_provider_wesmart_tel: register.number,
          user_provider_wesmart_password: register.job,
        };
        await store.dispatch("register", payload);
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

      form,
      emailRules,
      numberRules,
      textRules,
      data,
      md,
      xl,
      xxl,
      register,
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
.font {
  font-family: "Prompt", sans-serif;
}
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #26264c;
}

::-webkit-scrollbar-thumb {
  background: navy;
}

::-webkit-scrollbar-thumb:hover {
  background: #3d3d7c;
}

.font {
  font-family: "Prompt", sans-serif;
}
</style>
