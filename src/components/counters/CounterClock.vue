<template>
  <base-counter>
    <h3>{{ title }}</h3>
    <div class="time__container">
      <div class="time__column">
        <span class="time__value">{{ year }}</span>
        <span v-if="year > 1" class="time__name">years</span>
        <span v-else class="time__name">year</span>
      </div>
      <div class="time__column">
        <span class="time__value">{{ month }}</span>
        <span v-if="month > 1" class="time__name">months</span>
        <span v-else class="time__name">month</span>
      </div>
      <div class="time__column">
        <span class="time__value">{{ day }}</span>
        <span v-if="day > 1" class="time__name">days</span>
        <span v-else class="time__name">day</span>
      </div>
      <div class="time__column">
        <span class="time__value">{{ hour }}</span>
        <span v-if="hour > 1" class="time__name">hours</span>
        <span v-else class="time__name">hour</span>
      </div>
      <div class="time__column">
        <span class="time__value">{{ minute }}</span>
        <span v-if="minute > 1" class="time__name">minutes</span>
        <span v-else class="time__name">minute</span>
      </div>
      <div class="time__column">
        <span class="time__value">{{ second }}</span>
        <span v-if="second > 1" class="time__name">seconds</span>
        <span v-else class="time__name">second</span>
      </div>
    </div>
  </base-counter>
</template>
<script>
export default {
  props: ["countdowner", "title"],
  data() {
    return {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      countdownerProp: this.countdowner,
    };
  },
  methods: {
    startCountDown() {
      const x = setInterval(() => {
        const startDate = new Date().getTime();
        const differenceInTime = this.countdownerProp.endTime - startDate;
        this.year = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 365));
        this.month = Math.floor(
          (differenceInTime % (1000 * 60 * 60 * 24 * 365)) /
            (1000 * 60 * 60 * 24 * 30)
        );
        this.day = Math.floor(
          (differenceInTime % (1000 * 60 * 60 * 24 * 30)) /
            (1000 * 60 * 60 * 24)
        );
        this.hour = Math.floor(
          (differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minute = Math.floor(
          (differenceInTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.second = Math.floor((differenceInTime % (1000 * 60)) / 1000);

        if (differenceInTime < 0) {
          (this.year = "D"),
            (this.month = "O"),
            (this.day = "N"),
            (this.hour = "E"),
            (this.minute = ":"),
            (this.second = ")");
          clearInterval(x);
        }
      }, 1000);
    },
  },
  created() {
    this.startCountDown();
  },
};
</script>
<style scoped>
h3 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.time__container {
  display: flex;
}
.time__column {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: inherit;
  padding: 1.5rem;
  margin: 2rem;
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