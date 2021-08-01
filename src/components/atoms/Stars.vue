<template>
  <div class="constellation">
    <div class="box">
      <div class="star"></div>
      <div class="star star-position-two"></div>
      <div class="star star-position-three"></div>
      <div class="star star-position-four"></div>
      <div class="star star-position-five"></div>
      <div class="star"></div>
      <div class="star star-position-two"></div>
      <div class="star star-position-three"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Stars"
};
</script>

<style>
.constellation {
  justify-content: space-between;
}

.star {
  height: 0.3rem;
  width: 0.3rem;
  background-color: rgb(176, 128, 216);
  animation: shine 1500ms infinite;
  margin: 0.6rem;
  border-radius: 50%;
}

.star-position-two {
  margin-left: 2rem;
  animation: shine 4000ms infinite;
}

.star-position-three {
  margin-left: 6rem;
  animation: shine 2000ms infinite;
}

.star-position-four {
  margin-left: 6rem;
  animation: shine 3000ms infinite;
}

.star-position-five {
  margin: 1rem 4rem;
}

.star-position-six {
  margin-left: 10rem;
}

@keyframes shine {
  10% {
    background-color: rgb(204, 176, 228);
  }
  50% {
    background-color: rgb(234, 193, 236);
    width: 0.4rem;
    height: 0.4rem;
  }
  100% {
    background-color: rgb(223, 231, 248);
  }
}
</style>
