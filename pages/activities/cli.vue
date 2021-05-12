<template>
  <DefaultContainer>
    <h1 class="sub-title">Riddle CLI</h1>
    <div>
      <el-image
        style="width: 450px; height: 400px"
        src="/top/cli.png"
        fit="cover"
      >
      </el-image>
      <div class="sentence">
        I created
        <DefaultJumpLink
          :title="'a CLI that can do riddles'"
          :link="'https://github.com/daiki328/riddle-cli'"
        />
        with golang and urfave-cli.
        <br />
        The golang is suitable for creating CLIs due to its multi-platform cross-compilation capabilities.
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

::v-deep .el-image__inner {
  padding-top: 8px !important;
}

.sentence {
  float: right;
  width: 460px;
  text-align: left;
  font-size: 18px;
}

</style>
