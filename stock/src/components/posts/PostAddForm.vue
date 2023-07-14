<template>
  <div class="contents">
    <h1 class="page-header">Posting</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        
        <div class="content">
          <label for="contents">Contents:</label>
          <textarea  id="contents" type="text" rows="5" v-model="contents" />
          <p
            v-if="false"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">작성 완료</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#left {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
#content {
  margin-top: 20px;
  height: 45%;
}

.content{
    width: 100%;
}
textarea {
  border: 1px solid orange;
  border-radius: 5px;
  width: 100%;  
  height: 16rem;
  padding: 10px;
}
#comment {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
#details {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>