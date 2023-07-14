<template>

  <div id="app" class="app-contents">
    <div>
      <HeaderNav/>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "./components/HeaderNav.vue";
</script>

<style>
@import url("./css/reset.css");
@import url("./css/common.css");

.contents{
  width: 80vw;
}

#title {
  font-size: 30px;
  font-weight: bold;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  background-color: bisque;
}

#back {
  width: 80vw;
  /* height: 80vh; */
  background-color: white;
}

#real {
  width: 70%;
  height: 100%;
  margin: 50px auto;
}

#butt {
  border-style: none;
  width: 100px;
  height: 35px;
  padding: 5px;
  border-radius: 10px;
  font-size: large;
  background-color: orange;
  margin-left: 10px;
}
</style>
