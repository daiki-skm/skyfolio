<template>
  <DefaultContainer>
    <h1 class="sub-title">Hack Trek 2021</h1>
    <p class="date">2/27/2020～2/28/2021</p>
    <div>
      <el-image
        style="width: 366px; height: 366px"
        src="/hack-trek/hack-trek.png"
        fit="cover"
      >
      </el-image>
      <div class="sentence">
        I participated in
        <DefaultJumpLink
          :title="'Hack Trek 2021'"
          :link="'https://gsacademy.jp/hack-trek-2021/'"
        />
        <br />
        We tried to create a web app that would make it easier for people to manage their documents by creating QR codes for videos describing the documents and then attaching them to those documents.<br />
        The image on the left shows
        <DefaultJumpLink
          :title="'an application'"
          :link="'https://daiki-photo.web.app/'"
        />
        developed by our team through this activity.
      </div>
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
  float: right;
  width: 550px;
  text-align: left;
  font-size: 18px;
}

</style>
