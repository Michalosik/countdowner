<template>
  <div v-if="countdowners.length > 0" class="countdowners__wrapper">
    <counter-clock
      v-for="countdowner in countdowners"
      :key="countdowner.id"
      :title="countdowner.title"
      :endTime="countdowner.endTime"
      :style="{ backgroundImage: 'url(' + countdowner.url + ')' }"
    ></counter-clock>
  </div>
  <div v-else class="countdowners__wrapper">
    <p>There are no timers set, use this button with white cross to add one!</p>
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

p {
  font-weight: bold;
}
@media only screen and (max-width: 1200px) {
  .countdowners__wrapper {
    min-width: 100%;
    padding: 0;
  }
}
</style>
  