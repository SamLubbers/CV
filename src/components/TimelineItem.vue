<template>
  <div class="item">
    <div class="date">
      <div class="d-flex flex-column" style="height: 100%;">
        <p><slot name="startDate" /></p>
        <div class="date-connector" v-if="$slots.endDate"></div>
        <p><slot name="endDate" /></p>
      </div>
    </div>
    <div class="title">
      <p><slot name="title" /></p>
    </div>
    <div class="description" v-if="$slots.description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineItem"
};
</script>

<style scoped lang="scss">
.date {
  grid-area: date;
  padding-top: 1rem;
  border-right: 1px solid $border-color;
  text-align: right;
  padding-right: 1rem;
  p {
    font-weight: 600;
    margin-top: 0;
  }
}
.title {
  grid-area: title;
  padding-top: 1rem;
  padding-left: 1rem;
  font-weight: 600;
}
.description {
  grid-area: description;
  padding-top: 0.5rem;
  padding-left: 1rem;
}

.date-connector {
  flex: 1;
  border-right: 1px solid $border-color;
  margin-right: 2px;
}

.item {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto;
  grid-template-areas:
    "date title"
    "date description";
}
</style>
