<template>
  <div class="top">
    <div class="header">
      <nuxt-link to="/" style="text-decoration: none;">
        <span class="main-title">skyfolio</span>
      </nuxt-link>
      <div class="icon-list">
        <a
          href="https://twitter.com/dk_m28"
          target="_blank"
          style="padding-right: 5px;"
        >
          <fa
            :icon="['fab', 'twitter']"
            size="2x"
            class="icon"
          />
        </a>
        <a
          href="https://www.instagram.com/daiki_skm_/"
          target="_blank"
          style="padding-right: 5px;"
        >
          <fa
            :icon="['fab', 'instagram']"
            size="2x"
            class="icon"
          />
        </a>
        <a
          href="https://github.com/daiki328"
          target="_blank"
          style="padding-right: 5px;"
        >
          <fa
            :icon="['fab', 'github']"
            size="2x"
            class="icon"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100025096625886"
          target="_blank"
        >
          <fa
            :icon="['fab', 'facebook-f']"
            size="2x"
            class="icon"
          />
        </a>
      </div>
      <div class="link-list">
        <nuxt-link to="/about/">
          <span class="link">About</span>
        </nuxt-link>
        <!-- <nuxt-link to="/activities/">
          <span style="color: black;">Activities</span>
        </nuxt-link> -->
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type DataType = {
}

export default Vue.extend({
  data (): DataType {
    return {
    }
  },
  methods: {
  },
})
</script>

<style scoped>

.top {
  font-family: 'Noto Sans JP', sans-serif;
  color: #333;
  letter-spacing: 1.5px;
  line-height: 1.75;
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

.icon {
  color: #333;
}

.link-list {
  position: absolute;
  bottom: 10px;
  right: 0;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.link {
  font-size: 18px;
  color: #333;
}

</style>
