<template>
  <div class="container">
    <ActivitiesLinkCard
      :link="'/activities/grpc/'"
      :class-name="'grpc'"
      :src="'hugging-docker.png'"
    />
    <ActivitiesLinkCard
      :link="'/activities/game/'"
      :class-name="'game'"
      :src="'game-top.png'"
    />
    <ActivitiesLinkCard
      :link="'/activities/cli/'"
      :class-name="'cli'"
      :src="'cli.png'"
    />
    <ActivitiesLinkCard
      :link="'/activities/dalian/'"
      :class-name="'dalian'"
      :src="'dalian-top.png'"
    />
    <ActivitiesLinkCard
      :link="'/activities/win/'"
      :class-name="'win'"
      :src="'win-top.png'"
    />
    <ActivitiesLinkCard
      :link="'/activities/hackTrek/'"
      :class-name="'hack-trek'"
      :src="'hack-trek-top.png'"
    />
    <IconArrowUp />
  </div>
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
  mounted() {
  },
  methods: {
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
