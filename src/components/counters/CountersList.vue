<template>
  <div class="countdowners__wrapper">
    <counter-clock
      v-for="countdowner in countdowners"
      :key="countdowner.id"
      :title="countdowner.title"
      :endTime="countdowner.endTime"
      :countdowner="countdowner"
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
  