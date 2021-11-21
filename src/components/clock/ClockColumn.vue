<template>
  <div class="time__column">
    <span class="time__value">{{ value }}</span>
    <span class="time__name">{{ name }}</span>
  </div>
</template>
<script>
export default {
  props: ["value", "name"],
};
</script>
<style scoped>
.time__column {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  padding: 1rem;
  margin: 1rem;
  color: #fff;
  z-index: 1;
}
.time__column .time__value {
  font-size: 5rem;
  font-weight: bold;
  border-bottom: 2px solid #fff;
}
.time__column .time__name {
  font-size: 1.5rem;
}
</style>