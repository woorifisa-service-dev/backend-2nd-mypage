<template>
  <div id="back">
    <!-- <HeaderNav /> -->

    <div id="real">
      <span id="space">
        <div>
          <span id="title">게시판</span>
          <img src="../assets/image.png" />
        </div>
        <router-link to="/board/post">
          <button id="butt">글쓰기</button>
        </router-link>
      </span>
      <div id="posts">
        <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from "../components/PostItem.vue";
import { fetchPosts } from "@/api/posts";
import {getAccessToken} from "@/api/auth";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from 'vue-router'
const posts = ref(null);

onMounted(async () => {
  console.log("posts request start");
  try {
    const route = useRoute();

    const { data } = await fetchPosts();
    console.log('data'+data.result);

    if(route.query.code.length > 0 ){
    const {data} = await getAccessToken("google",{
        code: route.query.code
    });
    console.log(data.result.accessToken);
    console.log('token'+JSON.stringify(data));

    localStorage.setItem("cqwckoqpkqwdji2112FQNW",data.result.accessToken);
    }
    
    posts.value = data.result;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
img {
  margin-left: 5px;
  width: 25px;
  height: 30px;
}

#space {
  display: flex;
  justify-content: space-between;
}

#posts {
  margin-top: 30px;
}
</style>
