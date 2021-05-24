<template>
  <span class="Atomic">{{data}}</span>
</template>

<script>
export default {
  name: "Atomic",
  props: {
    data: Number
  }
};
</script>

<style scoped>
.Atomic {
  background-color: deepskyblue;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
}
</style>
