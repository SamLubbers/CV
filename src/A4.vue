<template>
  <div class="d-flex justify-content-center">
    <div class="A4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "A4",
};
</script>

<style lang="scss">
$A4-height: 29.7cm;
$A4-width: 21cm;

// make page A4 size
.A4 {
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
  font-size: 0.7rem;
}

p {
  margin: 0;
  margin-top: $paragraph-space;
  &:first-child {
    margin-top: 0;
  }
}

@media screen {
  body {
    background-color: #ededed;
  }
  .A4 {
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
  // color: #273849;
  color: #304455;
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

.main-title {
  padding: 0rem;
  line-height: 2rem;
}
</style>
