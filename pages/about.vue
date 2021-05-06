<template>
  <DefaultContainer>
    <DefaultSubTitle
      :title="'About'"
    />
    <div>
      <el-image
        style="width: 200px; height: 200px; padding-top: 10px;"
        src="/me.JPG"
        fit="cover"
      >
      </el-image>
      <table>
        <tbody>
          <tr
            v-for="(item, id) in myself"
            :key="id"
          >
            <th :id="id">
              {{ item.title + ' :' }}
            </th>
            <td>
              {{ item.desc }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultContainer>
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
          desc: 'Daiki Sakuma',
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
          desc: 'vue.js, nuxt,js, golang',
        },
        {
          title: 'INTEREST/HOBBY',
          desc: 'Reading books, Listening to music, etc...',
        },
      ],
    }
  },
  methods: {
  },
})
</script>

<style scoped>

table {
  float: right;
  width: 710px;
  text-align: left;
}

th {
  vertical-align: top;
  font-size: 18px;
  width: 40%;
}

td {
  width: 65%;
  font-size: 18px;
}

</style>
