<template>
  <form>
    <input type="date" v-model="enteredDate" />
    <input type="text" v-model="enteredTitle" />
    <input type="text" v-model="enteredURL" />
    <router-link @click="saveCountdowner" to="/countdowners"
      >Add Countdowner</router-link
    >
  </form>
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
  inject: ["addCountDowner"],
  methods: {
    saveCountdowner() {
      const dateToSubmit = new Date(this.enteredDate).getTime();
      this.addCountDowner(dateToSubmit, this.enteredTitle, this.enteredURL);
    },
  },
};
</script>