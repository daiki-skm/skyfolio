import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// nuxt.config.tsでCSSファイルを追加
config.autoAddCss = false;

// 利用するアイコンを配列に追加
const solidIcons = [faShareSquare];
const regularIcons = [faHandPointRight];
const bransIcons = [faChrome];
const instaIcons = [faInstagram];
const twitIcons = [faTwitter];
const gitIcons = [faGithub];


// 利用するアイコンをlibraryに追加
solidIcons.forEach(icon => library.add(icon));
regularIcons.forEach(icon => library.add(icon));
bransIcons.forEach(icon => library.add(icon));
instaIcons.forEach(icon => library.add(icon));
twitIcons.forEach(icon => library.add(icon));
gitIcons.forEach(icon => library.add(icon));

// グローバルコンポーネントに登録
Vue.component('fa', FontAwesomeIcon);
