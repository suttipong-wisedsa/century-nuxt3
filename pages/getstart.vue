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
              style="font-size: normal normal normal 20px/27px Segoe UI ;"
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
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Your Full Name</h3>
                        <v-text-field
                          label="Your Name"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Contact Number</h3>
                        <v-text-field
                          label="Your Number"
                          variant="outlined"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Company Name</h3>
                        <v-text-field
                          label="Company Name"
                          variant="outlined"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Company Email Address</h3>
                        <v-text-field
                          label="Company@email.com"
                          variant="outlined"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Company Website</h3>
                        <v-text-field
                          label="Company Website"
                          variant="outlined"
                          readonly
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <h3 class="text-text">Job Title and Department</h3>
                        <v-text-field
                          label="Country of partnership"
                          variant="outlined"
                          readonly
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
                    <v-btn block="true" color="info" size="x-large"
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
    function mbCard() {
      if (xs.value || sm.value) {
        return { marginTop: "50px" };
      } else {
        // return { fontSize: "35px", textAlign: "center" };
      }
    }
    definePageMeta({
      layout: "getstart",
    });
    useHead({
      title: "Get Start",
    });
    return {
      mbCard,
      xs,
      sm,
      lg,
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
