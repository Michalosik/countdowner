<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script>

import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: { TheHeader },
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sr-only {
  visibility: hidden;
}
</style>
