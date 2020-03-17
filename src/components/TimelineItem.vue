<template>
  <div class="item">
    <div class="date">
      <div class="d-flex flex-column" style="height: 100%;">
        <h6><slot name="startDate" /></h6>
        <div class="date-connector" v-if="$slots.endDate"></div>
        <h6><slot name="endDate" /></h6>
      </div>
    </div>
    <div class="title">
      <h5><slot name="title" /></h5>
    </div>
    <div class="description">
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
$border-color: #e1e4e8;

.date {
  grid-area: date;
  padding-top: 1rem;
  border-right: 1px solid $border-color;
  text-align: right;
  padding-right: 1rem;
}
.title {
  grid-area: title;
  padding-top: 1rem;
  padding-left: 1rem;
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
