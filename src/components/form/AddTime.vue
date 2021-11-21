<template>
  <form>
    <input type="date" v-model="enteredDate" />
    <input type="text" v-model="enteredTitle" />
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
    };
  },
  inject: ["addCountDowner"],
  methods: {
    saveCountdowner() {
      this.addCountDowner(this.enteredDate, this.enteredTitle);
    },
  },
};
</script>