<template>
  <div class="container">
    <template
      v-for="(cardDataObject, index) in cardDataList"
    >
      <ActivitiesLinkCard
        :key="index"
        :link="cardDataObject.link"
        :class-name="cardDataObject.className"
        :src="cardDataObject.src"
      />
    </template>
    <IconArrowUp />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type cardDataObject = {
  link: string
  className: string
  src: string
}

type DataType = {
  cardDataList: cardDataObject[]
}

export default Vue.extend({
  layout: 'common',
  data (): DataType {
    return {
      cardDataList: [
        {
          link: '/activities/notion/',
          className: 'notion',
          src: '/top/notion-top.png'
        },
        {
          link: '/activities/bot/',
          className: 'bot',
          src: '/top/music-top.png'
        },
        {
          link: '/activities/game/',
          className: 'game',
          src: '/top/game-top.png'
        },
        {
          link: '/activities/cli/',
          className: 'cli',
          src: '/top/cli.png'
        },
        {
          link: '/activities/dalian/',
          className: 'dalian',
          src: '/top/dalian-top.png'
        },
        {
          link: '/activities/win/',
          className: 'win',
          src: '/top/win-top.png'
        },
        {
          link: '/activities/hackTrek/',
          className: 'hack-trek',
          src: '/top/hack-trek-top.png'
        },
      ]
    }
  },
})
</script>

<style scoped>

.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
