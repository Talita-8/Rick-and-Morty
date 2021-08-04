<template>
  <button @click="$router.push(pageName)">{{ buttonTitle }}</button>
</template>

<script>
/* eslint-disable */
export default {
  name: "Button",
  props: ["buttonTitle", "pageName"]
};
</script>

<style>
button {
  background-color: rgba(55, 21, 117, 0.384);
  border: none;
  color: rgb(31, 253, 61);
  margin: 2rem;
  padding: 1rem;
  border-radius: 7px;
  font-family: "Coda", cursive;
  font-size: 1.5rem;
}
</style>
