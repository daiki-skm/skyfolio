<template>
  <DefaultContainer>
    <h1 class="sub-title">Slack Bot</h1>
    <div>
      <div class="sentence">
        I have created
        <DefaultJumpLink
          :title="'slack bot'"
          :link="'https://github.com/daiki328/slack-bot'"
        />
        with golang and slack API.<br />
        <p style="margin-bottom: 50px;">
          I've done an interactive implementation.<br />
          Mention "ping" to the bot and it will reply with "pong". If you type the word after ping...?<br />
          Mention music to the bot and choose the genre of the song. It will then recommend songs in the genre you have chosen.<br />
        </p>
      </div>
      <el-image
        style="width: 270px; height: 250px; margin-bottom: 50px; margin-right: 50px;"
        src="/bot/comedy.png"
        fit="cover"
      >
      </el-image>
      <el-image
        style="width: 400px; height: 230px; margin-bottom: 50px;"
        src="/bot/music.png"
        fit="cover"
      >
      </el-image>
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

.sentence {
  float: left;
  text-align: left;
  font-size: 18px;
}

</style>
