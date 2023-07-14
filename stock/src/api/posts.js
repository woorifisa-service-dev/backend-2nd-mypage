// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { baseAxios } from "./index";

function fetchPosts() {
  return baseAxios.get("/app/posts");
}

function fetchPost(postId) {
  return baseAxios.get(postId);
}

function createPost(postData) {
  return baseAxios.post("/", postData);
}

function deletePost(postId) {
  return baseAxios.delete(postId);
}

function editPost(postId, postData) {
  return baseAxios.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
