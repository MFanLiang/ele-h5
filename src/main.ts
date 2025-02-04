import { createApp } from 'vue';
import 'normalize.css'; // 引入并使用 css 样式重置初始化插件
// import './style.css';
import 'vant/lib/index.css';
import router from '@/router/index';
import store from '@store';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);

/** 动态设置 html 元素的 fontsize 值，以完成不同移动端宽度的适配方案 */
const rootValue = 16; // 根节点的 fontsize
const rootWidth = 390; // 设计稿宽度
const deviceWidth = document.documentElement.clientWidth; // 移动端设备宽度
document.documentElement.style.fontSize =
  (deviceWidth * rootValue) / rootWidth + 'px'; // fontsize 的计算公式为：根节点的fontsize * 设计稿宽度 / 移动端实际设备宽度

app.mount('#app');
