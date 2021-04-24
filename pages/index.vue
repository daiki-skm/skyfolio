<template>
  <div class="container">
    <transition name="el-zoom-in-center">
      <div v-show="show">
        <h1 class="title">
          Welcome to skyfolio!
        </h1>
        <a
          href="/sub/"
          rel="noopener noreferrer"
          class="button--brown"
        >
          About Me
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  show: boolean,
}

export default Vue.extend({
  layout: 'common',
  data (): DataType {
    return {
      show: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 1500)
  },
})
</script>

<style scoped>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: Verdana,sans-serif;
  color: #666;
  font-size: 100px;
  font-weight: bold;
  text-shadow: 4px 4px 0px #eee, 5px 5px 0px #707070;
  margin-bottom: 20px;
}


.button--brown {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #666;
  color: #666;
  text-decoration: none;
  padding: 10px 30px;
  width: 200px;
}

.button--brown:hover {
  color: #fff;
  background-color: #666;
  width: 200px;
}

</style>
