<template>
  <the-navigation></the-navigation>
  <main>
    <the-countdowners></the-countdowners>
  </main>
</template>
<script>
import TheNavigation from "./components/layouts/TheNavigation.vue";
import TheCountdowners from "./components/counters/TheCountdowners.vue";

export default {
  components: { TheNavigation, TheCountdowners },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
html {
  font-family: "Roboto", sans-serif;
}
main {
  display: flex;
  justify-content: center;
}
</style>
