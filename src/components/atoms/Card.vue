<template>
    <div class="card">
      <img :src="info.image" class="image"/>
        <p class="infos">
            <ul>
                <li>Name: {{info.name}}</li>
                <li>Status: {{info.status}}</li>
                <li>Specie: {{info.species}}</li>
                <li>Gender: {{info.gender}}</li>
            </ul>
        </p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Card",
  props: {
    info: ""
  },
}
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    background-color: rgb(20, 20, 20);
    border-radius: 0.5rem;
    width: fit-content;
    margin: 1rem;
  }
  .image {
   border-radius: 1rem;
   width: 10rem;
   height: 10rem;
   border: 0.2rem solid rgb(2, 255, 234);
 }
 ul {
   padding-left: 0;
 }
 li {
   list-style: none;
 }
 .infos {
   padding: 1rem;
   background-color: black;
   color: chartreuse;
   border-radius: 0 0.2rem 0.2rem 0;
   font-family: 'Quantico', sans-serif;
 }
</style>
 