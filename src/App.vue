<template>
  <div id="app">
    <Header />
    <div class="button-container">
      <Button button-title="Conheça os personagens" page-name="/characters" />
      <Button button-title="Quiz: Quem você seria?" page-name="/quiz" />
    </div>
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import Header from "./components/molecules/Header";
import Button from "./components/atoms/Button";

export default {
  name: "App",
  components: {
    Header,
    Button
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

.button-container {
  display: flex;
  justify-content: center;
}
</style>
