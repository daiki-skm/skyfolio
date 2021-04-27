<template>
  <div class="container">
    <div class="link-card">
      <nuxt-link to="/activities/dalian/">
        <el-card class="dalian">
          <img src="/dalian-top.png" alt="win"/>
        </el-card>
      </nuxt-link>
    </div>
    <div class="link-card">
      <nuxt-link to="/activities/win/">
        <el-card class="win">
          <img src="/win-top.png" alt="win"/>
        </el-card>
      </nuxt-link>
    </div>
    <div class="link-card">
      <nuxt-link to="/activities/hackTrek/">
        <el-card class="hack-trek">
          <img src="/hack-trek-top.png" alt="hack-trek"/>
        </el-card>
      </nuxt-link>
    </div>
    <i class="el-icon-arrow-up" @click="scrollUp" />
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
  mounted() {
  },
  methods: {
    scrollUp(): void {
      window.scroll({
        top: 0,
        behavior: "smooth",
      })
    },
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

.link-card {
  display: inline-block;
  width: 960px;
  height: 420px;
  margin-bottom: 50px;
}

a {
  color: #333;
  text-decoration: none;
}

.box-card {
  width: 960px;
  height: 420px;
  cursor: pointer;
  background: #fffffc;
  transition-duration: 0.3s;
}

.box-card:hover {
  opacity: 0.5;
  transition-duration: 0.3s;
}

.card-title {
  font-size: 50px;
  line-height: 370px;
}

::v-deep .el-card__body {
  padding: 0 !important;
}

.dalian {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: rgb(255, 255, 255);
  margin-bottom: 50px;
}

.dalian img{
  width: 420px;
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
  background: #fffffc;
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
