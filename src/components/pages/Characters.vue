<template>
  <div>
    <Load />
    <!-- {{ info }} -->
  </div>
</template>

<script>
/* eslint-disable */
import Load from "../atoms/Load";
import axios from "axios";

export default {
  name: "Characters",
  components: {
    Load
  },
  data() {
    return {
     info: ''
    } 
  },
  mounted() {
    let character = this
    axios
      .get("http://127.0.0.1:8000/api/characters")
      .then(function(response) {
        character.info = response.data
        console.log(hei, "info do theen")
      })
      .catch(function(err) {
        console.log(err)
      })
  }
};
</script>
