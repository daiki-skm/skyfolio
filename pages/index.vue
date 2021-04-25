<template>
  <div class="container">
    <div class="dalian">
      <nuxt-link to="/activities/dalian/">
        <img src="/dalian-top.png" alt="dalian"/>
      </nuxt-link>
    </div>
    <div class="win">
      <nuxt-link to="/activities/win/">
        <img src="/win-top.png" alt="win"/>
      </nuxt-link>
    </div>
    <div class="hack-trek">
      <nuxt-link to="/activities/hackTrek/">
        <img src="/hack-trek-top.png" alt="hack-trek"/>
      </nuxt-link>
    </div>
    <i class="el-icon-arrow-up" @click="scrollUp" />
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
  methods: {
    scrollUp(): void {
      window.scroll({
        top: 0,
        behavior: "smooth",
      })
    },
  }
})
</script>

<style scoped>

.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.dalian {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: black;
  margin-bottom: 50px;
}

.dalian img{
  width: 960px;
  height: 420px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.dalian:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
}

.win {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: black;
  margin-bottom: 50px;
}

.win img{
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.win:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
}

.hack-trek {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: black;
  margin-bottom: 50px;
}

.hack-trek img{
  width: 960px;
  height: 420px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.hack-trek:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
}

.el-icon-arrow-up {
  cursor: pointer;
  display: block;
  font-size: 3rem;
  margin-bottom: 50px;
}

</style>
