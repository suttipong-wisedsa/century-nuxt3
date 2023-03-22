<template>
  <v-app>
    <Navbar></Navbar>
    <main>
      <slot />
    </main>
    <Footer></Footer>
  </v-app>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  setup() {
    const { xs, sm } = useDisplay();
    return {
      xs,
      sm,
    };
  },
};
</script>
<style scoped>
.mbdown {
}
.mbup {
  padding: 250px;
}
</style>
