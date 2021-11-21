<template>
  <the-navigation></the-navigation>
  <main>
    <router-view> </router-view>
  </main>
</template>
<script>
import TheNavigation from "./components/UI/TheNavigation.vue";

export default {
  components: { TheNavigation },
  data() {
    return {
      startDate: Date.now(),
      differenceInTime: null,
      countdowners: [
        {
          id: 0,
          title: "Test",
          timeTo: "",
          counter: [
            { id: 0, name: "years", value: 0 },
            { id: 1, name: "months", value: 0 },
            { id: 2, name: "days", value: 0 },
            { id: 3, name: "hours", value: 0 },
            { id: 4, name: "minutes", value: 0 },
            { id: 5, name: "seconds", value: 0 },
          ],
        },
        {
          id: 1,
          title: "test2",
          timeTo: "",
          counter: [
            { id: 0, name: "years", value: 0 },
            { id: 1, name: "months", value: 0 },
            { id: 2, name: "days", value: 0 },
            { id: 3, name: "hours", value: 0 },
            { id: 4, name: "minutes", value: 0 },
            { id: 5, name: "seconds", value: 0 },
          ],
        },
      ],
    };
  },
  provide() {
    return {
      countdowners: this.countdowners,
      addCountDowner: this.addCountDowner,
      counters: this.countdowners.counter,
    };
  },
  methods: {
    addCountDowner(date, title) {
      const newCountdowner = {
        id: new Date().toISOString(),
        title: title,
        timeTo: date,
        counter: [
          { id: 0, name: "years", value: 0 },
          { id: 1, name: "months", value: 0 },
          { id: 2, name: "days", value: 0 },
          { id: 3, name: "hours", value: 0 },
          { id: 4, name: "minutes", value: 0 },
          { id: 5, name: "seconds", value: 0 },
        ],
      };
      this.countdowners.push(newCountdowner);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
html {
  font-family: "Roboto", sans-serif;
}
</style>
