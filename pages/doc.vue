<template>
  <v-app class="bg-surface">
    <v-card flat class="overflow-auto" style="width: 100vw; height: 82vh">
      <div style="max-width: 1200px; padding: 25px">
        <v-card-text style="font-size: 25px; text-indent: 50px">
          <p>
            The main and sub navigation also help developers zero in on the
            reason they’re there–whether to solve a problem, get started, or
            explore more about Heroku. If the major categories don’t grab the
            developer’s attention, perhaps that list of common tasks will have
            what they need. Gather feedback from developers if you aren’t sure
            what to include. Figure out what your readers need most and make
            sure your developer home page answers it right from the start.
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px">
          <h3>Delivery API</h3>
          <p>
            The main and sub navigation also help developers zero in on the
            reason they’re there–whether to solve a problem, get started, or
            explore more about Heroku. If the major categories don’t grab the
            developer’s attention, perhaps that list of common tasks will have
            what they need. Gather feedback from developers if you aren’t sure
            what to include. Figure out what your readers need most and make
            sure your developer home page answers it right from the start.
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px">
          <h3>Getting started</h3>
          <p>
            The main and sub navigation also help developers zero in on the
            reason they’re there–whether to solve a problem, get started, or
            explore more about Heroku. If the major categories don’t grab the
            developer’s attention, perhaps that list of common tasks will have
            what they need. Gather feedback from developers if you aren’t sure
            what to include. Figure out what your readers need most and make
            sure your developer home page answers it right from the start.
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px">
          <h3>Overview</h3>
          <p>
            The main and sub navigation also help developers zero in on the
            reason they’re there–whether to solve a problem, get started, or
            explore more about Heroku. If the major categories don’t grab the
            developer’s attention, perhaps that list of common tasks will have
            what they need. Gather feedback from developers if you aren’t sure
            what to include. Figure out what your readers need most and make
            sure your developer home page answers it right from the start.
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px">
          <h3>Authentication</h3>
          <p>
            The main and sub navigation also help developers zero in on the
            reason they’re there–whether to solve a problem, get started, or
            explore more about Heroku. If the major categories don’t grab the
            developer’s attention, perhaps that list of common tasks will have
            what they need. Gather feedback from developers if you aren’t sure
            what to include. Figure out what your readers need most and make
            sure your developer home page answers it right from the start.
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px" id="el2">
          <h3>Payment</h3>
          <p>
            The main and sub navigation also help developers zero in on the
            reason they’re there–whether to solve a problem, get started, or
            explore more about Heroku. If the major categories don’t grab the
            developer’s attention, perhaps that list of common tasks will have
            what they need. Gather feedback from developers if you aren’t sure
            what to include. Figure out what your readers need most and make
            sure your developer home page answers it right from the start.
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px" id="el1">
          <h3>Identity</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis dicta esse molestias vero hic laudantium provident nisi eos
            quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima,
            eum voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis facilis dicta esse molestias vero hic laudantium
            provident nisi eos quasi iusto alias sequi, aut aliquid voluptatibus
            commodi! Minima, eum voluptates?
          </p>
        </v-card-text>
        <v-card-text style="font-size: 25px" id="el0">
          <h3>Identity</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis dicta esse molestias vero hic laudantium provident nisi eos
            quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima,
            eum voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis facilis dicta esse molestias vero hic laudantium
            provident nisi eos quasi iusto alias sequi, aut aliquid voluptatibus
            commodi! Minima, eum voluptates?
          </p>
        </v-card-text>
      </div>
    </v-card>
  </v-app>
</template>

<script>
import docs from "../data/docs";
export default {
  setup() {
    const route = useRoute();
    definePageMeta({
      layout: "layout-docs",
      title: "Docs",
    });
    useHead({
      title: "Docs",
    });
    return {
      docs,
    };
  },
};
</script>
<style scoped>
p {
  text-indent: 50px;
  font-family: "Prompt", sans-serif;
  font-size: 18px;
}

h3 {
  font-family: "Prompt", sans-serif;
  padding: 15px;
}
</style>
