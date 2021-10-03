<template>
  <div class="card-container">
    <Load v-if='info == ""'/>
    <Card :info="character" v-for="(character, key) in info" :key="key" />
  </div>
</template>

<script>
/* eslint-disable */
import Load from "../atoms/Load";
import Card from "../atoms/Card";
import axios from "axios";

export default {
  name: "Characters",
  components: {
    Load,
    Card,
  },
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    let character = this;
    axios
      .get("http://127.0.0.1:8000/api/characters")
      .then(function (response) {
        character.info = response.data;
        console.log(info)
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style scoped>
 .card-container {
   width: 100%;
   justify-content: space-between;
   display: flex;
   flex-wrap: wrap;
 }
</style>