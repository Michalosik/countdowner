<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/countdowners">List of Timers</router-link>
        </li>
        <li>
          <router-link to="/add">Add new Countdown Timer</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 5rem;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid #00adb5;
  cursor: pointer;
  color: #00adb5;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  transition: color 0.3s, border-color, 0.3s, background-color 0.3s;
}

a:hover,
a:active,
a.router-link-active {
  color: #eee;
  border-color: #eee;
  background-color: #00adb5;
}
</style>