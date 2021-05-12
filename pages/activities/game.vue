<template>
  <DefaultContainer>
    <h1 class="sub-title">Flappy Game</h1>
    <div>
      <div class="sentence">
        I created
        <DefaultJumpLink
          :title="'a flappy game'"
          :link="'https://github.com/daiki328/flappy-game'"
        />
        with golang and pixel.
        <br />
        <p style="font-weight: bold; margin-top: 15px;">
          How to play
        </p>
        - Press the spacekey to avoid obstacles.<br />
        - To continue, press the spacekey.<br />
        - Have a play!
      </div>
      <el-image
        style="width: 800px; height: 460px; margin-bottom: 50px;"
        src="/game/game.png"
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

::v-deep .el-image__inner {
  padding-top: 8px !important;
}

.sentence {
  float: left;
  margin-bottom: 50px;
  text-align: left;
  font-size: 18px;
}

</style>
