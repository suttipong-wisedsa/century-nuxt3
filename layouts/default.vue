<template>
  <v-app>
    <slot />
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
  padding: 200px;
}
</style>
