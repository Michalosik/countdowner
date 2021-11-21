<template>
  <form>
    <input type="date" v-model="enteredDate" />
    <p></p>
    <button @click.prevent="$emit('new-date', enteredDate)">
      Start CountDown
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      enteredDate: null,
    };
  },
  emits: ["new-date"],
};
</script>