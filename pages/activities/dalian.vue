<template>
  <div class="container">
    <h1 class="sub-title">China Business Training Program</h1>
    <div class="sentence">
      I participated in <a href="https://www.u-aizu.ac.jp/sgu/info/event/2020_1.html" target="_blank">'the China Business Training Program'</a><br />
      The following slides show the business ideas our team has developed through this activity.<br />
    </div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="num in 22" :key="num">
        <el-image
          :src="`/vs/Slide${num}.jpg`"
          fit="cover"
          class="image"
          style="width: 960px; height: 535px"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>
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
  max-width: 960px;
  padding: 0;
  margin: 0 auto;
}

.sub-title {
  margin: 0 0 50px 0;
  font-size: 45px;
  text-align: left;
}

.sentence {
  text-align: left;
  margin-bottom: 50px;
  letter-spacing: 1.5px;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #333;
  text-decoration: underline;
}

.el-carousel {
  margin-bottom: 50px;
  height: 570px !important;
}

::v-deep .el-carousel__container {
  height: 535px !important;
}

.el-carousel__item {
  height: 535px;
  width: 960px;
}

.el-carousel__item .image {
  line-height: 535px;
  margin: 0 auto;
}

.el-carousel__arrow {
  top: 52% !important;
}

</style>
