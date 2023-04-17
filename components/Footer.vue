<template>
  <div style="font-family: sarabun; color: #ffffff">
    <div>
      <div class="bg-footer font">
        <v-container>
          <v-row class="px-3 py-5">
            <v-col cols="12" sm="6">
              <div>
                <!-- <v-img :src="data.logo" width="200px" height="40px" /> -->
                <img
                  src="../assets/images/Group 5725.png"
                  style="width: 150px"
                />
              </div>
              <div
                class="white--text mt-3 font"
                why
                style="width: 250px; line-height: 2rem"
              >
                32/199 Phoonphol rd., Taladnueh, Muang, Phuket 83000
              </div>
            </v-col>

            <v-col cols="12" sm="2" class="d-md-non">
              <h2 class="white--text">Company</h2>
              <div class="white--text">About</div>
              <div class="white--text mt-2">Our Partner</div>
            </v-col>

            <v-col cols="12" sm="2" class="d-md-non">
              <h2 class="white--text">Support</h2>
              <div class="white--text my-1">WE Token NEWS</div>
              <div class="white--text mt-2">FAQ</div>
            </v-col>

            <v-col cols="12" sm="2" class="hidden-sm-and-down">
              <h2 class="white--text">Social Media</h2>
              <v-col
                cols="12"
                class="d-flex align-center mt-3"
                style="height: 3rem"
              >
                <img src="../assets/images/facebook-logo-2163.png" />
                <div class="white--text my-3 mx-2">CenturyKing</div>
              </v-col>
              <v-col cols="12" class="d-flex align-center" style="height: 3rem">
                <img src="../assets/images/instagram-2165.png" />
                <div class="white--text my-4 mx-2">CenturyKing</div>
              </v-col>
              <v-col cols="12" class="d-flex align-center" style="height: 3rem">
                <img src="../assets/images/youtube-2176.png" />
                <div class="white--text my-4 mx-2">CenturyKing</div>
              </v-col>
            </v-col>
          </v-row></v-container
        >
      </div>
    </div>
    <v-divider class="border-opacity-75" color="surface"></v-divider>
    <div class="bg-footer">
      <v-card-text class="white--text d-flex align-self-center justify-center"
        >&copy; Copyright 2021. All Rights Reserved.
      </v-card-text>
      <v-col
        class="d-md-none .d-lg-flex justify-center d-flex align-center mb-2"
      >
      </v-col>
    </div>
  </div>
</template>
<script>
import data from "../data/data";
export default {
  setup() {
    return {
      data,
    };
  },
};
</script>
<style scoped>
.font {
  font-family: "Sarabun", sans-serif;
}
</style>
