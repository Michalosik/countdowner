<template>
  <div class="counter__card">
    <div class="counter__card-shadow"></div>
    <div class="counter__card-counter"><slot name="counter"></slot></div>
    <div class="counter__card-controls">
      <slot name="controls"></slot>
    </div>
  </div>
</template>
<style scoped>
.counter__card {
  position: relative;
  margin: 1rem auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  box-shadow: 0px 5px 7px rgba(34, 40, 49, 0.25);
}
.counter__card-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(34, 40, 49, 0.5);
  z-index: 0;
}
.counter__card-counter {
  padding: 1rem;
  border-radius: 1rem;
  color: #eee;
  z-index: 5;
}
.counter__card-controls {
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 10;
}
</style>