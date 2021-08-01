<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/molecules/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
body {
  background: url("/../static/background.png");
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
