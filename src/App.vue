<template>
  <the-header></the-header>
  <the-navigation></the-navigation>
  <main>
    <the-countdowners></the-countdowners>
  </main>
</template>
<script>
import TheNavigation from "./components/layouts/TheNavigation.vue";
import TheCountdowners from "./components/counters/TheCountdowners.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: { TheNavigation, TheCountdowners, TheHeader },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap");
html {
  font-family: "Roboto", sans-serif;
  color: #222831;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #eee;
}
main {
  display: flex;
  justify-content: center;
}
.sr-only {
  visibility: hidden;
}
</style>
