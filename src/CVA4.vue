<template>
  <div class="d-flex justify-content-center">
    <div class="cv">
      <PersonalInfo />
      <hr class="separator" />
      <Timeline />
    </div>
  </div>
</template>

<script>
import PersonalInfo from "@/components/PersonalInfo";
import Timeline from "@/components/Timeline";

export default {
  name: "CVA4",
  components: {
    PersonalInfo,
    Timeline
  }
};
</script>

<style lang="scss">
$border-color: #e1e4e8;

$A4-height: 29.7cm;
$A4-width: 21cm;

// make page A4 size
.cv {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #304455;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: $A4-width;
  height: $A4-height;
  background-color: #fff;
  padding: 10mm;
}

a,
span,
p {
  font-size: 0.8rem;
}

p {
  margin: 0;
  margin-top: 1rem;
  &:first-child {
    margin-top: 0;
  }
}

@media screen {
  body {
    background-color: #ededed;
  }
  .cv {
    box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  }
}

@media print {
  body {
    width: $A4-width;
    height: $A4-height;
    margin: 0;
  }
}

h1,
h2,
h3,
h4,
strong {
  font-weight: 600;
  color: #273849;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  line-height: 1rem;
}

a {
  color: #304455c0;
  text-decoration: none;
}

.separator {
  border-bottom: 0px;
  border-top: 1px solid $border-color;
  margin: 1rem 0rem 0rem 0rem;
}
</style>
