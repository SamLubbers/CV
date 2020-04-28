<template>
  <div class="label">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Label"
};
</script>

<style lang="scss" scoped>
.label {
  display: inline-block;
  background-color: #304455;
  color: #fff;
  padding: 0.05em 4px;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
  margin-left: 2px;
}
</style>
