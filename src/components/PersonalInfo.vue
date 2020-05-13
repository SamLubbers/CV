<template>
  <div class="section">
    <div class="image-container d-flex justify-content-center align-items-end">
      <img src="@/assets/profile_stencil.jpg" class="image" />
    </div>
    <div class="info d-flex flex-column" style="flex: 1">
      <div class="d-flex align-items-center justify-content-between">
        <h1 class="main-title">Sam Lubbers</h1>
        <div>
          <div class="contact d-flex" style="flex: 1">
            <div class="d-flex">
              <Octicon :icon="mail" />
              <a href="mailto:samlubbers@protonmail.com">
                samlubbers@protonmail.com
              </a>
            </div>
            <div class="d-flex">
              <Octicon :icon="deviceMobile" />
              <a href="tel:+31625541099">
                +31 (0) 625541099
              </a>
            </div>

            <div class="d-flex">
              <Octicon :icon="markGithub" />
              <a href="https://github.com/samlubbers/" target="_blank">
                /samlubbers
              </a>
            </div>
          </div>
        </div>
      </div>
      <BioText />
    </div>
  </div>
</template>

<script>
const { Octicon, markGithub, mail, deviceMobile } = require("octicons-vue");
import BioText from "@/texts/BioText";

export default {
  name: "PersonalInfo",
  components: { Octicon, BioText, BioText },
  data: () => ({
    markGithub,
    mail,
    deviceMobile,
  }),
};
</script>

<style lang="scss" scoped>
.contact {
  a {
    margin-right: 0.5rem;
    margin-left: 0.2rem;
    color: #304455;
  }
}

.info {
  margin: 0rem 0rem $section-space $section-space;
}

.image {
  width: 100px;
}

.section {
  display: grid;
  grid-template-columns: $left-column-width $right-column-width;
  grid-template-rows: auto;
  grid-template-areas: "image-container info";
}
</style>
