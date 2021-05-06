<template>
  <h1 class="sub-title">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
}

export default Vue.extend({
  name: 'DefaultSubTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data (): DataType {
    return {
    }
  },
  methods: {
  },
})
</script>

<style scoped>

.sub-title {
  margin: 0 0 70px 0;
  font-size: 45px;
  text-align: left;
}

</style>
