<template>
  <div class="top">
    <div class="header">
      <nuxt-link to="/" style="text-decoration: none;">
        <span class="main-title">skyfolio</span>
      </nuxt-link>
      <div class="icon-list">
        <template
          v-for="(iconDataObject, index) in iconDataList"
          class="issuetags"
        >
          <SocialMediaLinkIcon
            :key="index"
            :link="iconDataObject.link"
            :icon="iconDataObject.icon"
            style="padding-right: 10px;"
          />
        </template>
      </div>
      <div class="link-list">
        <nuxt-link to="/about/">
          <span class="link" style="padding-right: 40px;">About</span>
        </nuxt-link>
        <nuxt-link to="/bookshelf/">
          <span class="link">Bookshelf</span>
        </nuxt-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type iconDataObject = {
  link: string
  icon: string
}

type DataType = {
  iconDataList: iconDataObject[]
}

export default Vue.extend({
  data (): DataType {
    return {
      iconDataList: [
        {
          link: 'https://twitter.com/daiki_skm',
          icon: 'twitter'
        },
        {
          link: 'https://www.instagram.com/daiki_skm_/',
          icon: 'instagram'
        },
        {
          link: 'https://github.com/daiki328',
          icon: 'github'
        },        
        {
          link: 'https://www.facebook.com/profile.php?id=100025096625886',
          icon: 'facebook-f'
        }
      ]
    }
  },
})
</script>

<style scoped>

.top {
  font-family: 'Noto Sans JP', sans-serif;
  color: #333;
  letter-spacing: 1.5px;
  line-height: 1.75;
  background: #fffffd;
}

.header {
  position: relative;
  max-width: 960px;
  height: 270px;
  display: flex;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 5em;
  margin-left: auto;
}

.main-title {
  letter-spacing: 3px;
  color: #333;
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  top: 90px;
  left: 0;
  margin: 0;
  padding-left: 0;
  text-align: center;
}

.icon-list {
  position: absolute;
  top: 130px;
  right: 10px;
  text-align: center;
  margin: 0 auto;
}

.link-list {
  position: absolute;
  bottom: 10px;
  right: 0;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #333;
  text-decoration: underline;
}

.link {
  font-size: 15px;
  color: #333;
}

</style>
