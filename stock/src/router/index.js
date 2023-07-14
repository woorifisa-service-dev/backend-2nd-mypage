import { createRouter, createWebHistory } from "vue-router";

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import BoardView from "../views/BoardView.vue";
import PostView from "../views/PostView.vue";
import MyPageView from "@/views/MyPageView.vue";
import LoginPage from "../views/LoginPage.vue";
import PostAddView from "../views/PostAddView.vue";

// 라우터 설계
const routes = [
  { path: "/", component: BoardView },
  { path: "/mypage", component: MyPageView },
  { path: "/board", component: BoardView },
  { path: "/board/post/1", component: PostView },
  { path: "/login", component: LoginPage },
  { path: "/board/post", component: PostAddView },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
