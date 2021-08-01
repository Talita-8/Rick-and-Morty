<template>
  <header>
    <Stars />
    <Stars />
    <img src="/../../static/logo.png" />
    <Stars />
    <Stars />
  </header>
</template>

<script>
/* eslint-disable */
import Stars from "../atoms/Stars";
export default {
  name: "Header",
  components: {
    Stars
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
</style>
