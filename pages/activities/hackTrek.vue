<template>
  <div class="container">
    <h1 class="sub-title">Hack Trek 2021</h1>
    <p class="date">2/27/2020～2/28/2021</p>
    <div>
      <el-image
        style="width: 366px; height: 366px"
        src="/hack-trek-mini.png"
        fit="cover"
      >
      </el-image>
      <div class="sentence">
        I participated in
        <a href="https://gsacademy.jp/hack-trek-2021/" target="_blank">
          'Hack Trek 2021'
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16 icon-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
        </a>
        <br />
        We tried to create a web app that would make it easier for people to manage their documents by creating QR codes for videos describing the documents and then attaching them to those documents.<br />
        The image on the left shows
        <a
          href="https://daiki-photo.web.app/"
          target="_blank"
        >
          'an application'
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16 icon-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
        </a>
        developed by our team through this activity.
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
  float: right;
  width: 550px;
  text-align: left;
  font-size: 18px;
}

.icon-svg {
  width: 12px;
  padding-top: 3px;
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
