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

<style src="./app.css"></style>
