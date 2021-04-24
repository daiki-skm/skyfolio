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
                class=""
              >
                {{ item.title + ' :'}}
              </th>
              <td class="">
                {{ item.desc }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <Carousel /> -->
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  myself: any,
}

export default Vue.extend({
  // layout: 'common',
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
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: bold;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  flex-grow: 1;
}

.icon {
  flex-grow: 1;
  text-align: right;
  padding-top: 5px;
}

.myself {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  /* font-weight: bold; */
  font-size: 30px;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

table {
  text-align: left;
  width: 100%;
}

/* caption {
  text-align: left;
  border-bottom: var(--v-line-base) 2px solid;
} */

tr {
  /* padding-bottom: 20px; */
}

th {
  vertical-align: top;
  position: static;
  width: 40%;
}

</style>
