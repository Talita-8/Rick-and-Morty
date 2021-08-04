<template>
  <main>
    <div></div>
    <div></div>
    <div></div>
  </main>
</template>

<script>
/* eslint-disable */
export default {
  name: "Load"
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

div {
  height: 1rem;
  width: 1rem;
  background-color: rgb(0, 238, 255);
  animation: fade 3000ms infinite;
  border-radius: 50%;
  margin: 0.4rem;
}

@keyframes fade {
  10% {
    background-color: rgba(0, 238, 255, 0.705);
  }
  50% {
    background-color: rgba(0, 238, 255, 0.452);
  }
  100% {
    background-color: rgba(0, 238, 255, 0.144);
  }
}
</style>
