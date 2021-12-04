<template>
  <button>
    <slot />
  </button>
</template>
<style scoped>
button {
  font-family: inherit;
  background: transparent;
  border: 1px solid #00adb5;
  border-radius: 1rem;
  cursor: pointer;
  color: #00adb5;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  transition: color 0.3s, border-color, 0.3s, background-color 0.3s;
}
button:hover,
button:active {
  color: #eee;
  border-color: #eee;
  background-color: #00adb5;
}
</style>