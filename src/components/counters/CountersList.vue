<template>
  <div class="countdowners__wrapper">
    <counter-clock
      v-for="countdowner in countdowners"
      :key="countdowner.id"
      :title="countdowner.title"
      :endTime="countdowner.endTime"
      :style="{ backgroundImage: 'url(' + countdowner.url + ')' }"
    ></counter-clock>
  </div>
</template>
<script>
import CounterClock from "./CounterClock.vue";
export default {
  components: { CounterClock },
  inject: ["countdowners"],
};
</script>
<style scoped>
.countdowners__wrapper {
  display: flex;
  padding: 0 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
  