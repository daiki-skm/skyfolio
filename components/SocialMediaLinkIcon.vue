<template>
  <a
    :href="link"
    target="_blank"
  >
    <fa
      :icon="['fab', icon]"
      size="2x"
      class="icon"
    />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
}

export default Vue.extend({
  name: 'SocialMediaLinkIcon',
  props: {
    link: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  data (): DataType {
    return {
    }
  },
  methods: {
  },
})
</script>

<style scoped>

.icon {
  color: #333;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #333;
  text-decoration: underline;
}

</style>
