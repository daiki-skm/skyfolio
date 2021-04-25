<template>
  <div class="common-body">
    <h1 class="sub-title">Activities</h1>
    index
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

.common-body {
  max-width: 960px;
  padding: 0;
  margin: 0 auto;
}

.sub-title {
  margin-bottom: 40px;
  line-height: 1.0;
  /* font-family: 'Lato', sans-serif; */
  font-weight: 100;
  font-size: 40px;
  letter-spacing: 0.05em;
  margin: 0 0 70px 0;
  font-size: 46px;
  text-align: left;
}

</style>
