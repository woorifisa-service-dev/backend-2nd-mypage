import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import { router } from "./router/index.js";

const app = createApp(App);
app.use(router); // 라우터 사용
app.provide("$axios", axios);
app.mount("#app");
