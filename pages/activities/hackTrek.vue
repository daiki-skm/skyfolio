<template>
  <div class="container">
    <h1 class="sub-title">Hack Trek 2021</h1>
    <div>
      <el-image
        style="width: 366px; height: 366px"
        src="/hack-trek-mini.png"
        fit="cover"
      >
      </el-image>
      <div class="sentence">
        I participated in <a href="https://gsacademy.jp/hack-trek-2021/" target="_blank">'Hack Trek 2021'</a><br />
        <a
          href="https://daiki-photo.web.app/"
          target="_blank"
        >
          'こちら'
        </a>
        はこの活動を通して、私たちのチームで作成したウェブアプリです。<br />
        力不足を痛感しました。いい経験になりました。<br />
      </div>
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
  float: right;
  width: 550px;
  text-align: left;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #333;
  text-decoration: underline;
}

</style>
