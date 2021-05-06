<template>
  <DefaultContainer>
    <h1 class="sub-title">Nursing care digital hackathon</h1>
    <p class="date">11/21/2020～3/7/2021</p>
    <div class="sentence">
      I participated in
      <DefaultJumpLink
        :title="'Nursing care digital hackathon in Aizu'"
        :link="'https://aizuwakamatsu.mylocal.jp/win2019aizu/index.html'"
      />
      <br />
      The theme was "Solving problems in nursing care with digital technology".<br />
      By interviewing actual care homes, we were able to identify what the problems were and what was needed.<br />
      Through this hackathon, we have realized the importance of interviews.<br />
      The following slides show the business ideas our team came up with based on interviewing actual care homes.
    </div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="num in 22" :key="num">
        <el-image
          :src="`/vr/Slide${num}.jpg`"
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
  width: 75%;
  text-align: left;
  font-size: 45px;
  margin-bottom: 50px;
}

.date {
  float: right;
  width: 25%;
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
