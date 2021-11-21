<template>
  <div>
    <clock-counter>
      <div
        class="time__column"
        v-for="counter in counters"
        :key="counter.id"
        :name="counter.name"
        :id="counter.id"
        :value="counter.value"
      >
        <span class="time__value">{{ counter.value }}</span>
        <span class="time__name">{{ counter.name }}</span>
      </div>
    </clock-counter>
    <add-time @new-date="calcTime"></add-time>
    <p>{{ endDate }} {{ startDate }} {{ differenceInTime }}</p>
  </div>
</template>
<script>
import ClockCounter from "./components/clock/ClockCounter.vue";
import AddTime from "./components/form/AddTime.vue";
export default {
  components: { ClockCounter, AddTime },
  data() {
    return {
      endDate: null,
      startDate: Date.now(),
      differenceInTime: null,
      counters: [
        { id: 0, name: "years", value: 0 },
        { id: 1, name: "months", value: 0 },
        { id: 2, name: "days", value: 0 },
        { id: 3, name: "hours", value: 0 },
        { id: 4, name: "minutes", value: 0 },
        { id: 5, name: "seconds", value: 0 },
      ],
      countdowners: [{ id: 0, title: "Test", timeTo: null }],
    };
  },
  methods: {
    calcTime(enteredDate) {
      const splitedDate = enteredDate.split("-");
      this.endDate = new Date(splitedDate);
      this.differenceInTime = this.endDate - this.startDate;
      this.setDatesNumbers();
      this.startCountDown();
    },
    startCountDown() {
      const that = this;
      const x = setInterval(() => {
        if (that.differenceInTime > 0) {
          that.setDatesNumbers();
          that.startDate = Date.now();
          that.differenceInTime = that.endDate - that.startDate;
        } else {
          clearInterval(x);
          this.counters[0].value = "D";
          this.counters[1].value = "O";
          this.counters[2].value = "N";
          this.counters[3].value = "E";
          this.counters[4].value = ":";
          this.counters[5].value = ")";
        }
      }, 1000);
    },
    setDatesNumbers() {
      this.counters[0].value = Math.floor(
        this.differenceInTime / (1000 * 60 * 60 * 24 * 365)
      );
      this.counters[1].value = Math.floor(
        (this.differenceInTime % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 30)
      );
      this.counters[2].value = Math.floor(
        (this.differenceInTime % (1000 * 60 * 60 * 24 * 30)) /
          (1000 * 60 * 60 * 24)
      );
      this.counters[3].value = Math.floor(
        (this.differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.counters[4].value = Math.floor(
        (this.differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.counters[5].value = Math.floor(
        (this.differenceInTime % (1000 * 60)) / 1000
      );
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
