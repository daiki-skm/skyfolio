<template>
  <div class="container">
    <h1 class="sub-title">Bookshelf</h1>
    <div>
      <el-row>
        <el-col :span="6" v-for="(num, id) in myself" :key="id">
          <el-card class="box-card">
            <span class="card-title">Demo</span>
          </el-card>
          <div
            class="grid-content"
            :class="{
              'bg-color': (id%2 === 0 && Math.floor(id/4)%2 === 0) || (id%2 === 1 && Math.floor(id/4)%2 === 1),
              'bg-color-light': (id%2 === 1 && Math.floor(id/4)%2 === 0) || (id%2 === 0 && Math.floor(id/4)%2 === 1),
            }"
          ></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  myself: any,
}

export default Vue.extend({
  layout: 'common',
  data (): DataType {
    return {
      myself: [
        {
          title: 'NAME',
          url: '',
        },
        {
          title: 'GENDER',
          desc: 'male',
        },
        {
          title: 'DATE OF BIRTH',
          desc: '3/28/2001',
        },
        {
          title: 'BORN IN',
          desc: 'Shirakawa city',
        },
        {
          title: 'CURRENTLY IN',
          desc: 'Aizuwakamatsu city',
        },
        {
          title: 'TECHNOLOGIES',
          desc: 'vue.js, nuxt,js',
        },
        {
          title: 'WHILE STUDYING',
          desc: 'golang',
        },
        {
          title: 'INTEREST/HOBBY',
          desc: 'Reading books, Listening to music, Snowboarding',
        },
      ],
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
  margin: 0 0 70px 0;
  font-size: 45px;
  text-align: left;
}

.box-card {
  height: 170px;
  width: 170px;
  display: inline-flex;
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
  /* background: #d3dce6; */
  /* background: #CD853F; */
  background: #B8860B;
}
.bg-color-light {
  /* background: #e5e9f2; */
  background: #D2B48C;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 50px;
}
.row-bg {
  padding: 10px 0;
}

</style>
