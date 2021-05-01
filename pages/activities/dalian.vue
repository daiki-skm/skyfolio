<template>
  <div class="container">
    <h1 class="sub-title">China Business Training Program</h1>
    <p class="date">3/8/2021～3/16/2021</p>
    <div class="sentence">
      I participated in
      <a href="https://www.u-aizu.ac.jp/sgu/info/event/2020_1.html" target="_blank">
        'the China Business Training Program'
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16 icon-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
      </a>
      <br />
      Communicating with Chinese students was very stimulating as they have different ideas and values to me.<br />
      The following slides show the business ideas our team came up with based on what we learnt in the lecture.
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
  float: left;
  width: 80%;
  text-align: left;
  font-size: 45px;
  margin-bottom: 50px;
}

.date {
  float: right;
  width: 20%;
  margin-top: 39px;
  margin-bottom: 61px;
  text-align: right;
}

.sentence {
  text-align: left;
  margin-bottom: 50px;
  letter-spacing: 1.5px;
  font-size: 18px;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #333;
  text-decoration: underline;
}

.icon-svg {
  width: 12px;
  padding-top: 3px;
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
