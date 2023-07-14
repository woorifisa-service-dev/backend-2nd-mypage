<template>
  <nav style="display: flex; justify-content: space-evenly; background-color: cadetblue">
    <a class="nav-text" style="margin-top: 5px">공지</a>
    <a class="nav-text" style="margin-top: 5px">소통</a>
    <a class="nav-text" style="margin-top: 5px">정보방</a>
    <a class="nav-text" style="margin-top: 5px">고객센터</a>
    <div class="">
      <router-link to="/login">
        <button class="btn" type="button">sign in</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.nav-text {
  font-size: 18px;
  font-weight: 800;
}
</style>
