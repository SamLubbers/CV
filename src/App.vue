<template>
  <div id="app">
    <CV />
    <!-- <CoverLetter /> -->
  </div>
</template>

<script>
import CV from "./CV.vue";
import CoverLetter from "./CoverLetter.vue";

export default {
  name: "App",
  components: {
    CV,
    CoverLetter,
  },
};
</script>
