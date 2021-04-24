<template>
  <div class="container">
    <el-card class="full">
      <div slot="header" class="header-parent">
        <nuxt-link to="/" style="text-decoration: none;">
          <div class="title">
            skyfolio
          </div>
        </nuxt-link>
        <div class="icon">
          <span
            @click="toHref('ig')"
            style="padding-right: 5px;"
          >
            <fa
              :icon="['fab', 'twitter']"
              size="3x"
            />
          </span>
          <span
            @click="toHref('ig')"
            style="padding-right: 5px;"
          >
            <fa
              :icon="['fab', 'instagram']"
              size="3x"
            />
          </span>
          <span
            @click="toHref('gh')"
          >
            <fa
              :icon="['fab', 'github']"
              size="3x"
            />
          </span>
        </div>
      </div>
      <div　class="myself">
        <table>
          <tbody>
            <tr
              v-for="(item, id) in myself"
              :key="item"
            >
              <th
                :id="id"
                :class="{
                  'back-grey': id%2 === 0,
                }"
              >
                {{ item.title }}
              </th>
              <td
                :class="{
                  'back-grey': id%2 === 0,
                }"
              >
                {{ item.desc }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </el-card>
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
          title: 'BIRTHPLACE',
          desc: 'shirakawa city',
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
          desc: 'reading, snowboarding, coffee, listening music, fashion, design',
          isTree: true,
        },
      ],
    }
  },
  methods: {
    toHref (id:String):void {
      let url

      switch (id) {
        case 'tw':
          url = 'https://twitter.com/dk_m28'
          break

        case 'ig':
          url = 'https://www.instagram.com/daiki_skm_/'
          break

        case 'gh':
          url = 'https://github.com/daiki328'
          break

        default:
      }

      window.open(url)
    },
  },
})
</script>

<style scoped>

.container {
  font-family: Verdana,sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full {
  position: relative;
  width: 90%;
  min-height: 90vh;
}

.header-parent {
  display: flex;
}

.title {
  color: #666;
  font-size: 60px;
  font-weight: bold;
  text-shadow: 4px 4px 0px #eee, 5px 5px 0px #707070;
  margin-bottom: 10px;
  letter-spacing: 1px;
  flex-grow: 1;
}

.icon {
  flex-grow: 1;
  text-align: right;
  padding-top: 5px;
}

.myself {
  font-size: 30px;
  letter-spacing: 1px;
  /* margin-bottom: 10px; */
}

table {
  text-align: left;
  width: 100%;
  border-collapse: collapse;
}

tr {
  height: 40%;
}

th {
  color: #666;
  vertical-align: top;
  position: static;
  width: 40%;
  padding: 11px 0 9px 15px;
}

td {
  color: #666;
  padding: 11px 0 11px 15px;
}

.back-grey {
  background: rgb(240, 240, 240);
}

</style>
