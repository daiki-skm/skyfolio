<template>
  <DefaultContainer>
    <DefaultSubTitle
      :title="'Terminal'"
    />
    <div class="demo">
      <vue-shell
        :banner="banner"
        :shell_input="send_to_terminal"
        :commands="commands"
        @shell_output="prompt"
      >
      </vue-shell>
    </div>
  </DefaultContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  send_to_terminal: any,
  banner: any,
  commands: any,
}

export default Vue.extend({
  layout: 'common',
  data (): DataType {
    return {
      send_to_terminal: "aaaaaaaaa",
      banner: {
        header: "Vue Shell",
        subHeader: "Shell is power just enjoy 🔥",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
            first: "🔅",
            second: "🔆",
            time: 750
        },
        sign: "VueShell $",
        img: {
            align: "left",
            link: "/top/music-top.png",
            width: 100,
            height: 100
        }
      },
      commands: [
        {
          name: "info",
          get() {
            return `<p>With ❤️ By Salah Bentayeb @halasproject.</p>`;
        }
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        },
      ],
    }
  },
  methods: {
    prompt(value: any): void {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      }
    },
  },
})
</script>

<style scoped>

.demo {
  margin: 0 auto;
  /* overflow: scroll; */
  /* min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 70px; */
}

</style>
