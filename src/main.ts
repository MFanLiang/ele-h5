import { createApp } from 'vue';
import 'normalize.css'; // 引入并使用 css 样式重置初始化插件
// import './style.css';
import 'vant/lib/index.css';
import router from '@/router/index';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.mount('#app');
