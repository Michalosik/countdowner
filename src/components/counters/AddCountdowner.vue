<template>
  <div class="form__wrapper">
    <form @submit.prevent="saveCountdowner">
      <div>
        <label for="date">Date to:</label>
        <input id="date" type="datetime-local" v-model="enteredDate" />
      </div>
      <div>
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="enteredTitle" />
      </div>
      <div>
        <label for="url">Background img URL:</label>
        <input type="text" v-model="enteredURL" />
      </div>
      <base-button @click="$router.push('countdowners')">Add This!</base-button>
      <button @click="toggleFormVisibility" class="close-btn" type="button">
        <span aria-hidden="false" class="sr-only">Close</span
        ><span aria-hidden="true">X</span>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      enteredDate: null,
      enteredTitle: "",
      enteredURL: "",
    };
  },
  inject: ["addCountdowner", "toggleFormVisibility"],
  methods: {
    saveCountdowner() {
      const dateToSubmit = new Date(this.enteredDate).getTime();
      this.addCountdowner(dateToSubmit, this.enteredTitle, this.enteredURL);
    },
  },
};
</script>
<style scoped>
.form__wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(238, 238, 238, 0.5);
  z-index: 50;
}
@supports (backdrop-filter: blur(1rem)) {
  .form__wrapper {
    background-color: rgba(237, 237, 237, 0.25);
    backdrop-filter: blur(1rem);
  }
}
form {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  padding: 2rem;
  border: 0.3rem solid #00adb5;
  border-radius: 1rem;
  background-color: #eee;
  box-shadow: 5px 10px 7px rgba(0, 0, 0, 0.4);
  z-index: 51;
}
form div {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}
form input {
  padding: 0.5rem;
  font-family: inherit;
  border-radius: 1rem;
  border: 0.1rem solid #00adb5;
  background-color: #fff;
  font-size: inherit;
}
form label {
  margin: 0 0 0.5rem;
}
button {
  margin: 1rem 0;
}
.close-btn {
  position: absolute;
  top: 0rem;
  right: 1rem;
  background: none;
  border: 1px solid transparent;
  color: #00adb5;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
}
.close-btn:hover {
  color: red;
}
</style>

