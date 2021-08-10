<template>
    <div>
      <img :src="info[0].image"/>
        <p>
            <ul>
                <li>{{info[0].name}}</li>
                <li>{{info[0].status}}</li>
                <li>{{info[0].species}}</li>
                <li>{{info[0].gender}}</li>
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

<style>

</style>