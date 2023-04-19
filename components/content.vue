<template>
  <v-container :class="[sm || xs ? 'mbdown' : 'mbup']">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" style="position: relative">
        <div v-if="xs || sm == false">
          <!-- <img
            src="../assets/images/Ellipse 364.png"
            style="width: 50%; position: absolute; top: -150px; left: -200px"
          /> -->
        </div>
        <h1 :style="style()" style="font-family: 'Prompt', sans-serif">
          Built for your
          <span class="text-textyellow">business,</span>
          <br />
          powered by Century
        </h1>
        <p
          class="text-getstartFont"
          :style="{
            fontWeight: sm || xs ? 'bold' : '',
            fontSize: sm || xs ? '' : '20px',
            textAlign: 'center',
          }"
          style="font-family: 'Prompt', sans-serif"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
        <v-row no-gutters justify="center" style="margin-top: 35px">
          <v-btn variant="flat" color="black" size="x-large"
            ><NuxtLink
              to="getstart"
              class="text-surface"
              style="
                font-weight: bolder;
                font-family: 'Prompt', sans-serif;
                text-decoration: none;
              "
              >Get Start</NuxtLink
            >
          </v-btn>
        </v-row>
        <div v-if="xs || sm == false">
          <img
            src="../assets/images/Ellipse 364.png"
            style="width: 50%; position: absolute; top: 200px; right: 640px"
          />
          <!-- <img
            src="../assets/images/Ellipse 364.png"
            style="width: 50%; position: absolute; top: 0px; right: -200px"
          /> -->
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-card
        style="margin-top: 150px; padding: 25px; position: relative"
        width="100%"
        elevation="12"
        class="rounded-xl bg-surface"
      >
        <v-row>
          <v-col cols="12" sm="6" style="position: relative"
            ><img
              src="../assets/images/card.png"
              :style="{
                width: '100%',
                objectFit: xs || sm ? 'contain' : 'fill',
              }" /><img
              src="../assets/images/Ellipse 364.png"
              style="width: 50%; position: absolute; top: 300px; left: 30px"
          /></v-col>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col style="margin-top: 70px; position: relative">
                <h1 class="text-black font">Why do we use it?</h1>
                <p class="text-black font">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <img
                  src="../assets/images/Ellipse 364.png"
                  style="width: 30%"
                />
                <img
                  src="../assets/images/Ellipse 364.png"
                  style="
                    width: 50%;
                    position: absolute;
                    top: -150px;
                    right: 50px;
                  "
                />
                <img
                  src="../assets/images/Ellipse 364.png"
                  style="
                    width: 50%;
                    position: absolute;
                    top: 300px;
                    right: 30px;
                  "
                />
                <img
                  src="../assets/images/Ellipse 364.png"
                  style="
                    width: 50%;
                    position: absolute;
                    top: 20px;
                    right: 500px;
                  "
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <h1 class="d-flex justify-center mb-6 font" style="margin-top: 150px">
      Why do we use it?
    </h1>
    <v-row>
      <v-col :cols="12" sm="6">
        <div class="d-flex flex-row">
          <v-card class="rounded-lg bg-cardyellow d-flex justify-center pa-8">
            <img
              src="../assets/images/admin_panel_settings_black_24dp.svg"
              style="width: 80px; height: 100%"
            />
          </v-card>
          <v-card-text class="font"
            ><h1>Century Defence</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p></v-card-text
          >
        </div>
      </v-col>
      <v-col :cols="12" sm="6">
        <div class="d-flex flex-row">
          <v-card class="rounded-lg bg-cardyellow d-flex justify-center pa-8">
            <img
              src="../assets/images/credit_card_black_24dp.svg"
              style="width: 80px; height: 100%"
            />
          </v-card>
          <v-card-text class="font"
            ><h1>Payment</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p></v-card-text
          >
        </div>
      </v-col>
      <v-responsive width="100%"></v-responsive>
      <v-col :cols="12" sm="6">
        <div class="d-flex flex-row">
          <v-card class="rounded-lg bg-cardyellow d-flex justify-center pa-8">
            <img
              src="../assets/images/perm_identity_black_24dp.svg"
              style="width: 80px; height: 100%"
            />
          </v-card>
          <v-card-text class="font"
            ><h1>Identity</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p></v-card-text
          >
        </div>
      </v-col>

      <v-col :cols="12" sm="6">
        <div class="d-flex flex-row">
          <v-card class="rounded-lg bg-cardyellow d-flex justify-center pa-8">
            <img
              src="../assets/images/delivery_dining_black_24dp.svg"
              style="width: 80px; height: 100%"
            />
          </v-card>
          <v-card-text class="font"
            ><h1>Delivery</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p></v-card-text
          >
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters style="margin-top: 150px; margin-bottom: 150px">
      <v-col :cols="12" sm="6">
        <v-card-text class="font">
          <h1 style="font-weight: bold; font-size: 30px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p style="margin-top: 25px">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for
          </p>
        </v-card-text>
      </v-col>
      <v-col :cols="12" sm="6">
        <img
          src="../assets/images/Group 5133.png"
          :style="{
            width: xs || sm ? '100%' : '500px',
            height: '355px',
            objectFit: xs || sm ? 'contain' : 'fill',
          }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
import axios from "axios";
import data from "../data/data";
export default {
  setup() {
    const { xs, sm } = useDisplay();
    const store = useStore();
    const img = ref("../assets/images/admin_panel_settings_black_24dp.svg");
    function style() {
      if (xs.value || sm.value) {
        return { fontSize: "25px", textAlign: "center" };
      } else {
        return { fontSize: "55px", textAlign: "center" };
      }
    }
    const loginTest = computed(() => {
      return store.state.user.user;
    });
    // async function asyncData() {
    //   let { data } = await axios.get(
    //     "https://jsonplaceholder.typicode.com/todos"
    //   );
    //   return { posts: data };
    // }
    return {
      style,
      xs,
      sm,
      data,
      img,
      //asyncData,
      loginTest,
    };
  },
};
</script>
<style scoped>
.mbdown {
  margin-top: 100px;
}
.mbup {
  margin-top: 160px;
}
.font {
  font-family: "Prompt", sans-serif;
}
</style>
