<template>
  <v-app>
    <v-row style="height: 100%; overflow: hidden">
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
            <h1 class="text-start">Get Start</h1>
            <p class="text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </v-col>
      <v-col :cols="12" sm="6">
        <div style="height: 100vh" class="d-flex align-center">
          <div>
            <v-card class="overflow-auto rounded-lg">
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
                    <!-- <div class="checkbox check-transparent">
                      <div>
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox"
                          >It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.</label
                        >
                      </div>
                    </div> -->
                    <!-- <v-checkbox
                      v-model="ex4"
                      label="red"
                      color="red"
                      value="red"
                      hide-details
                    ></v-checkbox>
                    <v-btn block="100%" min-height="50px" color="info"
                      >CONFIRM</v-btn
                    > -->
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.</label
                    ><br />
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="Car"
                    />
                    <label for="vehicle2">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.</label
                    ><br />
                    <v-btn block="true" color="info">CONFIRM</v-btn>
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
    definePageMeta({
      layout: "getstart",
    });
    useHead({
      title: "Get Start",
    });
    return {
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
  color: rgb(0, 0, 0);
}
</style>
