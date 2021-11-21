<template>
  <div class="counter">
    <div class="counter__shadow"></div>
    <div
      v-for="counter in countdowners"
      :key="counter.id"
      class="counter__columns"
    >
      <h2>{{ counter.title }}</h2>
      <clock-column
        v-for="count in counter.counter"
        :key="count.name"
        :name="count.name"
        :value="count.value"
      >
      </clock-column>
    </div>
  </div>
</template>
<script>
import ClockColumn from "./ClockColumn.vue";
export default {
  components: { ClockColumn },
  inject: ["countdowners"],
  props: ["title"],
  data() {
    return {};
  },
  methods: {},
  created() {
    const countdowners = this.countdowners;
    for (const counter of countdowners) {
      const splitedDate = counter.timeTo.split("-");
      const endDate = new Date(splitedDate).getTime();
      const startDate = Date.now();
      let differenceInTime = endDate - startDate;
      const x = setInterval(() => {
        if (differenceInTime > 0) {
          let startDate = Date.now();
          let differenceInTime = endDate - startDate;
          counter.counter[0].value = Math.floor(
            differenceInTime / (1000 * 60 * 60 * 24 * 365)
          );
          counter.counter[1].value = Math.floor(
            (differenceInTime % (1000 * 60 * 60 * 24 * 365)) /
              (1000 * 60 * 60 * 24 * 30)
          );
          counter.counter[2].value = Math.floor(
            (differenceInTime % (1000 * 60 * 60 * 24 * 30)) /
              (1000 * 60 * 60 * 24)
          );
          counter.counter[3].value = Math.floor(
            (differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          counter.counter[4].value = Math.floor(
            (differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
          );
          counter.counter[5].value = Math.floor(
            (differenceInTime % (1000 * 60)) / 1000
          );
        } else {
          clearInterval(x);
          counter.counter[0].value = "D";
          counter.counter[1].value = "O";
          counter.counter[2].value = "N";
          counter.counter[3].value = "E";
          counter.counter[4].value = ":";
          counter.counter[5].value = ")";
        }
      }, 1000);
    }
  },
};
</script>
<style>
.counter {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2em;
  align-items: center;
  border-radius: 1rem;
  background-image: url("https://pixabay.com/get/g9796fa0860126c5fd2506d5ba6f45b191691ecbb82db607b016d666f0d7f468799c756ab3a56efdd499640c6d85c529cc469d9db950e4f83404e0f9aba30b77352a2340e4a2ec18d07bdaeb28923ab95_1920.jpg");
  background-size: cover;
  background-position: center;
  justify-content: center;
}
.counter__shadow {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  background-color: rgba(3, 0, 48, 0.55);
  z-index: 0;
}
.counter__columns {
  display: flex;
  padding: 1rem;
  margin: 1rem;
}
</style>