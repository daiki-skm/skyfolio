<template>
  <DefaultContainer>
    <h1 class="sub-title">RPC life cycle</h1>
    <div>
      <el-image
        style="width: 260px; height: 340px; margin-bottom: 50px;"
        src="/hugging-docker.png"
        fit="cover"
      >
      </el-image>
      <div class="sentence">
        I have implemented
        <DefaultJumpLink
          :title="'RPC life cycle'"
          :link="'https://github.com/daiki328/docker-grpc'"
        />
        with golang and docker, gRPC.<br />
        <p style="margin-top: 10px;">
          What is RPC life cycle?
          See
          <DefaultJumpLink
            :title="'this document'"
            :link="'https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle'"
          />
        </p>
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

.sentence {
  float: right;
  width: 650px;
  text-align: left;
  font-size: 18px;
}

</style>
