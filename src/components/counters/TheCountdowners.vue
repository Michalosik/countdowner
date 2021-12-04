<template>
  <button class="add-btn" @click="toggleAddCounterForm">
    <span class="sr-only" aria-hidden="false">Add new counter</span>
    <font-awesome-icon
      icon="plus-circle"
      aria-hidden="true"
      class="trash-alt"
    />
  </button>
  <add-countdowner v-if="addCounterFormIsVisibile"></add-countdowner>
  <counters-list></counters-list>
</template>
<script>
import AddCountdowner from "./AddCountdowner.vue";
import CountersList from "./CountersList.vue";

export default {
  components: { CountersList, AddCountdowner },
  provide() {
    return {
      countdowners: this.countdowners,
      removeCountdowner: this.removeCountdowner,
      addCountdowner: this.addCountdowner,
      toggleFormVisibility: this.toggleAddCounterForm,
    };
  },
  data() {
    return {
      countdowners: JSON.parse(localStorage.getItem("my_countdowners")) || [],
      addCounterFormIsVisibile: false,
    };
  },

  methods: {
    addCountdowner(endTime, title, url) {
      const newCountdowner = {
        id: new Date().toISOString(),
        title: title,
        endTime: endTime,
        url: url,
      };
      this.countdowners.unshift(newCountdowner);
      this.updateLocalStorage();
    },
    removeCountdowner(id) {
      const countIndex = this.countdowners.findIndex(
        (count) => count.id === id
      );
      this.countdowners.splice(countIndex, 1);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem(
        "my_countdowners",
        JSON.stringify(this.countdowners)
      );
    },
    toggleAddCounterForm() {
      this.addCounterFormIsVisibile = !this.addCounterFormIsVisibile;
    },
  },
};
</script>
<style scoped>
.add-btn {
  margin: 1rem 0 0;
  background: none;
  border: 1px solid transparent;
  font-size: 3rem;
  color: #00adb5;
  cursor: pointer;
  transition: color 0.3s ease-out;
}
.add-btn:hover {
  color: #008000;
}
</style>