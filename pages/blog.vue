<template>
  <DefaultContainer>
    <DefaultSubTitle
      :title="'Blog'"
    />
    <DefaultBlogTop
      :title="'コペルニクス的転回'"
      :day="'4/30/2021'"
    />
    <p class="blog-sentence">
      物事を俯瞰的に捉えることが大切だと耳にしますが、具体的になぜそれが大切か自分の中で明確化していませんでした。<br />
      人間は、物理的に自分の視点からしか物事を見れないため、無意識に自分が中心だと思ってしまいます。<br />
      それと似たように、一昔前までは、地球を中心として他の惑星が公転しているという天動説を信じていました。<br />
      しかし、コペルニクスが地動説を唱え、それが証明され、考え方が一変しました。<br />
      地球を、宇宙を俯瞰的に捉えたからこそ、新しい発見ができたのだと、そして、人類が前に進んだのだと私は思います。<br />
      一つの視点、考えに縛られるのではなく、本当にそれは正しいのかと少し考えることが重要なのかなと思った今日この頃です。<br />
      それでは。<br />
    </p>
    <DefaultBlogTop
      :title="'私色'"
      :day="'4/27/2021'"
    />
    <p class="blog-sentence">
      はじめまして。佐久間です。感じたこと、思ったこと、日常など、つらつらとゆるく書いていけたらと思います。<br />
      最近、コードを書くことが楽しくなってきました。ユーモアあふれるようなものを自分の気持ちのままに作成していけたらと思います。<br />
      こうして自分の気持ちや考えを書き出すことってあまりなかったため、なんだか今不思議な気持ちです。心の中が整理されていくような、そんな感覚です。<br />
      ブログって難しいですね。文の繋がりや終わり方など、結びつけるのが難しいです。<br />
      拙い文章でしたが読んでくださってありがとうございました。それでは。
    </p>
    <div class="arrow-up">
      <IconArrowUp />
    </div>
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
  mounted() {
  },
  methods: {
  },
})
</script>

<style scoped>

.blog-sentence {
  margin-bottom: 70px;
}

.arrow-up {
  text-align: center;
}

</style>
