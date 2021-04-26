<template>
  <div class="container">
    <h1 class="sub-title">Blog</h1>
    <!-- <div class="link-card"> -->
      <!-- <el-card class="box-card"> -->
        <div class="card-day">4/27/2021</div>
        <div class="card-title">私色</div>
        <div class="card-sentence">
          はじめまして。佐久間です。感じたこと、思ったこと、日常など、つらつらとゆるく書いていけたらと思います。<br />
          最近、コードを書くことが楽しくなってきました。ユーモアあふれるような、面白いものを作成していけたらと思います。<br />
          こうして自分の気持ちや考えを書き出すことってあまりなかったため、なんだか今不思議な気持ちです。心の中が整理されていくような、そんな感覚です。<br />
          読んでくださってありがとうございました。
        </div>
      <!-- </el-card> -->
    <!-- </div> -->
    <div class="arrow-up">
      <i class="el-icon-arrow-up" @click="scrollUp" />
    </div>
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
  max-width: 960px;
  padding: 0;
  margin: 0 auto;
}

.sub-title {
  margin: 0 0 70px 0;
  font-size: 45px;
  text-align: left;
}

.link-card {
  display: inline-block;
  width: 960px;
  height: 420px;
  margin-bottom: 50px;
  /* text-align: center; */
}

a {
  color: #333;
  text-decoration: none;
}

.box-card {
  width: 960px;
  height: 420px;
  background: #fffffc;
  transition-duration: 0.3s;
}

.card-title {
  /* font-size: 50px;
  line-height: 370px; */
}

.arrow-up {
  text-align: center;
}

.el-icon-arrow-up {
  cursor: pointer;
  display: block;
  font-size: 3rem;
  margin-bottom: 50px;
}

</style>
