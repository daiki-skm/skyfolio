<template>
  <div class="container">
    <h1 class="sub-title">Bookshelf</h1>
    <div>
      <el-row>
        <el-col :span="6" v-for="(book, id) in books" :key="id">
          <a :href="book.url" target="_blank">
            <el-card class="box-card">
              <div>{{ book.title }}</div>
            </el-card>
          </a>
          <div
            class="grid-content"
            :class="{
              'bg-color': (id%2 === 0 && Math.floor(id/4)%2 === 0) || (id%2 === 1 && Math.floor(id/4)%2 === 1),
              'bg-color-light': (id%2 === 1 && Math.floor(id/4)%2 === 0) || (id%2 === 0 && Math.floor(id/4)%2 === 1),
            }"
          >
          </div>
        </el-col>
      </el-row>
    </div>
    <i class="el-icon-arrow-up" @click="scrollUp" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  books: any,
}

export default Vue.extend({
  layout: 'common',
  data (): DataType {
    return {
      books: [
        {
          title: 'もしドラ',
          url: 'https://www.amazon.co.jp/%E3%82%82%E3%81%97%E9%AB%98%E6%A0%A1%E9%87%8E%E7%90%83%E3%81%AE%E5%A5%B3%E5%AD%90%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%BC%E3%81%8C%E3%83%89%E3%83%A9%E3%83%83%E3%82%AB%E3%83%BC%E3%81%AE%E3%80%8E%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%80%8F%E3%82%92%E8%AA%AD%E3%82%93%E3%81%A0%E3%82%89-%E5%B2%A9%E5%B4%8E-%E5%A4%8F%E6%B5%B7/dp/4478012032',
        },
        {
          title: 'The Third Door',
          url: 'https://www.amazon.co.jp/%E3%82%B5%E3%83%BC%E3%83%89%E3%83%89%E3%82%A2-%E7%B2%BE%E7%A5%9E%E7%9A%84%E8%B3%87%E7%94%A3%E3%81%AE%E3%81%B5%E3%82%84%E3%81%97%E6%96%B9-%E3%82%A2%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9-%E3%83%90%E3%83%8A%E3%83%A4%E3%83%B3/dp/4492046534',
        },
        {
          title: 'FACTFULNESS',
          url: 'https://www.amazon.co.jp/FACTFULNESS-%E3%83%95%E3%82%A1%E3%82%AF%E3%83%88%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9-10%E3%81%AE%E6%80%9D%E3%81%84%E8%BE%BC%E3%81%BF%E3%82%92%E4%B9%97%E3%82%8A%E8%B6%8A%E3%81%88%E3%80%81%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%9F%BA%E3%81%AB%E4%B8%96%E7%95%8C%E3%82%92%E6%AD%A3%E3%81%97%E3%81%8F%E8%A6%8B%E3%82%8B%E7%BF%92%E6%85%A3-%E3%83%8F%E3%83%B3%E3%82%B9%E3%83%BB%E3%83%AD%E3%82%B9%E3%83%AA%E3%83%B3%E3%82%B0/dp/4822289605',
        },
        {
          title: '7つの習慣',
          url: 'https://www.amazon.co.jp/%E5%AE%8C%E8%A8%B3-7%E3%81%A4%E3%81%AE%E7%BF%92%E6%85%A3-%E4%BA%BA%E6%A0%BC%E4%B8%BB%E7%BE%A9%E3%81%AE%E5%9B%9E%E5%BE%A9-%E3%82%B9%E3%83%86%E3%82%A3%E3%83%BC%E3%83%96%E3%83%B3%E3%83%BBR%E3%83%BB%E3%82%B3%E3%83%B4%E3%82%A3%E3%83%BC/dp/4863940246',
        },
        {
          title: '2030年の世界地図帳',
          url: 'https://www.amazon.co.jp/2030%E5%B9%B4%E3%81%AE%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%B3%E5%B8%B3-%E3%81%82%E3%81%9F%E3%82%89%E3%81%97%E3%81%84%E7%B5%8C%E6%B8%88%E3%81%A8SDGs%E3%80%81%E6%9C%AA%E6%9D%A5%E3%81%B8%E3%81%AE%E5%B1%95%E6%9C%9B-%E8%90%BD%E5%90%88-%E9%99%BD%E4%B8%80/dp/4797399953',
        },
        {
          title: '僕はイエローでホワイトで、ちょっとブルー',
          url: 'https://www.amazon.co.jp/%E3%81%BC%E3%81%8F%E3%81%AF%E3%82%A4%E3%82%A8%E3%83%AD%E3%83%BC%E3%81%A7%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%81%A7%E3%80%81%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E3%83%96%E3%83%AB%E3%83%BC-%E3%83%96%E3%83%AC%E3%82%A4%E3%83%87%E3%82%A3-%E3%81%BF%E3%81%8B%E3%81%93/dp/4103526815',
        },
        {
          title: '超AI時代の生存戦略',
          url: 'https://www.amazon.co.jp/%E8%B6%85AI%E6%99%82%E4%BB%A3%E3%81%AE%E7%94%9F%E5%AD%98%E6%88%A6%E7%95%A5-%E2%80%95%E2%80%95-%E3%82%B7%E3%83%B3%E3%82%AE%E3%83%A5%E3%83%A9%E3%83%AA%E3%83%86%E3%82%A3-2040%E5%B9%B4%E4%BB%A3-%E3%81%AB%E5%82%99%E3%81%88%E3%82%8B34%E3%81%AE%E3%83%AA%E3%82%B9%E3%83%88/dp/4479795618',
        },
        {
          title: '地政学',
          url: 'https://www.amazon.co.jp/%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E6%95%99%E9%A4%8A-%E5%9C%B0%E6%94%BF%E5%AD%A6-%E3%82%B5%E3%82%AF%E3%83%83%E3%81%A8%E3%82%8F%E3%81%8B%E3%82%8B%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E6%95%99%E9%A4%8A-%E5%A5%A5%E5%B1%B1-%E7%9C%9F%E5%8F%B8/dp/4405120099',
        },
        {
          title: '戦略読書',
          url: 'https://www.amazon.co.jp/%E6%88%A6%E7%95%A5%E8%AA%AD%E6%9B%B8-%E3%80%94%E5%A2%97%E8%A3%9C%E7%89%88%E3%80%95-%E6%97%A5%E7%B5%8C%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E4%BA%BA%E6%96%87%E5%BA%AB-%E4%B8%89%E8%B0%B7-%E5%AE%8F%E6%B2%BB/dp/4532199778',
        },
        {
          title: '流浪の月',
          url: 'https://www.amazon.co.jp/%E6%B5%81%E6%B5%AA%E3%81%AE%E6%9C%88-%E5%87%AA%E8%89%AF-%E3%82%86%E3%81%86/dp/4488028020',
        },
        {
          title: '種の起源',
          url: 'https://www.amazon.co.jp/%E3%83%80%E3%83%BC%E3%82%A6%E3%82%A3%E3%83%B3%E3%80%8E%E7%A8%AE%E3%81%AE%E8%B5%B7%E6%BA%90%E3%80%8F%E3%82%92%E6%BC%AB%E7%94%BB%E3%81%A7%E8%AA%AD%E3%82%80-%E3%83%81%E3%83%A3%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%BB%E3%83%80%E3%83%BC%E3%82%A6%E3%82%A3%E3%83%B3/dp/4900963895',
        },
        {
          title: 'ビッグ・クエスチョン',
          url: 'https://www.amazon.co.jp/%E3%83%93%E3%83%83%E3%82%B0%E3%83%BB%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%81%E3%83%A7%E3%83%B3%E2%80%95%E3%80%88%E4%BA%BA%E9%A1%9E%E3%81%AE%E9%9B%A3%E5%95%8F%E3%80%89%E3%81%AB%E7%AD%94%E3%81%88%E3%82%88%E3%81%86-%E3%82%B9%E3%83%86%E3%82%A3%E3%83%BC%E3%83%B4%E3%83%B3%E3%83%BB%E3%83%9B%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0/dp/4140817739',
        },
        {
          title: '自由思考',
          url: 'https://www.amazon.co.jp/%E8%87%AA%E7%94%B1%E6%80%9D%E8%80%83-%E4%B8%AD%E6%9D%91%E6%96%87%E5%89%87/dp/4309028144',
        },
        {
          title: 'この気持ちもいつか忘れる',
          url: 'https://www.amazon.co.jp/%E3%81%93%E3%81%AE%E6%B0%97%E6%8C%81%E3%81%A1%E3%82%82%E3%81%84%E3%81%A4%E3%81%8B%E5%BF%98%E3%82%8C%E3%82%8B-%E4%BD%8F%E9%87%8E-%E3%82%88%E3%82%8B/dp/4103508337',
        },
        {
          title: '最高のリーダーシップ',
          url: 'https://www.amazon.co.jp/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89%E5%BC%8F-%E6%9C%80%E9%AB%98%E3%81%AE%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%82%B7%E3%83%83%E3%83%97-%E3%82%B9%E3%83%86%E3%82%A3%E3%83%BC%E3%83%B4%E3%83%B3%E3%83%BB%E3%83%9E%E3%83%BC%E3%83%95%E3%82%A3%E9%87%8D%E6%9D%BE/dp/4763136887',
        },
        {
          title: '世界をつくった6つの革命の物語',
          url: 'https://www.amazon.co.jp/%E4%B8%96%E7%95%8C%E3%82%92%E3%81%A4%E3%81%8F%E3%81%A3%E3%81%9F6%E3%81%A4%E3%81%AE%E9%9D%A9%E5%91%BD%E3%81%AE%E7%89%A9%E8%AA%9E-%E6%96%B0%E3%83%BB%E4%BA%BA%E9%A1%9E%E9%80%B2%E5%8C%96%E5%8F%B2-%E3%82%B9%E3%83%86%E3%82%A3%E3%83%BC%E3%83%96%E3%83%B3%E3%83%BB%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%BD%E3%83%B3/dp/4023315303',
        },
        {
          title: 'そして、バトンは渡された',
          url: 'https://www.amazon.co.jp/%E3%81%9D%E3%81%97%E3%81%A6%E3%80%81%E3%83%90%E3%83%88%E3%83%B3%E3%81%AF%E6%B8%A1%E3%81%95%E3%82%8C%E3%81%9F-%E7%80%AC%E5%B0%BE%E3%81%BE%E3%81%84%E3%81%93/dp/4163907955',
        },
        {
          title: '滅びの前のシャングリラ',
          url: 'https://www.amazon.co.jp/%E6%BB%85%E3%81%B3%E3%81%AE%E5%89%8D%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%A9-%E5%8D%98%E8%A1%8C%E6%9C%AC-%E5%87%AA%E8%89%AF-%E3%82%86%E3%81%86/dp/4120053407',
        },
        {
          title: 'えんとつ町のプペル',
          url: 'https://www.amazon.co.jp/%E3%81%88%E3%82%93%E3%81%A8%E3%81%A4%E7%94%BA%E3%81%AE%E3%83%97%E3%83%9A%E3%83%AB-%E3%81%AB%E3%81%97%E3%81%AE-%E3%81%82%E3%81%8D%E3%81%B2%E3%82%8D/dp/4344030168',
        },
        {
          title: 'AIvs教科書が読めない子どもたち',
          url: 'https://www.amazon.co.jp/AI-vs-%E6%95%99%E7%A7%91%E6%9B%B8%E3%81%8C%E8%AA%AD%E3%82%81%E3%81%AA%E3%81%84%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1-%E6%96%B0%E4%BA%95-%E7%B4%80%E5%AD%90/dp/4492762396',
        },
        {
          title: 'オルタネート',
          url: 'https://www.amazon.co.jp/%E3%82%AA%E3%83%AB%E3%82%BF%E3%83%8D%E3%83%BC%E3%83%88-%E5%8A%A0%E8%97%A4%E3%82%B7%E3%82%B2%E3%82%A2%E3%82%AD/dp/4103537310',
        },
        {
          title: '木曜日にはココアを',
          url: 'https://www.amazon.co.jp/%E6%9C%A8%E6%9B%9C%E6%97%A5%E3%81%AB%E3%81%AF%E3%82%B3%E3%82%B3%E3%82%A2%E3%82%92-%E9%9D%92%E5%B1%B1-%E7%BE%8E%E6%99%BA%E5%AD%90/dp/4800275717',
        },
        {
          title: '52ヘルツのクジラたち',
          url: 'https://www.amazon.co.jp/52%E3%83%98%E3%83%AB%E3%83%84%E3%81%AE%E3%82%AF%E3%82%B8%E3%83%A9%E3%81%9F%E3%81%A1-%E5%8D%98%E8%A1%8C%E6%9C%AC-%E7%94%BA%E7%94%B0-%E3%81%9D%E3%81%AE%E3%81%93/dp/4120052982',
        },
        {
          title: 'わたしの美しい庭',
          url: 'https://www.amazon.co.jp/%E3%82%8F%E3%81%9F%E3%81%97%E3%81%AE%E7%BE%8E%E3%81%97%E3%81%84%E5%BA%AD-%E5%87%AA%E8%89%AF-%E3%82%86%E3%81%86/dp/4591164853',
        },
        {
          title: '推し、燃ゆ',
          url: 'https://www.amazon.co.jp/%E6%8E%A8%E3%81%97%E3%80%81%E7%87%83%E3%82%86-%E5%AE%87%E4%BD%90%E8%A6%8B%E3%82%8A%E3%82%93/dp/4309029167',
        },
        {
          title: '元彼の遺言状',
          url: 'https://www.amazon.co.jp/%E5%85%83%E5%BD%BC%E3%81%AE%E9%81%BA%E8%A8%80%E7%8A%B6-%E6%96%B0%E5%B7%9D%E5%B8%86%E7%AB%8B-ebook/dp/B08QDFG9DN',
        },
        {
          title: '図書館戦争シリーズ',
          url: 'https://www.amazon.co.jp/%E5%9B%B3%E6%9B%B8%E9%A4%A8%E6%88%A6%E4%BA%89-%E5%9B%B3%E6%9B%B8%E9%A4%A8%E6%88%A6%E4%BA%89%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-1-%E8%A7%92%E5%B7%9D%E6%96%87%E5%BA%AB-%E6%9C%89%E5%B7%9D/dp/4043898053',
        },
        {
          title: 'トラペジウム',
          url: 'https://www.amazon.co.jp/%E3%83%88%E3%83%A9%E3%83%9A%E3%82%B8%E3%82%A6%E3%83%A0-%E9%AB%98%E5%B1%B1-%E4%B8%80%E5%AE%9F/dp/4040686969',
        },
        {
          title: '桜のような僕の恋人',
          url: 'https://www.amazon.co.jp/%E6%A1%9C%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E5%83%95%E3%81%AE%E6%81%8B%E4%BA%BA-%E9%9B%86%E8%8B%B1%E7%A4%BE%E6%96%87%E5%BA%AB-%E5%AE%87%E5%B1%B1-%E4%BD%B3%E4%BD%91/dp/4087455483',
        },
        {
          title: 'サイレント・ブレス',
          url: 'https://www.amazon.co.jp/%E3%82%B5%E3%82%A4%E3%83%AC%E3%83%B3%E3%83%88%E3%83%BB%E3%83%96%E3%83%AC%E3%82%B9-%E5%8D%97-%E6%9D%8F%E5%AD%90/dp/4344029992',
        },
        {
          title: 'あの花が咲く丘で、君とまた出会えたら。',
          url: 'https://www.amazon.co.jp/%E3%81%82%E3%81%AE%E8%8A%B1%E3%81%8C%E5%92%B2%E3%81%8F%E4%B8%98%E3%81%A7%E3%80%81%E5%90%9B%E3%81%A8%E3%81%BE%E3%81%9F%E5%87%BA%E4%BC%9A%E3%81%88%E3%81%9F%E3%82%89%E3%80%82-%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%84%E5%87%BA%E7%89%88%E6%96%87%E5%BA%AB-%E6%B1%90%E8%A6%8B%E5%A4%8F%E8%A1%9B/dp/4813701302',
        },
        {
          title: '神の子どもたちはみな踊る',
          url: 'https://www.amazon.co.jp/%E7%A5%9E%E3%81%AE%E5%AD%90%E3%81%A9%E3%82%82%E3%81%9F%E3%81%A1%E3%81%AF%E3%81%BF%E3%81%AA%E8%B8%8A%E3%82%8B-%E6%96%B0%E6%BD%AE%E6%96%87%E5%BA%AB-%E6%9D%91%E4%B8%8A-%E6%98%A5%E6%A8%B9/dp/4101001502',
        },
        {
          title: 'DEATH「死」とは何か',
          url: 'https://www.amazon.co.jp/%E3%80%8C%E6%AD%BB%E3%80%8D%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B-%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%AB%E5%A4%A7%E5%AD%A6%E3%81%A723%E5%B9%B4%E9%80%A3%E7%B6%9A%E3%81%AE%E4%BA%BA%E6%B0%97%E8%AC%9B%E7%BE%A9-%E5%AE%8C%E5%85%A8%E7%BF%BB%E8%A8%B3%E7%89%88-%E3%82%B7%E3%82%A7%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%B1%E3%83%BC%E3%82%AC%E3%83%B3/dp/4866511281',
        },
        {
          title: 'シン・ニホン',
          url: 'https://www.amazon.co.jp/%E3%82%B7%E3%83%B3%E3%83%BB%E3%83%8B%E3%83%9B%E3%83%B3-AI%C3%97%E3%83%87%E3%83%BC%E3%82%BF%E6%99%82%E4%BB%A3%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E6%97%A5%E6%9C%AC%E3%81%AE%E5%86%8D%E7%94%9F%E3%81%A8%E4%BA%BA%E6%9D%90%E8%82%B2%E6%88%90-NewsPicks%E3%83%91%E3%83%96%E3%83%AA%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0-%E5%AE%89%E5%AE%85%E5%92%8C%E4%BA%BA/dp/4910063048',
        },
        {
          title: 'チーズはどこへ消えた？',
          url: 'https://www.amazon.co.jp/%E3%83%81%E3%83%BC%E3%82%BA%E3%81%AF%E3%81%A9%E3%81%93%E3%81%B8%E6%B6%88%E3%81%88%E3%81%9F-%E3%82%B9%E3%83%9A%E3%83%B3%E3%82%B5%E3%83%BC-%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%BD%E3%83%B3/dp/459403019X',
        },
        {
          title: 'LIFESPAN',
          url: 'https://www.amazon.co.jp/LIFESPAN-%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B9%E3%83%91%E3%83%B3-%E8%80%81%E3%81%84%E3%81%AA%E3%81%8D%E4%B8%96%E7%95%8C-%E3%83%87%E3%83%93%E3%83%83%E3%83%89%E3%83%BB-%E3%83%BB%E3%82%B7%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%A2/dp/4492046747',
        },
        {
          title: 'サピエンス全史',
          url: 'https://www.amazon.co.jp/%E3%82%B5%E3%83%94%E3%82%A8%E3%83%B3%E3%82%B9%E5%85%A8%E5%8F%B2-%E4%B8%8A-%E6%96%87%E6%98%8E%E3%81%AE%E6%A7%8B%E9%80%A0%E3%81%A8%E4%BA%BA%E9%A1%9E%E3%81%AE%E5%B9%B8%E7%A6%8F-%E3%83%A6%E3%83%B4%E3%82%A1%E3%83%AB%E3%83%BB%E3%83%8E%E3%82%A2%E3%83%BB%E3%83%8F%E3%83%A9%E3%83%AA/dp/430922671X',
        },
        {
          title: 'ホモ・デウス',
          url: 'https://www.amazon.co.jp/%E3%83%9B%E3%83%A2%E3%83%BB%E3%83%87%E3%82%A6%E3%82%B9-%E4%B8%8A-%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%81%A8%E3%82%B5%E3%83%94%E3%82%A8%E3%83%B3%E3%82%B9%E3%81%AE%E6%9C%AA%E6%9D%A5-%E3%83%A6%E3%83%B4%E3%82%A1%E3%83%AB%E3%83%BB%E3%83%8E%E3%82%A2%E3%83%BB%E3%83%8F%E3%83%A9%E3%83%AA/dp/4309227368',
        },
        {
          title: '嫌われる勇気',
          url: 'https://www.amazon.co.jp/%E5%AB%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8B%87%E6%B0%97%E2%80%95%E2%80%95%E2%80%95%E8%87%AA%E5%B7%B1%E5%95%93%E7%99%BA%E3%81%AE%E6%BA%90%E6%B5%81%E3%80%8C%E3%82%A2%E3%83%89%E3%83%A9%E3%83%BC%E3%80%8D%E3%81%AE%E6%95%99%E3%81%88-%E5%B2%B8%E8%A6%8B-%E4%B8%80%E9%83%8E/dp/4478025819',
        },
        {
          title: '人を動かす',
          url: 'https://www.amazon.co.jp/%E4%BA%BA%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99-%E6%96%87%E5%BA%AB%E7%89%88-D%E3%83%BB%E3%82%AB%E3%83%BC%E3%83%8D%E3%82%AE%E3%83%BC/dp/442210098X',
        },
        {
          title: 'フェルマーの最終定理',
          url: 'https://www.amazon.co.jp/%E3%83%95%E3%82%A7%E3%83%AB%E3%83%9E%E3%83%BC%E3%81%AE%E6%9C%80%E7%B5%82%E5%AE%9A%E7%90%86-%E6%96%B0%E6%BD%AE%E6%96%87%E5%BA%AB-%E3%82%B5%E3%82%A4%E3%83%A2%E3%83%B3-%E3%82%B7%E3%83%B3/dp/4102159711',
        },
        {
          title: '疲れない体',
          url: 'https://www.amazon.co.jp/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89%E5%BC%8F-%E7%96%B2%E3%82%8C%E3%81%AA%E3%81%84%E4%BD%93-%E5%B1%B1%E7%94%B0%E7%9F%A5%E7%94%9F/dp/4763136879',
        },
        {
          title: '独白：消せない記録',
          url: 'https://www.amazon.co.jp/%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%87%E3%83%B3-%E7%8B%AC%E7%99%BD-%E6%B6%88%E3%81%9B%E3%81%AA%E3%81%84%E8%A8%98%E9%8C%B2-%E3%82%A8%E3%83%89%E3%83%AF%E3%83%BC%E3%83%89%E3%83%BB%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%87%E3%83%B3/dp/4309227864',
        },
        {
          title: '最高の睡眠',
          url: 'https://www.amazon.co.jp/%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89%E5%BC%8F-%E6%9C%80%E9%AB%98%E3%81%AE%E7%9D%A1%E7%9C%A0-%E8%A5%BF%E9%87%8E%E7%B2%BE%E6%B2%BB/dp/4763136011',
        },
        {
          title: '2030年：すべてが「加速」する世界に備えよ',
          url: 'https://www.amazon.co.jp/2030%E5%B9%B4-%E3%81%99%E3%81%B9%E3%81%A6%E3%81%8C%E3%80%8C%E5%8A%A0%E9%80%9F%E3%80%8D%E3%81%99%E3%82%8B%E4%B8%96%E7%95%8C%E3%81%AB%E5%82%99%E3%81%88%E3%82%88-%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%BB%E3%83%87%E3%82%A3%E3%82%A2%E3%83%9E%E3%83%B3%E3%83%87%E3%82%A3%E3%82%B9/dp/4910063137',
        },
        {
          title: '21 Lessons',
          url: 'https://www.amazon.co.jp/21-Lessons-21%E4%B8%96%E7%B4%80%E3%81%AE%E4%BA%BA%E9%A1%9E%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE21%E3%81%AE%E6%80%9D%E8%80%83-%E3%83%A6%E3%83%B4%E3%82%A1%E3%83%AB%E3%83%BB%E3%83%8E%E3%82%A2%E3%83%BB%E3%83%8F%E3%83%A9%E3%83%AA/dp/4309227880',
        },
        {
          title: 'ライフピボット',
          url: 'https://www.amazon.co.jp/gp/product/429501088X/ref=ox_sc_act_title_2?smid=AN1VRQENFRJN5&psc=1',
        },
        {
          title: '君たちはどう生きるか',
          url: 'https://www.amazon.co.jp/gp/product/4838729472/ref=ox_sc_saved_title_1?smid=A3NVK0K9K7UGXX&psc=1',
        },
      ],
    }
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
  text-align: center;
}

.sub-title {
  margin: 0 0 70px 0;
  font-size: 45px;
  text-align: left;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #333;
}

.box-card {
  height: 170px;
  width: 170px;
  display: inline-grid;
  cursor: pointer;
  background: #fffffc;
  transition-duration: 0.3s;
}

.box-card:hover {
  opacity: 0.5;
  transition-duration: 0.3s;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
  text-align: center;
}

.bg-color {
  background: #996600;
}

.bg-color-light {
  background: #D2B48C;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 50px;
  display: inline-block;
  width: 220px;
}

.el-icon-arrow-up {
  cursor: pointer;
  display: block;
  font-size: 3rem;
  margin-bottom: 50px;
}

</style>
