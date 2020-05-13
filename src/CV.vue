<template>
  <A4>
    <PersonalInfo />
    <hr class="separator" />
    <Timeline />
  </A4>
</template>

<script>
import A4 from "./A4";
import PersonalInfo from "@/components/PersonalInfo";
import Timeline from "@/components/Timeline";

export default {
  name: "CV",
  components: {
    A4,
    PersonalInfo,
    Timeline,
  },
};
</script>

<style lang="scss" scoped>
.separator {
  border-bottom: 0px;
  border-top: 1px solid $border-color;
  margin: 0rem;
}
</style>
