<template>
  <div class="d-flex justify-content-between align-items-end">
    <h1 class="my-0" style="line-height: 2rem">Sam Lubbers</h1>
    <div>
      <div class="d-flex flex-column contact align-items-end" style="flex: 1">
        <div class="d-flex align-items-center">
          <a href="https://github.com/samlubbers/" target="_blank">
            /samlubbers

            <Octicon :icon="markGithub" />
          </a>
        </div>
        <div class="d-flex align-items-center" style="margin-right: 3px">
          <a href="tel:+31625541099">
            +31 (0) 625541099
            <Octicon :icon="deviceMobile" />
          </a>
        </div>
        <div class="d-flex align-items-center">
          <a href="mailto:samlubbers@protonmail.com">
            samlubbers@protonmail.com

            <Octicon :icon="mail" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { Octicon, markGithub, mail, deviceMobile } = require("octicons-vue");

export default {
  name: "PersonalInfo",
  components: { Octicon },
  data: () => ({
    markGithub,
    mail,
    deviceMobile
  })
};
</script>

<style lang="scss" scoped>
.contact {
  text-align: right;
  a {
    margin-right: 0.5rem;
    color: #304455;
  }
}
</style>
