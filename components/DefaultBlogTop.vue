<template>
  <div>
    <h3 class="blog-title">
      {{ title }}
    </h3>
    <p class="blog-day">
      {{ day }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
}

export default Vue.extend({
  name: 'DefaultBlogTop',
  props: {
    title: {
      type: String,
      default: '',
    },
    day: {
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

.blog-title {
  float: left;
  width: 70%;
  text-align: left;
  font-size: 32px;
  margin-bottom: 50px;
}

.blog-day {
  float: right;
  width: 30%;
  margin-top: 15px;
  margin-bottom: 63px;
  text-align: right;
}

</style>
