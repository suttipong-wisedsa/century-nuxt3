<template>
  <v-container :class="[sm || xs ? 'mbdown' : 'mbup']">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10">
        <h1 :style="style()">
          Built for your business,<br />
          powered by Century
        </h1>
        <p
          :style="{
            fontWeight: sm || xs ? 'bold' : '',
            fontSize: sm || xs ? '' : '20px',
            textAlign: 'center',
          }"
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
          <v-btn variant="flat" color="info" size="x-large"
            ><NuxtLink class="text-surface" style="font-weight: bolder"
              >Get Start</NuxtLink
            >
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center">
      <v-card
        style="margin-top: 150px; padding: 25px; background-color: #26264c"
        width="100%"
        elevation="12"
        class="rounded-xl"
      >
        <v-row>
          <v-col cols="12" sm="6"
            ><img src="../assets/images/card.png" style="width: 90%"
          /></v-col>
          <v-col cols="12" sm="6">
            <v-row>
              <v-col style="margin-top: 70px">
                <h1 class="text-surface">Why do we use it?</h1>
                <p class="text-surface">
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
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <h1 class="d-flex justify-center mb-6" style="margin-top: 150px">
      Why do we use it?
    </h1>
    <v-row>
      <v-col :cols="12" sm="6">
        <div class="d-flex flex-row">
          <v-card
            class="rounded-lg"
            style="background-color: #26264c; padding: 30px"
          >
            <img
              src="../assets/images/admin_panel_settings_black_24dp.svg"
              style="width: 100%; height: 100%"
            />
          </v-card>
          <v-card-text
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
          <v-card
            class="rounded-lg"
            style="background-color: #26264c; padding: 30px"
          >
            <img
              src="../assets/images/credit_card_black_24dp.svg"
              style="width: 100%; height: 100%"
            />
          </v-card>
          <v-card-text
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
          <v-card
            class="rounded-lg"
            style="background-color: #26264c; padding: 30px"
          >
            <img
              src="../assets/images/perm_identity_black_24dp.svg"
              style="width: 100%; height: 100%"
            />
          </v-card>
          <v-card-text
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
          <v-card
            class="rounded-lg"
            style="background-color: #26264c; padding: 30px"
          >
            <img
              src="../assets/images/delivery_dining_black_24dp.svg"
              style="width: 100%; height: 100%"
            />
          </v-card>
          <v-card-text
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
        <v-card-text>
          <h1>
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
            width: xs || sm ? '100%' : '624px',
            height: '395px',
          }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm } = useDisplay();
    async function fetchSomething() {
      const ip = await this.$axios.$get("http://icanhazip.com");
      console.log(ip);
    }
    function style() {
      if (xs.value || sm.value) {
        return { fontSize: "25px", textAlign: "center" };
      } else {
        return { fontSize: "35px", textAlign: "center" };
      }
    }
    return {
      fetchSomething,
      style,
      xs,
      sm,
    };
  },
};
</script>
<style scoped>
.mbdown {
  margin-top: 100px;
}
.mbup {
  margin-top: 200px;
}
</style>
