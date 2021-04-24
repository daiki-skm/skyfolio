<template>
  <div class="container">
    <div>
      <img
        src="/gopher.png"
        alt="gopher"
      />
      <h1 class="title">
        Welcome to skyfolio!
      </h1>
      <div class="links">
        <a
          href="/sub/"
          rel="noopener noreferrer"
          class="button--green"
        >
          About Me
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

.container {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  /* font-family: 'Nothing You Could Do', cursive; */
  font-family: 'Bad Script', cursive;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #87a4df;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
