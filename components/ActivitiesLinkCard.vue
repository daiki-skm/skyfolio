<template>
  <div class="link-card">
    <nuxt-link :to="link">
      <el-card
        :class="className"
      >
        <img
          :src="src"
          :alt="className"
        />
      </el-card>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
}

export default Vue.extend({
  name: 'ActivitiesLinkCard',
  props: {
    link: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    }
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

::v-deep .el-card__body {
  padding: 0 !important;
}

.bot {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: #fffffc;
  margin-bottom: 50px;
}

.bot img{
  width: 570px;
  height: 430px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.bot:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
}

.game {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: #fffffc;
  margin-bottom: 50px;
}

.game img{
  width: 960px;
  height: 420px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.game:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
}

.cli {
  display: inline-block;
  width: 960px;
  height: 420px;
  background: rgb(44, 44, 44);
  margin-bottom: 50px;
}

.cli img{
  width: 480px;
  height: 420px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.cli:hover img{
  opacity: 0.6;
  transition-duration: 0.3s;
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

</style>
