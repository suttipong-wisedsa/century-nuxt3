<template>
  <v-app class="bg-surface">
    <v-row>
      <v-col :cols="12" sm="8">
        <img
          src="../assets/images/Path 2152.svg"
          style="width: 350px; position: absolute; top: 0; padding: 25px"
        />
        <img
          src="../assets/images/Path 2151.png"
          style="width: 350px; position: absolute; top: 0; padding: 25px"
        />
        <img
          src="../assets/images/logo.png"
          style="width: 350px; position: absolute; top: 0; padding: 25px"
        />
        <img
          src="../assets/images/Group 5687.png"
          style="width: 1000px; position: absolute; bottom: 0"
        />
      </v-col>
      <v-col :cols="12" sm="4">
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
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
export default {
  setup() {
    definePageMeta({
      layout: false,
    });
    useHead({
      title: "Login",
    });
  },
};
</script>
<style scoped></style>
