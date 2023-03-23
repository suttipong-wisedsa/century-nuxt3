<template>
  <div class="bg-surface">
    <v-row style="height: 100vh">
      <v-col v-if="xs || sm == false">
        <div style="position: relative">
          <div
            style="
              position: absolute;
              left: -700px;
              top: -900px;
              z-index: 0;
              transform: rotate(7deg);
            "
          >
            <img
              src="../assets/images/Path 2152.svg"
              style="
                width: 1720px;
                position: absolute;
                top: 50px;
                padding: 25px;
                transform: rotate(-2deg);
              "
            />
            <img
              src="../assets/images/Path 2151.png"
              style="width: 1700px; position: absolute; top: 0; padding: 25px"
            />
          </div>
          <img
            src="../assets/images/logo.png"
            style="width: 350px; position: absolute; top: 0; padding: 25px"
          />
        </div>
        <div style="z-index: 999; position: fixed; bottom: -200px; left: -60px">
          <img src="../assets/images/Group 5687.png" style="width: 1200px" />
        </div>
      </v-col>
      <v-col>
        <v-toolbar class="bg-info" style="padding: 5px" v-if="xs || sm"
          ><img src="../assets/images/logo.png"
        /></v-toolbar>
        <div class="d-flex align-center" style="height: 100vh">
          <v-card
            class="mx-auto"
            :style="{ padding: xs || sm ? '30px' : xl ? '90px' : null }"
            elevation="5"
          >
            <v-card-text>
              <p class="text-h4 text--primary">Log in</p>
            </v-card-text>
            <v-card-text>
              <p class="text-text">Enter Your Mobile Number</p>
            </v-card-text>
            <div class="input-container">
              <div class="select-input">
                <img src="../assets/images/thailand.png" />
                <select
                  style="cursor: pointer"
                  name="pets"
                  id="pet-select"
                  v-model="phoneNumber"
                  @click="icon()"
                  v-click-outside="clickoutside"
                >
                  <option value="66" class="option-input">+66 TH</option>
                  <option value="66" class="option-input">+66 TH</option>
                  <option value="66" class="option-input">+66 TH</option>
                  <option value="66" class="option-input">+66 TH</option>
                  <option value="66" class="option-input">+66 TH</option>
                </select>
              </div>
              <img
                src="../assets/images/iconmenu.png"
                class="icon-menu"
                :style="{
                  transform:
                    iconToggle == true ? 'rotate(180deg)' : 'rotate(0deg)',
                }"
              />
              <input
                type="tel"
                name="number"
                @change="inputTel($event)"
                style="border-left: 1px solid rgba(219, 214, 214, 0.63)"
              />
            </div>
            <v-btn
              size="x-large"
              class="bg-info"
              :style="{
                width: xs || sm ? '130px' : '350px',
                marginTop: xs || sm ? '10px' : '25px',
              }"
            >
              <NuxtLink
                to="/"
                class="text-surface"
                style="text-decoration: none"
                >Continue</NuxtLink
              >
            </v-btn>
          </v-card>
        </div>
      </v-col>
      <!-- <div>
        <div>
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <p class="text-h4 text--primary">Log in</p>
            </v-card-text>
            <p>Enter Your Mobile Number</p>
            <v-expand-transition>
              <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">Origin</p>
                  <p>
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                    variant="text"
                    color="teal-accent-4"
                    @click="reveal = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </div>
      </div> -->
    </v-row>
  </div>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm, md, lg, xl } = useDisplay();
    const phoneNumber = ref("66");
    const iconToggle = ref(false);
    const userNumber = ref("");
    const tel = ref(null);
    function inputTel(e) {
      const data = e.target.value;
      userNumber.value = phoneNumber.value + data;
    }
    function icon() {
      iconToggle.value = !iconToggle.value;
    }
    function clickoutside() {
      iconToggle.value = false;
    }
    definePageMeta({
      layout: false,
    });
    useHead({
      title: "Login",
    });
    return {
      tel,
      inputTel,
      phoneNumber,
      icon,
      iconToggle,
      clickoutside,
      userNumber,
      xs,
      sm,
      md,
      lg,
      xl,
    };
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
}
.input-container {
  border-radius: 10px;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid rgba(219, 214, 214, 0.63);
  box-shadow: -2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}
.select-input {
  border-radius: 10px;

  width: 40%;
  display: flex;
  padding: 3px;
}
select {
  padding: 2px;
}
.icon-menu {
  width: 15px;
  height: 10px;
  margin-top: 23px;
}
</style>
