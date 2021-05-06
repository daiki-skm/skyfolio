<template>
  <DefaultContainer>
    <h1 class="sub-title">China Business Training Program</h1>
    <p class="date">3/8/2021～3/16/2021</p>
    <div class="sentence">
      I participated in
      <DefaultJumpLink
        :title="'the China Business Training Program'"
        :link="'https://www.u-aizu.ac.jp/sgu/info/event/2020_1.html'"
      />
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
  </DefaultContainer>
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
