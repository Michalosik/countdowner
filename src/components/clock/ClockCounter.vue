<template>
  <div class="counter">
    <div class="counter__shadow"></div>
    <slot />
  </div>
</template>
<script>
export default {
  props: ["counters", "countdowners"],
};
</script>
<style>
.counter {
  position: relative;
  display: flex;
  padding: 2em;
  align-items: center;
  border-radius: 1rem;
  background-image: url("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
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