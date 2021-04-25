<template>
  <div class="container">
    <span class="card-title">404</span>
    <div class="not-found-sentence">This is not the web page you are looking for.</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
}

export default Vue.extend({
  layout: 'common',
  data (): DataType {
    return {
    }
  },
  methods: {
  },
})
</script>

<style scoped>

.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-title {
  font-size: 100px;
}

.not-found-sentence {
  font-size: 30px;
}

</style>
