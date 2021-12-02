<template>
  <counters-list></counters-list>
  <add-counter></add-counter>
</template>
<script>
import CountersList from "./CountersList.vue";
import AddCounter from "./AddCounter.vue";
export default {
  components: { CountersList, AddCounter },
  provide() {
    return {
      countdowners: this.countdowners,
      addCountDowner: this.addCountDowner,
    };
  },
  data() {
    return {
      countdowners: JSON.parse(localStorage.getItem("my_countdowners"))||[],
    };
  },

  methods: {
    addCountDowner(endTime, title, url) {
      const newCountDowner = {
        id: new Date().toISOString(),
        title: title,
        endTime: endTime,
        url: url,
      };
      this.countdowners.push(newCountDowner);
      localStorage.setItem(
        "my_countdowners",
        JSON.stringify(this.countdowners)
      );
    },
  },
};
</script>