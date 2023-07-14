<template>
  <div id="post-box">
    <div>{{ post.nickName }}</div>
    <div>
      {{ post.content }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    default() {
      return {
        id: 1,
        content: "",
        likeNum: "",
        nickName: "",
      };
    },
  },
});
</script>

<style scoped>
#post-box {
  border: 1px solid;
  border-radius: 10px;
  padding: 30px;
  background-color: LightBlue;
  margin-top: 20px;
}
</style>
