<template>
  <DefaultContainer>
    <h1 class="sub-title">Notion API</h1>
    <div>
      <div class="sentence">
        I created
        <DefaultJumpLink
          :title="'Notion API'"
          :link="'https://github.com/daiki328/notion-api'"
        />
        with golang.
        <br />
        Notion's momentum has been incredible recently.
        <br />
        Therefore, I've made it possible to get data by hitting notion's API.
      </div>
      <el-image
        style="width: 200px; height: 200px; margin-right: 20px;"
        src="/notion/notion2.png"
        fit="cover"
      >
      </el-image>
      <el-image
        style="width: 600px; height: 155px;"
        src="/notion/notion1.png"
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
  width: 100%;
  text-align: left;
  font-size: 45px;
  margin-bottom: 50px;
}

::v-deep .el-image__inner {
  padding-top: 8px !important;
}

.sentence {
  float: left;
  width: 100%;
  margin-bottom: 50px;
}

</style>
